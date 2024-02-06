import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/app/components/header/Navigation"
import Footer from "./components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wizytówka Google | Reklama Google Ads | Reklama Facebook | SEO | Strony WWW ",
  description: "Dostarczam rozwiązania dla przedsiębiorców z zakresu widoczności w sieci. Tworzę Skuteczne Wizytówki Google oraz Strony WWW oraz Magnetyczne Kampanie Reklamowe w Google, Facebook oraz Tik Tok.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
       </body>
    </html>
  );
}
