
import { Inter, Space_Grotesk } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"], // Corrected 800 to 700
  variable: "--font-space-grotesk",
});

export const metadata = {
  title: "QuantumLeap AI - AI-Driven Operations Suite",
  description: "QuantumLeap AI: Pioneering AI-driven operational suites for the experience economy and high-frequency trading.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} ${spaceGrotesk.variable} bg-black text-gray-50 antialiased`}>
        {children}
      </body>
    </html>
  );
}
