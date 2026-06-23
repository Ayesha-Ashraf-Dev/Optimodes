import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Optimodes - Digital Agency & Software Solutions",
  description: "We help businesses grow, scale, and stay ahead through modern websites, custom software, and automated lead generation systems.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <div style={{ paddingTop: "55px" }}>
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
