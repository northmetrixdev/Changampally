import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import SmoothScroll from "@/components/providers/SmoothScroll";
import { SITE_NAME, SITE_TAGLINE, SITE_DESCRIPTION } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
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
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      {/* #EAECE4 = brand sandstone */}
      <body className="min-h-[80vh] font-sans antialiased bg-sandstone text-charcoal" style={{ backgroundColor: "#EAECE4", color: "#33181C" }} suppressHydrationWarning>
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
