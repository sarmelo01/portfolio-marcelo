import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Marcelo Fuhr | Portfólio",
  description:
    "Portfólio profissional de Marcelo Fuhr — estudante de Ciência da Computação focado em sistemas web, automações e soluções digitais.",
  keywords: [
    "Marcelo Fuhr",
    "portfólio",
    "tecnologia",
    "sistemas web",
    "automações",
    "suporte técnico",
    "Campo Grande MS",
  ],
  authors: [{ name: "Marcelo Fuhr" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}