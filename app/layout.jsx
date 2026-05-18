import { JetBrains_Mono } from "next/font/google";

import "./globals.css";

import Header from "@/components/Header";
import MouseGlow from "@/components/MouseGlow";
import PageTransition from "@/components/PageTransition";
import StairEffect from "@/components/StairEffect";

// --------------------------------------------------
// FONT
// --------------------------------------------------

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],

  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
  ],

  variable: "--font-jetbrains-mono",

  display: "swap",
});

// --------------------------------------------------
// METADATA
// --------------------------------------------------

export const metadata = {
  title: "Meu Portfólio",

  description:
    "Portfólio desenvolvido com Next.js mostrando projetos e habilidades.",
};

// --------------------------------------------------
// ROOT LAYOUT
// --------------------------------------------------

export default function RootLayout({
  children,
}) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
    >
      <body
        className={`
          ${jetbrainsMono.variable}
          relative
          overflow-x-hidden
          bg-primary
          font-sans
          text-white
          antialiased
        `}
      >
        {/* Glow futurista */}
        <MouseGlow />

        {/* Camada principal */}
        <div className="relative z-10">
          <Header />

          <StairEffect />

          <PageTransition>
            {children}
          </PageTransition>
        </div>
      </body>
    </html>
  );
}
