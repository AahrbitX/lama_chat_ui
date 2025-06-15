import TopNavbar from "../components/commons/TopNavbar"
import Footer from "../components/commons/Footer"
import './globals.css'


export default function PageLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black">
        <TopNavbar/>
          {children}
        <Footer/>
      </body>
    </html>
  )
}
