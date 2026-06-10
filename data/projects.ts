export type Project = {
  title: string
  slug: string
  shortDescription: string
  description: string
  status: string
  type: string
  technologies: string[]
  highlights: string[]
  githubUrl?: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    title: "Trevo Barbearia",
    slug: "trevo-barbearia",
    shortDescription:
      "Sistema de gestão web desenvolvido para uma barbearia real, com agendamento online, painel administrativo e controle operacional.",
    description:
      "Projeto real desenvolvido para cliente, com foco em organizar agendamentos, profissionais, serviços, produtos, relatórios e rotinas administrativas. O sistema foi concluído tecnicamente, mas não foi lançado oficialmente por decisão comercial do cliente.",
    status: "Concluído tecnicamente",
    type: "Sistema de Gestão Web",
    technologies: ["React", "TypeScript", "Supabase", "Vercel"],
    highlights: [
      "Agendamento online público",
      "Painel administrativo",
      "Gestão de profissionais, serviços e produtos",
      "Relatórios financeiros e controle de caixa",
      "Bloqueios de horários",
      "Integração com Supabase",
    ],
  },
  {
    title: "Sarmelo Delivery",
    slug: "sarmelo-delivery",
    shortDescription:
      "Sistema de delivery inspirado em plataformas como iFood, com cardápio, carrinho, pedidos, cupons e painel do restaurante.",
    description:
      "Projeto desenvolvido como desafio técnico, simulando uma operação de delivery com autenticação, cálculo de frete, pedidos, cupons e área administrativa para o restaurante.",
    status: "Projeto técnico",
    type: "Sistema de Delivery",
    technologies: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "SQLite",
      "JWT",
      "ViaCEP",
      "Positionstack",
    ],
    highlights: [
      "Cardápio digital",
      "Carrinho de compras",
      "Sistema de pedidos",
      "Cupons de desconto",
      "Frete por distância",
      "Autenticação com JWT",
      "Painel do restaurante",
    ],
    githubUrl: "https://github.com/sarmelo01/Sistema-Delivery",
  },
] 