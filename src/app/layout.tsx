
import { Inter, Space_Grotesk } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"],
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
        {/* Navbar */} 
        <nav className="fixed top-0 left-0 w-full z-50 p-4 bg-black/60 backdrop-blur-sm">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className={`${spaceGrotesk.className} text-xl font-bold text-cyan-electric`}>
              QuantumLeap AI
            </h1>
            {/* Add navigation links here if needed */}
          </div>
        </nav>
        <div className="pt-16">{children}</div> {/* Offset for fixed navbar */} 
      </body>
    </html>
  );
}
