import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Beene Chilala | Software Developer",
  description:
    "Portfolio of Beene Chilala — Software Developer specializing in web development, databases, and systems administration.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="container mx-auto px-4 pt-24 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
