import React from 'react';
import Image from 'next/image';
import Global from "../WhatsApp Image 2025-10-24 at 9.31.57 PM 1.png"

export default function Footer() {
    return (
        <footer className="bg-gray-800 relative text-white py-10 sm:py-12 md:py-16 px-4 sm:px-6">
                <div className="absolute inset-0">
                    <Image
                        alt="Background"
                        src={Global}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/90"></div>
                </div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
                        {/* About Zibbo */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 col-span-full lg:col-span-4 gap-6 sm:gap-8">
                            <div className="col-span-1">
                                <h3 className="text-white font-semibold mb-4">About Zibbo</h3>
                                <ul className="space-y-2 text-gray-300 text-sm">
                                    <li><a href="#" className="hover:text-white transition">Company Profile</a></li>
                                    <li><a href="#" className="hover:text-white transition">Brand House</a></li>
                                    <li><a href="#" className="hover:text-white transition">R&D Innovation</a></li>
                                    <li><a href="#" className="hover:text-white transition">Join Us</a></li>
                                </ul>
                            </div>

                            {/* Product */}
                            <div className="col-span-1">
                                <h3 className="text-white font-semibold mb-4">Product</h3>
                                <ul className="space-y-2 text-gray-300 text-sm">
                                    <li><a href="#" className="hover:text-white transition">Residential ESS</a></li>
                                    <li><a href="#" className="hover:text-white transition">Commercial ESS</a></li>
                                </ul>
                            </div>

                            {/* Cases */}
                            <div className="col-span-1">
                                <h3 className="text-white font-semibold mb-4">Cases</h3>
                                <ul className="space-y-2 text-gray-300 text-sm">
                                    <li><a href="#" className="hover:text-white transition">Residential Cases</a></li>
                                    <li><a href="#" className="hover:text-white transition">C&I Cases</a></li>
                                </ul>
                            </div>

                            {/* Solutions */}
                            <div className="col-span-1">
                                <h3 className="text-white font-semibold mb-4">Solutions</h3>
                                <ul className="space-y-2 text-gray-300 text-sm">
                                    <li><a href="#" className="hover:text-white transition">C&I Solutions</a></li>
                                    <li><a href="#" className="hover:text-white transition">Residential Solutions</a></li>
                                    <li><a href="#" className="hover:text-white transition">Centralised Solutions</a></li>
                                </ul>
                            </div>

                            {/* Service & News */}
                            <div className="col-span-1">
                                <h3 className="text-white font-semibold mb-4 mt-0 sm:mt-8">Service</h3>
                                <ul className="space-y-2 text-gray-300 text-sm">
                                    <li><a href="#" className="hover:text-white transition">Warranty Registration</a></li>
                                    <li><a href="#" className="hover:text-white transition">Download Center</a></li>
                                    <li><a href="#" className="hover:text-white transition">After-Sales</a></li>
                                    <li><a href="#" className="hover:text-white transition">More Support</a></li>
                                </ul>
                            </div>
                            <div className='col-span-1'>
                                <h3 className="text-white font-semibold mb-4 mt-0 sm:mt-8">NEWS & EVENTS</h3>
                                <ul className="space-y-2 text-gray-300 text-sm">
                                    <li><a href="#" className="hover:text-white transition">Company News</a></li>
                                    <li><a href="#" className="hover:text-white transition">Exhibition News</a></li>
                                    <li><a href="#" className="hover:text-white transition">Technology Blog</a></li>
                                    <li><a href="#" className="hover:text-white transition">Events</a></li>
                                </ul>
                            </div>
                        </div>
                        {/* Newsletter & Contact */}
                        <div className="col-span-full lg:col-span-2">
                            <div className="bg-gray-700 rounded-lg p-4 mb-6">
                                <h3 className="text-white font-semibold mb-3 text-sm sm:text-base">Subscribe To Our Newsletter</h3>
                                <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex-1 px-3 py-2 bg-gray-600 text-white placeholder-gray-400 rounded-l-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-r-md text-sm font-medium transition">
                                        Subscribe
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-white font-semibold">Contact Us:</h3>
                                <div className="text-gray-300 text-sm">
                                    <p><span className="font-medium">Email:</span> Email@gmail.com</p>
                                    <p><span className="font-medium">Sales Call:</span> 03208889719</p>
                                    <p><span className="font-medium">Company Address:</span> Ghazi road Lhr</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="border-t border-gray-700 mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <div className="flex items-center mb-4 md:mb-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="37" viewBox="0 0 84 52" fill="none" className="mr-3 sm:w-[84px] sm:h-[52px]">
                                    <circle cx="26" cy="26" r="26" fill="#2C8FFD" />
                                    <circle cx="57.9092" cy="26" r="26" fill="#3FE25B" />
                                    <path d="M68.5884 34.6886C63.5258 34.6886 60.3472 31.3829 60.3472 26.066C60.3472 20.7491 63.5373 17.4318 68.5884 17.4318C73.6394 17.4318 76.818 20.7491 76.818 26.066C76.818 31.3829 73.6394 34.6886 68.5884 34.6886ZM68.5884 31.2442C70.9579 31.2442 72.5067 29.233 72.5067 26.066C72.5067 22.8874 70.9579 20.8762 68.5884 20.8762C66.2189 20.8762 64.67 22.8874 64.67 26.066C64.67 29.233 66.2073 31.2442 68.5884 31.2442Z" fill="white" />
                                    <path d="M47.3553 34.3997C46.0145 34.3997 45.2285 33.5906 45.2285 32.1804V19.94C45.2285 18.5299 46.0145 17.7208 47.3553 17.7208H52.9843C56.2669 17.7208 58.2434 19.3043 58.2434 21.8818C58.2434 23.7543 56.8332 25.2453 54.9839 25.4996V25.5921C57.2378 25.6961 59.0178 27.3721 59.0178 29.5913C59.0178 32.5156 56.7639 34.3997 53.1923 34.3997H47.3553ZM49.4705 24.5172H51.655C53.1923 24.5172 54.117 23.789 54.117 22.5869C54.117 21.4195 53.2848 20.726 51.8631 20.726H49.4705V24.5172ZM49.4705 31.3945H51.9902C53.7356 31.3945 54.7065 30.6316 54.7065 29.2215C54.7065 27.8576 53.7124 27.0947 51.9671 27.0947H49.4705V31.3945Z" fill="white" />
                                    <path d="M31.7747 34.3997C30.4339 34.3997 29.6479 33.5906 29.6479 32.1804V19.94C29.6479 18.5299 30.4339 17.7208 31.7747 17.7208H37.4037C40.6863 17.7208 42.6628 19.3043 42.6628 21.8818C42.6628 23.7543 41.2527 25.2453 39.4033 25.4996V25.5921C41.6572 25.6961 43.4372 27.3721 43.4372 29.5913C43.4372 32.5156 41.1833 34.3997 37.6117 34.3997H31.7747ZM33.8899 24.5172H36.0745C37.6117 24.5172 38.5364 23.789 38.5364 22.5869C38.5364 21.4195 37.7042 20.726 36.2825 20.726H33.8899V24.5172ZM33.8899 31.3945H36.4097C38.155 31.3945 39.1259 30.6316 39.1259 29.2215C39.1259 27.8576 38.1319 27.0947 36.3865 27.0947H33.8899V31.3945Z" fill="white" />
                                    <path d="M25.0462 34.6756C23.7485 34.6756 22.9878 34.1422 22.9878 33.199V24.6564C22.9878 23.7132 23.7485 23.1798 25.0462 23.1798C26.3439 23.1798 27.0935 23.7132 27.0935 24.6564V33.199C27.0935 34.1422 26.3439 34.6756 25.0462 34.6756Z" fill="white" />
                                    <path d="M9.58234 34.3997C8.31091 34.3997 7.46714 33.6599 7.46714 32.5041C7.46714 31.9262 7.64052 31.4754 8.05662 30.9321L15.3963 21.2346V21.1421H9.27026C8.13753 21.1421 7.38623 20.5179 7.38623 19.4314C7.38623 18.3449 8.12597 17.7208 9.27026 17.7208H18.2512C19.5573 17.7208 20.378 18.4836 20.378 19.6973C20.378 20.3561 20.0774 20.7838 19.7538 21.223L12.4835 30.8859V30.9784H18.9678C20.1121 30.9784 20.8519 31.6025 20.8519 32.689C20.8519 33.7755 20.089 34.3997 18.9678 34.3997H9.58234Z" fill="white" />
                                    <circle cx="25.0406" cy="19.4847" r="2.05284" fill="white" />
                                </svg>
                            </div>

                            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-gray-400 text-sm">
                                <p>Copyright 2025 Zibbo Energy Co. Ltd.</p>
                                <div className="flex space-x-4">
                                    <span>Powered By ?</span>
                                    <a href="#" className="hover:text-white transition">Sitemap</a>
                                    <a href="#" className="hover:text-white transition">Privacy Policy</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
    );
}