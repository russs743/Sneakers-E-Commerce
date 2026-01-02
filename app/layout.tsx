import type { Metadata } from "next";
import "./globals.css";
// Impor Header kamu (sesuaikan path-nya)
import Header from "./_components/header";
import Footer from "./_components/footer";

export const metadata: Metadata = {
  title: "SNEAKERS.CO",
  description: "Toko sneakers terbaik",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}