'use client'
import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 bg-black/10 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="37" viewBox="0 0 84 52" fill="none" className="sm:w-[84px] sm:h-[52px]">
                            <circle cx="26" cy="26" r="26" fill="#2C8FFD" />
                            <circle cx="57.9092" cy="26" r="26" fill="#3FE25B" />
                            <path d="M68.5884 34.6886C63.5258 34.6886 60.3472 31.3829 60.3472 26.066C60.3472 20.7491 63.5373 17.4318 68.5884 17.4318C73.6394 17.4318 76.818 20.7491 76.818 26.066C76.818 31.3829 73.6394 34.6886 68.5884 34.6886ZM68.5884 31.2442C70.9579 31.2442 72.5067 29.233 72.5067 26.066C72.5067 22.8874 70.9579 20.8762 68.5884 20.8762C66.2189 20.8762 64.67 22.8874 64.67 26.066C64.67 29.233 66.2073 31.2442 68.5884 31.2442Z" fill="white" />
                            <path d="M47.3553 34.3997C46.0145 34.3997 45.2285 33.5906 45.2285 32.1804V19.94C45.2285 18.5299 46.0145 17.7208 47.3553 17.7208H52.9843C56.2669 17.7208 58.2434 19.3043 58.2434 21.8818C58.2434 23.7543 56.8332 25.2453 54.9839 25.4996V25.5921C57.2378 25.6961 59.0178 27.3721 59.0178 29.5913C59.0178 32.5156 56.7639 34.3997 53.1923 34.3997H47.3553ZM49.4705 24.5172H51.655C53.1923 24.5172 54.117 23.789 54.117 22.5869C54.117 21.4195 53.2848 20.726 51.8631 20.726H49.4705V24.5172ZM49.4705 31.3945H51.9902C53.7356 31.3945 54.7065 30.6316 54.7065 29.2215C54.7065 27.8576 53.7124 27.0947 51.9671 27.0947H49.4705V31.3945Z" fill="white" />
                            <path d="M31.7747 34.3997C30.4339 34.3997 29.6479 33.5906 29.6479 32.1804V19.94C29.6479 18.5299 30.4339 17.7208 31.7747 17.7208H37.4037C40.6863 17.7208 42.6628 19.3043 42.6628 21.8818C42.6628 23.7543 41.2527 25.2453 39.4033 25.4996V25.5921C41.6572 25.6961 43.4372 27.3721 43.4372 29.5913C43.4372 32.5156 41.1833 34.3997 37.6117 34.3997H31.7747ZM33.8899 24.5172H36.0745C37.6117 24.5172 38.5364 23.789 38.5364 22.5869C38.5364 21.4195 37.7042 20.726 36.2825 20.726H33.8899V24.5172ZM33.8899 31.3945H36.4097C38.155 31.3945 39.1259 30.6316 39.1259 29.2215C39.1259 27.8576 38.1319 27.0947 36.3865 27.0947H33.8899V31.3945Z" fill="white" />
                            <path d="M25.0462 34.6756C23.7485 34.6756 22.9878 34.1422 22.9878 33.199V24.6564C22.9878 23.7132 23.7485 23.1798 25.0462 23.1798C26.3439 23.1798 27.0935 23.7132 27.0935 24.6564V33.199C27.0935 34.1422 26.3439 34.6756 25.0462 34.6756Z" fill="white" />
                            <path d="M9.58234 34.3997C8.31091 34.3997 7.46714 33.6599 7.46714 32.5041C7.46714 31.9262 7.64052 31.4754 8.05662 30.9321L15.3963 21.2346V21.1421H9.27026C8.13753 21.1421 7.38623 20.5179 7.38623 19.4314C7.38623 18.3449 8.12597 17.7208 9.27026 17.7208H18.2512C19.5573 17.7208 20.378 18.4836 20.378 19.6973C20.378 20.3561 20.0774 20.7838 19.7538 21.223L12.4835 30.8859V30.9784H18.9678C20.1121 30.9784 20.8519 31.6025 20.8519 32.689C20.8519 33.7755 20.089 34.3997 18.9678 34.3997H9.58234Z" fill="white" />
                            <circle cx="25.0406" cy="19.4847" r="2.05284" fill="white" />
                        </svg>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center bg-white text-black p-2 rounded-full px-5 space-x-10">
                        <Link href="/products" className="hover:text-blue-400 transition font-bold text-blue-500">Product</Link>
                        <Link href="/case-studies" className="hover:text-blue-400 transition">Case Studies</Link>
                        <Link href="/news" className="hover:text-blue-400 transition">News</Link>
                        <Link href="/blog" className="hover:text-blue-400 transition">Blog</Link>
                        <Link href="/about" className="hover:text-blue-400 transition">About Us</Link>
                        <Link href="/contact" className="bg-gradient-to-r from-[#2D8DFD] to-[#3DE15C] text-white px-6 py-2 rounded-full font-semibold hover:bg-cyan-300 transition">
                            Contact Us
                        </Link>
                    </div>

                    {/* Hamburger Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            // Close Icon
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            // Hamburger Icon
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg">
                        <div className="flex flex-col space-y-3 p-4">
                            <Link
                                href="/products"
                                className="text-black hover:text-blue-400 transition py-2 px-4 rounded-lg hover:bg-gray-100 font-semibold"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Product
                            </Link>

                            <Link
                                href="/about"
                                className="text-black hover:text-blue-400 transition py-2 px-4 rounded-lg hover:bg-gray-100"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About Us
                            </Link>
                            <Link
                                href="/contact"
                                className="bg-gradient-to-r from-[#2D8DFD] to-[#3DE15C] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition text-center"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}