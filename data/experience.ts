// data/experience.ts
export type Experience = {
  role: string
  company: string
  period: string
  type: string
  description: string
  highlights: string[]
}

export const experiences: Experience[] = [
  {
    role: "Desenvolvimento de projetos próprios",
    company: "Portfólio pessoal",
    period: "Atual",
    type: "Projetos e evolução técnica",
    description:
      "Fase atual dedicada ao estudo prático, desenvolvimento de projetos próprios e construção de repertório em tecnologia, vendas, IA, inglês e empreendedorismo. Estou usando esse período para evoluir, fortalecer meu portfólio e transformar aprendizado em projetos reais.",
    highlights: [
      "Desenvolvimento do portfólio profissional",
      "Estudo prático de React, Next.js, TypeScript e bancos de dados",
      "Estudos por conta própria em vendas, IA, inglês e empreendedorismo",
      "Criação de projetos próprios com foco em problemas reais",
    ],
  },
  {
    role: "Supervisor de Customer Success / Suporte B2B",
    company: "Track Land Ltda",
    period: "Mai/2025 - Mar/2026",
    type: "Experiência profissional",
    description:
      "Atuação com suporte e atendimento a clientes B2B, acompanhamento de demandas, organização de processos, indicadores e melhoria da experiência do cliente.",
    highlights: [
      "Rotinas de suporte e atendimento a clientes B2B",
      "Acompanhamento de SLA, KPIs e satisfação",
      "Apoio na melhoria de fluxos operacionais",
      "Atuação entre cliente, operação e produto",
    ],
  },
  {
    role: "Analista de Suporte Técnico B2B",
    company: "Hiper Simples Softwares",
    period: "Dez/2024 - Mar/2025",
    type: "Experiência profissional",
    description:
      "Atuação com suporte técnico a clientes empresariais em software de gestão, ajudando usuários a entender problemas, registrar chamados e encontrar soluções práticas.",
    highlights: [
      "Suporte a clientes empresariais",
      "Diagnóstico de problemas em software de gestão",
      "Registro e acompanhamento de chamados",
      "Comunicação simples para explicar demandas técnicas",
    ],
  },
  {
    role: "Venda própria de doces",
    company: "Trabalho autônomo",
    period: "Jan/2024 - Ago/2024",
    type: "Experiência empreendedora",
    description:
      "Produção e venda própria de doces, como brigadeiros, com abordagem direta em comércios, ruas e locais movimentados. Experiência prática com venda presencial, negociação, atendimento e iniciativa própria para gerar renda.",
    highlights: [
      "Produção e venda direta de doces",
      "Abordagem presencial em comércios e na rua",
      "Atendimento, comunicação e negociação com clientes",
      "Iniciativa própria para gerar renda",
    ],
  },
  {
    role: "Auxiliar Administrativo e Suporte ao Cliente",
    company: "Fuhr Corretora de Seguros",
    period: "Jan/2022 - Jan/2024",
    type: "Experiência profissional",
    description:
      "Atuação em atendimento ao cliente, rotinas administrativas, documentação e organização de informações em ambiente financeiro regulado.",
    highlights: [
      "Atendimento e suporte a clientes",
      "Organização de documentos e informações",
      "Apoio em rotinas administrativas",
      "Contato com processos que exigiam sigilo e responsabilidade",
    ],
  },
  {
    role: "Vendedor Consultivo",
    company: "Bike Center Pantanal",
    period: "Jul/2022 - Dez/2022",
    type: "Experiência profissional",
    description:
      "Atuação com atendimento ao cliente, venda consultiva, negociação e apoio à presença digital da loja.",
    highlights: [
      "Atendimento direto ao cliente",
      "Venda consultiva e negociação",
      "Apoio no fechamento de vendas",
      "Apoio à presença digital da loja",
    ],
  },
]