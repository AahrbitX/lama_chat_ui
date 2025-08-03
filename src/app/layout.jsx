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

      <script src="https://api.aahrbitx.in/static/config.js" defer></script>
      <script
      src="https://api.aahrbitx.in/static/widget.js"
      data-client-id="24f3059f-a07a-4894-9be1-1e39d81025f2"
      defer
      ></script>
    </html>

  );
}
