import { Lato } from "next/font/google";
import "./globals.css";
import OldFooter from "@/components/OldFooter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${lato.className} mx-auto min-h-screen w-fit`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}