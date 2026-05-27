export type VideoKey = "expansao" | "clinica";

export const videos: Record<VideoKey, string> = {
  expansao: "https://www.youtube.com/embed/gqA9E_jak6w?autoplay=1",
  clinica: "https://www.youtube.com/embed/XhGBWs60bTE?autoplay=1",
};

export interface Speaker {
  name: string;
  role: string;
  img: string;
}

export const speakers: Record<"expansao", Speaker> = {
  expansao: {
    name: "Felipe Naresi",
    role: "COO da OdontoCompany",
    img: "https://pub-db8ed4fb33634589a6ce5fb07e85cb46.r2.dev/landingpage_odc_franchising/felipe_naresi.jpg",
  },
};
