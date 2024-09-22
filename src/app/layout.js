import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Next.js Application",
  description: "A powerful and responsive Next.js application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <main className="min-h-screen w-full max-w-7xl mx-auto flex justify-start items-center flex-col px-4 md:px-8 lg:px-24 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
