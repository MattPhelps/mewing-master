import "../styles/globals.css";
import AmplitudeInitializer from "../components/AmplitudeInitializer";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-base-100 text-base-content">
      <AmplitudeInitializer />
        <main className="container mx-auto px-4 lg:px-8 py-8 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
