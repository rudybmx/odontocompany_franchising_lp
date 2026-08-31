const RD_TOKEN_URL = "https://api.rd.services/auth/token";
const RD_EVENTS_URL = "https://api.rd.services/platform/events";

const CONVERSION_IDENTIFIER = "LP Investidores OdontoCompany";
const LEAD_TAGS = ["lp_investidores", "b2b_franquias"];

// cf_perfil_de_investidor no RD só aceita estas strings exatas (validado via API).
const RD_PROFILE_OPTIONS: Record<string, string> = {
  investidor: "Empreendedor/Investidor",
  dentista: "Dentista",
};

// cf_capital é campo aberto no RD — mandamos o rótulo legível em vez do valor interno do select.
const RD_CAPITAL_LABELS: Record<string, string> = {
  "450k-600k": "R$ 450k - R$ 600k",
  "600k-900k": "R$ 600k - R$ 900k",
  "900k+": "Acima de R$ 900k (multi-unit)",
};

let cachedAccessToken: { token: string; expiresAt: number } | null = null;

async function getAccessToken(): Promise<string> {
  if (cachedAccessToken && cachedAccessToken.expiresAt > Date.now()) {
    return cachedAccessToken.token;
  }

  const clientId = process.env.RD_CLIENT_ID;
  const clientSecret = process.env.RD_CLIENT_SECRET;
  const refreshToken = process.env.RD_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error("RD Station: variáveis de ambiente ausentes (RD_CLIENT_ID/RD_CLIENT_SECRET/RD_REFRESH_TOKEN).");
  }

  const res = await fetch(RD_TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
  });

  if (!res.ok) {
    throw new Error(`RD Station: falha ao renovar access_token (${res.status}): ${await res.text()}`);
  }

  const data = await res.json();
  cachedAccessToken = {
    token: data.access_token,
    // renova 60s antes do vencimento informado pelo RD
    expiresAt: Date.now() + (data.expires_in - 60) * 1000,
  };
  return cachedAccessToken.token;
}

export type RdLeadInput = {
  name: string;
  email: string;
  personalPhone: string;
  state: string;
  city: string;
  trafficSource: string;
  trafficMedium: string;
  capital: string;
  profile: string;
  prazo: string;
  conhecimento: string;
  eventId: string;
  utmSource?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
  gclid?: string;
  fbclid?: string;
  wbraid?: string;
  gbraid?: string;
  msclkid?: string;
  conversionUrl?: string;
  clientTrackingId?: string;
};

export type RdConversionResult = {
  leadId?: string;
};

export async function sendConversionToRD(lead: RdLeadInput): Promise<RdConversionResult> {
  const accessToken = await getAccessToken();

  const res = await fetch(RD_EVENTS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      event_type: "CONVERSION",
      event_family: "CDP",
      event_id: lead.eventId,
      payload: {
        conversion_identifier: CONVERSION_IDENTIFIER,
        name: lead.name,
        email: lead.email,
        personal_phone: lead.personalPhone,
        state: lead.state,
        city: lead.city,
        tags: LEAD_TAGS,
        traffic_source: lead.trafficSource,
        traffic_medium: lead.trafficMedium,
        traffic_campaign: lead.utmCampaign || "",
        traffic_term: lead.utmTerm || "",
        traffic_value: lead.utmContent || "",
        conversion_url: lead.conversionUrl || "",
        client_tracking_id: lead.clientTrackingId || "",
        gclid: lead.gclid || "",
        fbclid: lead.fbclid || "",
        wbraid: lead.wbraid || "",
        gbraid: lead.gbraid || "",
        msclkid: lead.msclkid || "",
        cf_capital: RD_CAPITAL_LABELS[lead.capital] || lead.capital,
        cf_perfil_de_investidor: RD_PROFILE_OPTIONS[lead.profile] || lead.profile,
        cf_prazo_abertura_clinica: lead.prazo,
        cf_conhece_odontocompany: lead.conhecimento,
      },
    }),
  });

  if (!res.ok) {
    throw new Error(`RD Station: falha ao registrar conversão (${res.status}): ${await res.text()}`);
  }

  const data = await res.json().catch(() => ({}));
  // Formato exato ainda não confirmado com o time — logamos bruto para conferência.
  console.log("RD Station: resposta do evento de conversão:", data);

  return { leadId: data?.event_uuid || data?.uuid || data?.id || undefined };
}
