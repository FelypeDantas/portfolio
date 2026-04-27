import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairEffect from "@/components/StairEffect";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrains-mono",
  display: "swap", // melhora performance de carregamento
});

export const metadata = {
  title: "Meu Portfólio",
  description: "Portfólio desenvolvido com Next.js mostrando projetos e habilidades.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className={`
          ${jetbrainsMono.variable}
          font-sans
          antialiased
        `}
      >
        <Header />

        <StairEffect />

        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
