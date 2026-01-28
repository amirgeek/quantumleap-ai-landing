
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "QuantumLeap AI - Personalized Learning Platform",
  description: "QuantumLeap AI: AI-powered platform for personalized learning paths, professional development, and skill mastery.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-950 text-gray-50 antialiased`}>
        {children}
      </body>
    </html>
  );
}
