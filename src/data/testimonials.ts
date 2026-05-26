export interface Testimonial {
  image: string;
  quote: string;
  name: string;
  role: string;
  rating: number;
}

export const testimonialsData: Testimonial[] = [
  {
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop',
    quote: "Saí de 20 anos no mercado financeiro sem nunca ter tocado em odontologia. O suporte da OdontoCompany foi tão completo que me senti seguro desde o primeiro dia. Hoje tenho 2 unidades e conquistei um lucro médio mensal de R$ 28k após 18 meses.",
    name: 'Ricardo S.',
    role: 'Ex-executivo bancário • Campinas, SP',
    rating: 5
  },
  {
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
    quote: "Tinha minha clínica solo há 8 anos e estava travada. Com a OdontoCompany consegui escalar sem perder qualidade. A estrutura de marketing trouxe um volume de pacientes que nunca conseguiria sozinha. Hoje alcancei 3× mais receita.",
    name: 'Dra. Ana C.',
    role: 'Dentista proprietária • Belo Horizonte, MG',
    rating: 5
  },
  {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    quote: "Comecei com 1 unidade em 2022. Em 2024 abri a terceira. O modelo escala muito bem, cada unidade nova fica mais fácil de operar porque já domino os processos. São 3 unidades ativas abertas em apenas 2 anos.",
    name: 'Marcos F.',
    role: 'Empresário do setor imobiliário • Recife, PE',
    rating: 5
  }
];
