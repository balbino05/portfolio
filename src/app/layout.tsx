import type { Metadata, Viewport } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { AmbientBackground } from "@/components/ambient-background";
import { copy } from "@/content/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ivan-balbino.vercel.app"),
  title: copy.pt.metaTitle,
  description: copy.pt.metaDescription,
  authors: [{ name: "Ivan Cássio Balbino Dias Amaral" }],
  openGraph: {
    title: copy.pt.metaTitle,
    description: copy.pt.metaDescription,
    locale: "pt_BR",
    alternateLocale: "en_US",
    type: "website",
    images: [{ url: "/ivan-balbino.png", width: 460, height: 460 }],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#050505" },
    { media: "(prefers-color-scheme: light)", color: "#f3efe6" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt"
      suppressHydrationWarning
      className={`dark ${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="relative min-h-full bg-paper text-ink">
        <Script id="theme-init" strategy="beforeInteractive">
          {`try{if(localStorage.getItem('theme')==='light')document.documentElement.classList.remove('dark')}catch(e){}`}
        </Script>
        <AmbientBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
