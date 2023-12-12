import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import { NavBar } from "../components/NavBar";
import { GeistMono } from "geist/font/mono";
import Toaster from "@/components/Toaster";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Gustavo Lage",
  description:
    "Explore meu portfólio, sou Gustavo Lage, um desenvolvedor front-end apaixonado por criar experiências web incríveis. Com habilidades sólidas em React.JS, Next JS, Typescript, Tailwind CSS e Style Components, com conceitos criativos em interfaces visuais impressionantes. Navegue pelos projetos para descobrir soluções inovadoras, responsivas e otimizadas para a web. comprometido em proporcionar experiências de usuário cativantes, mantendo-se atualizado com as últimas tendências de desenvolvimento front-end.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body className={` ${GeistMono.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />
          <div className="flex justify-center flex-col mx-auto max-w-7xl gap-2 h-auto">
            <NavBar />
            {children}
          </div>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
