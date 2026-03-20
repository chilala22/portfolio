import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Beene Chilala | Software Developer",
  description:
    "Portfolio of Beene Chilala — Software Developer specializing in web development, databases, and systems administration.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-frost-base text-slate-900 relative overflow-x-hidden">
        {/* Mesh gradient background */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-[10%] -right-[5%] w-[500px] h-[500px] rounded-full bg-frost-rose opacity-60"
            style={{ filter: "blur(100px)" }}
          />
          <div
            className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-frost-violet opacity-50"
            style={{ filter: "blur(120px)" }}
          />
          <div
            className="absolute -bottom-[10%] right-[20%] w-[400px] h-[400px] rounded-full bg-frost-sky opacity-50"
            style={{ filter: "blur(100px)" }}
          />
        </div>

        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 min-h-screen relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
