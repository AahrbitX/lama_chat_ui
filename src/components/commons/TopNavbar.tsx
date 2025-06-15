'use client';

import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function TopNavbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menu on route change or scroll
    useEffect(() => {
        if (menuOpen) {
            const closeMenu = () => setMenuOpen(false);
            window.addEventListener("resize", closeMenu);
            window.addEventListener("scroll", closeMenu);
            return () => {
                window.removeEventListener("resize", closeMenu);
                window.removeEventListener("scroll", closeMenu);
            };
        }
    }, [menuOpen]);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Demo", href: "/demo" },
        { name: "F&Q", href: "#faq" },
    ];

    return (
        <nav className="w-screen md:w-full bg-black flex flex-col items-center relative justify-center text-white px-4 sm:px-6 py-4 sm:py-6 z-50">
            <div className={`transition-all duration-300 ${scrolled ? "fixed top-0  text-white" : "fixed top-3 sm:top-5 text-white" } flex w-full sm:w-3/4 max-w-7xl items-center px-4 sm:px-5 z-50 sm:rounded-full`}
                style={{
                    backdropFilter: scrolled ? "blur(8px)" : "none",
                }}>
                <div className="flex items-center h-12 sm:h-16 mr-2">
                    <Link href="/" className="flex items-center space-x-2 font-bold text-xl text-[#a78bfa]">
                        <span className="tracking-wide">Ξxora</span>
                    </Link>
                </div>

                <ul className="hidden sm:flex flex-1 justify-end items-center space-x-6 md:space-x-8 text-sm font-semibold">
                    {navLinks.map((tab) => {
                        const isActive =
                            typeof window !== "undefined" &&
                            window.location.pathname === tab.href;
                        return (
                            <li key={tab.name}>
                                <Link
                                    href={tab.href}
                                    className={`relative transition-colors duration-300 ${
                                        isActive
                                            ? "text-[#a78bfa] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-[#a78bfa] after:rounded-full"
                                            : "text-white hover:text-[#a78bfa]"
                                    }`}
                                    style={{
                                        fontWeight: 600,
                                    }}
                                >
                                    {tab.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                <button
                    className="sm:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none ml-auto"
                    aria-label="Toggle menu"
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    <span
                        className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                            menuOpen ? "rotate-45 translate-y-1.5" : ""
                        }`}
                    />
                    <span
                        className={`block w-6 h-0.5 bg-current my-1 transition-all duration-300 ${
                            menuOpen ? "opacity-0" : ""
                        }`}
                    />
                    <span
                        className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                            menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                        }`}
                    />
                </button>

                <div
                    className={`sm:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 z-40 transition-opacity duration-300 ${
                        menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                    onClick={() => setMenuOpen(false)}
                >
                    <ul
                        className={`absolute right-4 top-16 bg-gradient-to-br from-[#3b0764] via-[#7c3aed] to-[#a78bfa] text-white rounded-xl shadow-lg py-6 px-8 flex flex-col space-y-6 text-base font-semibold min-w-[180px] transition-transform duration-300 ${
                            menuOpen ? "translate-y-0" : "-translate-y-8"
                        }`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {navLinks.map((tab) => {
                            const isActive =
                                typeof window !== "undefined" &&
                                window.location.pathname === tab.href;
                            return (
                                <li key={tab.name}>
                                    <Link
                                        href={tab.href}
                                        className={`relative transition-colors duration-300 ${
                                            isActive
                                                ? "text-[#a78bfa] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-[#a78bfa] after:rounded-full"
                                                : "text-white hover:text-[#a78bfa]"
                                        }`}
                                        style={{
                                            fontWeight: 600,
                                        }}
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {tab.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
}