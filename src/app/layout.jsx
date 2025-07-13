import "./globals.css";
import TopNavbar from "../components/commons/TopNavbar";
import Footer from "../components/commons/Footer";
// import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = typeof window !== "undefined" ? window.location.pathname : "";

  const isWidget = pathname.startsWith("/widget");

  return (
      <html lang="en">
      <body>
        <TopNavbar />
        {children}
        <Footer />
      </body>
    </html>

  );
}
