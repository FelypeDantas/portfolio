import { JetBrains_Mono } from "next/font/google";
import Script from "next/script";

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
// META PIXEL
// --------------------------------------------------

const META_PIXEL_ID = "1027487592995871";

// --------------------------------------------------
// ROOT LAYOUT
// --------------------------------------------------

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s){
              if(f.fbq)return;
              n=f.fbq=function(){
                n.callMethod
                  ? n.callMethod.apply(n,arguments)
                  : n.queue.push(arguments)
              };
              if(!f._fbq)f._fbq=n;
              n.push=n;
              n.loaded=!0;
              n.version='2.0';
              n.queue=[];
              t=b.createElement(e);
              t.async=!0;
              t.src=v;
              s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s);
            }(
              window,
              document,
              'script',
              'https://connect.facebook.net/en_US/fbevents.js'
            );

            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>

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
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>

        <MouseGlow />

        <div className="relative z-10">
          <Header />

          <StairEffect />

          <PageTransition>{children}</PageTransition>
        </div>
      </body>
    </html>
  );
}
