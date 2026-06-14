import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "NEXUAN | Elite Automation & Technology Startup",
  description: "Automatizamos el futuro con tecnologías disruptivas y soluciones de alta precisión.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased overflow-x-hidden">
        <SmoothScroll />
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(1,144,225,0.05),transparent)] pointer-events-none" />
        <main>{children}</main>
      </body>
    </html>
  );
}
