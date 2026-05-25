"use server";

export async function submitCtaForm(formData: FormData) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const city = formData.get("city");
  const capital = formData.get("capital");
  const name = formData.get("name");
  const whatsapp = formData.get("whatsapp");

  console.log("New Lead:", { city, capital, name, whatsapp });

  // Returning standard response format
  return { success: true, message: "Cadastro recebido com sucesso!" };
}
