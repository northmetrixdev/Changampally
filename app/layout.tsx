import type { Metadata } from "next";
import { Manrope, Cormorant_Garamond } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import SmoothScroll from "@/components/providers/SmoothScroll";
import { SITE_NAME, SITE_TAGLINE, SITE_DESCRIPTION } from "@/lib/constants";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

// Cormorant Garamond — closest available Google Font to Juana (elegant Latin serif)
const juana = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-juana",
  display: "swap",
});

const tropicalAvenue = localFont({
  src: "../public/fonts/TropicalAvenue.ttf",
  variable: "--font-display",
  display: "swap",
});

const catchye = localFont({
  src: "../public/fonts/Catchye.otf",
  variable: "--font-catchye",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: `${SITE_NAME} — ${SITE_TAGLINE}`, template: `%s · ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  keywords: ["Ayurveda", "Integrative Medicine", "Panchakarma", "Kerala", "Holistic Healthcare"],
  authors: [{ name: "Changampally Medical Institute" }],
  icons: {
    icon: [
      { url: "/assets/Changampally Remedium_logo.png", type: "image/png" },
    ],
    apple: "/assets/Changampally Remedium_logo.png",
  },
  openGraph: {
    type: "website", locale: "en_IN", siteName: SITE_NAME,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`, description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${juana.variable} ${tropicalAvenue.variable} ${catchye.variable}`}>
      {/* #EAECE4 = brand sandstone */}
      <body className="min-h-[80vh] font-sans antialiased bg-sandstone text-charcoal" style={{ backgroundColor: "#EAECE4", color: "#33181C" }}>
        <SmoothScroll>
          <a href="#main-content" className="skip-nav">Skip to main content</a>
          <Navbar />
          <main id="main-content" className="min-h-[80vh]" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
