import localFont from "next/font/local";
import "@/styles/globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Lixadora Gregorio - Inicio",
  description: "Site da empresa Lixadora Gregorio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-Br">
      <body className="antialiased">
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
