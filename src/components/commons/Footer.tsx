import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-[#a78bfa]/30 via-[#7c3aed]/20 to-[#3b0764]/30 pt-12 pb-6 text-[#c4b5fd] font-poppins border-t border-[#a78bfa]/10 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] h-[120px] sm:h-[200px] bg-[#a78bfa]/20 blur-3xl rounded-full pointer-events-none -z-10" />
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-8 md:gap-12 relative z-10">
        {/* Logo & About */}
        <div className="flex-1 mb-8 md:mb-0 min-w-[220px]">
          <div className="flex items-center gap-3 mb-2">
            <span className="flex items-center space-x-2 font-bold text-2xl text-[#a78bfa] drop-shadow-lg">
              Ξxora
            </span>
          </div>
          <div className="text-[#ede9fe] text-base mb-3 font-medium">
            Intelligent AI Communication<br />
            <span className="text-[#c4b5fd] text-sm font-normal">
              Chat • Voice • Call • Omnichannel AI
            </span>
          </div>
          <div className="text-xs text-[#c4b5fd] space-y-1">
            <span className="block">Email: <Link href="mailto:support@aahrbitx.com" className="hover:text-[#a78bfa] transition">support@aahrbitx.com</Link></span>
            <span className="block">Location: <Link href="https://goo.gl/maps/xyz" target="_blank" rel="noopener noreferrer" className="hover:text-[#a78bfa] transition">Kanyakumari, India</Link></span>
          </div>
        </div>
        {/* Links */}
        <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <div className="font-semibold text-[#a78bfa] mb-3 uppercase tracking-wider">Pages</div>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="#about" className="hover:text-white transition">About</Link></li>
              <li><Link href="#features" className="hover:text-white transition">Features</Link></li>
              <li><Link href="/Demo" className="hover:text-white transition">Demo</Link></li>
              <li><Link href="#achivements" className="hover:text-white transition">Achivements</Link></li>
              <li><Link href="#faq" className="hover:text-white transition">F&Q</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-[#a78bfa] mb-3 uppercase tracking-wider">Legal</div>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition">Terms of Use</Link></li>
              <li><Link href="#" className="hover:text-white transition">Careers</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-[#a78bfa] mb-3 uppercase tracking-wider">Connect</div>
            <div className="flex gap-3 sm:gap-4 mt-2 flex-wrap">
              <Link href="https://www.linkedin.com/company/aahrbitx" target="_blank" rel="noopener noreferrer" className="hover:text-white transition" aria-label="LinkedIn">
                <svg width="24" height="24" fill="currentColor"><path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.67a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zm15.11 12.78h-3.56v-5.6c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.69h-3.56V9h3.42v1.56h.05c.48-.91 1.65-1.85 3.39-1.85 3.62 0 4.29 2.38 4.29 5.47v6.27z"/></svg>
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition" aria-label="Twitter">
                <svg width="24" height="24" fill="currentColor"><path d="M24 4.56c-.89.39-1.84.65-2.84.77a4.93 4.93 0 0 0 2.16-2.72 9.86 9.86 0 0 1-3.13 1.2A4.92 4.92 0 0 0 16.62 3c-2.73 0-4.94 2.21-4.94 4.94 0 .39.04.77.12 1.13C7.69 8.86 4.07 6.92 1.64 3.91c-.43.74-.67 1.6-.67 2.52 0 1.74.89 3.28 2.25 4.18-.83-.03-1.61-.25-2.29-.63v.06c0 2.43 1.73 4.46 4.03 4.92-.42.12-.86.18-1.31.18-.32 0-.63-.03-.93-.09.63 1.97 2.45 3.4 4.6 3.44A9.87 9.87 0 0 1 0 21.54a13.94 13.94 0 0 0 7.56 2.22c9.05 0 14-7.5 14-14 0-.21 0-.42-.02-.63A9.93 9.93 0 0 0 24 4.56z"/></svg>
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition" aria-label="GitHub">
                <svg width="24" height="24" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.36 9.36 0 0 1 12 7.43c.85.004 1.7.12 2.5.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/></svg>
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition" aria-label="Instagram">
                <svg width="24" height="24" fill="currentColor"><path d="M21.35 2.65A3.37 3.37 0 0 0 18.67 2H5.33A3.37 3.37 0 0 0 2.65 2.65 3.37 3.37 0 0 0 2 5.33v13.34c0 .89.35 1.74.98 2.37A3.37 3.37 0 0 0 5.33 22h13.34c.89 0 1.74-.35 2.37-.98A3.37 3.37 0 0 0 22 18.67V5.33c0-.89-.35-1.74-.98-2.37zM20 18.67c0 .37-.15.72-.41.98a1.4 1.4 0 0 1-.98.41H5.33a1.4 1.4 0 0 1-.98-.41A1.4 1.4 0 0 1 4 18.67V5.33c0-.37.15-.72.41-.98.26-.26.61-.41.98-.41h13.34c.37 0 .72.15.98.41.26.26.41.61.41.98v13.34z"/><circle cx="12" cy="12" r="3.2"/></svg>
              </Link>
            </div>
            <div className="mt-4 text-xs text-[#ede9fe]">Our team is available <span className="text-[#a78bfa] font-semibold">24/7</span> to answer your queries.</div>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-[#ede9fe]/70 mt-8 sm:mt-12 relative z-10 px-2">
        <span>
          © 2025 AahrbitX Technologies. Ξxora – Intelligent AI Communication.
        </span>
        <span className="mx-2">|</span>
        <Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
        <span className="mx-2">|</span>
        <Link href="/terms" className="hover:text-white transition">Terms of Use</Link>
        <span className="mx-2">|</span>
        <Link href="/careers" className="hover:text-white transition">Careers</Link>
        <span className="mx-2">|</span>
        <Link href="/contact" className="hover:text-white transition">Contact Us</Link>
      </div>
    </footer>
  );
}