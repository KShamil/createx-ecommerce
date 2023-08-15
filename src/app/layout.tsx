import { Header } from "@/widgets/Header/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { Footer } from "@/widgets/Footer/Footer";

const font = Lato({ subsets: ["latin"], weight: ["300", "400", "700", "900"] });

export const metadata: Metadata = {
  title: "CREATEX",
  description: "Createx eCommerce home page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
