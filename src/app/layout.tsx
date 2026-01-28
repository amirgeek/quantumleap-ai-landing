
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "QuantumLeap AI - AI-Driven Operations Suite",
  description: "QuantumLeap AI: Pioneering AI-driven operational suites for the experience economy and high-frequency trading.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-gray-50 antialiased`}>
        {children}
      </body>
    </html>
  );
}
