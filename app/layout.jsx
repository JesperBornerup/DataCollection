import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Splnotater",
  description:
    "En hjemmeside til at skrive sygeplejerskenotater lavet i nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <nav className="bg-gray-800 px-4 py-2">
          <div className="flex items-center justify-start">
            <Link href="/">
              <p className="text-white font-bold text-xl mr-6">Hjem</p>
            </Link>
            <Link href="/om">
              <p className="text-gray-300 hover:text-white mr-6">Om</p>
            </Link>
            <Link href="/kontakt">
              <p className="text-gray-300 hover:text-white">Kontakt</p>
            </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
