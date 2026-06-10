export type Certificate = {
  title: string
  institution: string
  status: "Concluído" | "Em andamento" | "Planejado"
  year?: string
  description: string
  certificateUrl?: string
}

export const certificates: Certificate[] = [
  {
    title: "Certificados em organização",
    institution: "Cursos e formações complementares",
    status: "Planejado",
    description:
      "Seção preparada para reunir cursos, certificados e formações complementares relacionados a tecnologia, desenvolvimento web, automações e soluções digitais.",
  },
]