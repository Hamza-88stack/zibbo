"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Product images from Productsimages folder
import Product1 from "../Prodcutsimages/01 1.png"
import Product2 from "../Prodcutsimages/02 b 2.png"
import Product3 from "../Prodcutsimages/03 208889220.png"
import Product4 from "../Prodcutsimages/04.png"
import Product5 from "../Prodcutsimages/05 b 3.png"
import Product6 from "../Prodcutsimages/06 1.png"
import Product7 from "../Prodcutsimages/07 1.png"
import Product8 from "../Prodcutsimages/08 1.png"
import Product9 from "../Prodcutsimages/11 99.png"
import Product10 from "../Prodcutsimages/12 1.png"
import Product11 from "../Prodcutsimages/Group 1000005108.png"
import Product12 from "../Prodcutsimages/Group 1000005109.png"
import Main from "../Group 1000005136.png"
import Global from "../WhatsApp Image 2025-10-24 at 9.31.57 PM 1.png"
export default function ProductsPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;
    const products = [
        {
            id: 1,
            name: "25.6kWH",
            slug: "25-6kwh-wall-mounted",
            type: "Stacked Type",
            category: "WALL MOUNTED",
            specs: "LiFePO4 Battery Pack",
            image: Product1,
            featured: false
        },
        {
            id: 2,
            name: "19.2kWH",
            slug: "19-2kwh-wall-mounted",
            type: "Stacked Type",
            category: "WALL MOUNTED",
            specs: "LiFePO4 Battery Pack",
            image: Product2,
            featured: false
        },
        {
            id: 3,
            name: "14.3kWH",
            slug: "14-3kwh-wall-mounted",
            type: "Stacked Type",
            category: "WALL MOUNTED",
            specs: "LiFePO4 Battery Pack",
            image: Product3,
            featured: false
        },
        {
            id: 4,
            name: "5.0kWH",
            slug: "5-0kwh-wall-mounted",
            type: "Stacked Type",
            category: "WALL MOUNTED",
            specs: "Quick & Efficient Cell",
            image: Product4,
            featured: false
        },
        {
            id: 5,
            name: "51.2V 200Ah",
            slug: "51-2v-200ah-powerwall",
            type: "Stacked Type",
            category: "POWERWALL",
            specs: "Grade A LiFePO4 Cell",
            image: Product5,
            featured: false
        },
        {
            id: 6,
            name: "51.2V 100Ah-200Ah",
            slug: "51-2v-100ah-200ah-all-in-one",
            type: "Stacked Type",
            category: "ALL-IN-ONE",
            specs: "Grade A LiFePO4 Cell",
            image: Product6,
            featured: false
        },
        {
            id: 7,
            name: "25.6kWH",
            slug: "25-6kwh-stacked",
            type: "Stacked Type",
            category: "Stacked Type",
            specs: "51.2V 500Ah",
            image: Product7,
            featured: false
        },
        {
            id: 8,
            name: "51.2V 300Ah",
            slug: "51-2v-300ah-stacked",
            type: "Stacked Type",
            category: "Stacked Type",
            specs: "Grade A LiFePO4 Cell",
            image: Product8,
            featured: false
        },
        {
            id: 9,
            name: "20.48kWH",
            slug: "20-48kwh-stacked",
            type: "Stacked Type",
            category: "Stacked Type",
            specs: "LiFePO4 LIFEPO4",
            image: Product9,
            featured: false
        },
        {
            id: 10,
            name: "35.84kWH",
            slug: "35-84kwh-stacked",
            type: "Stacked Type",
            category: "Stacked Type",
            specs: "Grade A LiFePO4 Cell",
            image: Product10,
            featured: false
        },
        {
            id: 11,
            name: "2MWh",
            slug: "2mwh-mobile-power",
            type: "Stacked Type",
            category: "Mobile power stations",
            specs: "LiFePO4 Cell",
            image: Product11,
            featured: false
        },
        {
            id: 12,
            name: "Home Energy Storage",
            slug: "home-energy-storage",
            type: "Stacked Type",
            category: "Home Energy Storage",
            specs: "Smart Grid Connected Home Energy Storage System",
            image: Product12,
            featured: false
        }
    ];

    const recommendedProducts = products.slice(0, 3);
    const totalPages = Math.ceil(products.length / productsPerPage);
    const currentProducts = products.slice(
        (currentPage - 1) * productsPerPage,
        currentPage * productsPerPage
    );

    return (
        <div className="bg-gray-900 text-white">
            {/* Navigation - Same as about page */}
                <nav className="fixed top-0 w-full z-50 bg-black/10 backdrop-blur-md">
                    <div className="max-w-7xl mx-auto px-6 py-4">
                        <div className="flex items-center justify-between">
                            <Link href="/" className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="84" height="52" viewBox="0 0 84 52" fill="none">
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
                            <div className="hidden md:flex items-center bg-white text-black p-2 rounded-full px-5 space-x-10">
                                <Link href="/products" className="hover:text-blue-400 transition font-bold text-blue-500">Product</Link>
                                <Link href="/case-studies" className="hover:text-blue-400 transition">Case Studies</Link>
                                <Link href="/news" className="hover:text-blue-400 transition">News</Link>
                                <Link href="/blog" className="hover:text-blue-400 transition">Blog</Link>
                                <Link href="/about" className="hover:text-blue-400 transition">About Us</Link>
                                <button className="bg-gradient-to-r from-[#2D8DFD] to-[#3DE15C] text-white px-6 py-2 rounded-full font-semibold hover:bg-cyan-300 transition">
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="relative min-h-screen overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image 
                            alt='Products Background' 
                            src={Main} 
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/20"></div>
                    </div>
                    <div className=" relative z-10 text-center px-6 max-w-4xl mx-auto pt-32">
                        <h1 className="text-6xl text-black font-bold mb-6">Products</h1>

                        
                    </div>
                </section>

            {/* Recommended Section */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-black text-center mb-16">Recommended</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {recommendedProducts.map((product) => (
                            <div key={product.id} className="bg-white rounded-2xl border-2 border-green-400 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">{product.type}</span>
                                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                                            <div className="w-3 h-3 bg-white rounded-full"></div>
                                        </div>
                                    </div>

                                    <div className="w-full h-48 bg-gray-50 rounded-xl mb-4 flex items-center justify-center">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-contain rounded-xl"
                                        />
                                    </div>

                                    <h3 className="text-2xl font-bold text-black mb-2">{product.name}</h3>
                                    <p className="text-gray-600 mb-1">{product.specs}</p>
                                    <p className="text-sm text-gray-500 mb-4">{product.category}</p>

                                    <Link href={`/products/${product.slug}`}>
                                        <button className="w-full bg-gradient-to-r from-[#2D8DFD] to-[#3DE15C] text-white py-2 px-4 rounded-lg font-semibold hover:opacity-90 transition">
                                            View Details
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* All Products Grid */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        {currentProducts.map((product) => (
                            <div key={product.id} className="bg-white rounded-2xl border-2 border-blue-200 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">{product.type}</span>
                                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                                            <div className="w-3 h-3 bg-white rounded-full"></div>
                                        </div>
                                    </div>

                                    <div className="w-full h-48 bg-gray-50 rounded-xl mb-4 flex items-center justify-center">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-contain rounded-xl"
                                        />
                                    </div>

                                    <h3 className="text-2xl font-bold text-black mb-2">{product.name}</h3>
                                    <p className="text-gray-600 mb-1">{product.specs}</p>
                                    <p className="text-sm text-gray-500 mb-4">{product.category}</p>

                                    <Link href={`/products/${product.slug}`}>
                                        <button className="w-full bg-gradient-to-r from-[#2D8DFD] to-[#3DE15C] text-white py-2 px-4 rounded-lg font-semibold hover:opacity-90 transition">
                                            View Details
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center items-center mt-16 gap-2">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            className="p-2 text-gray-400 hover:text-blue-500 transition"
                            disabled={currentPage === 1}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {[...Array(totalPages)].map((_, index) => (
                            <button
                                key={index + 1}
                                onClick={() => setCurrentPage(index + 1)}
                                className={`w-10 h-10 rounded-lg font-semibold transition ${currentPage === index + 1
                                    ? 'bg-blue-500 text-white'
                                    : 'text-gray-400 hover:text-blue-500'
                                    }`}
                            >
                                {index + 1}
                            </button>
                        ))}

                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            className="p-2 text-gray-400 hover:text-blue-500 transition"
                            disabled={currentPage === totalPages}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
             <footer className="bg-gray-800 relative  text-white py-16 px-6">
                              <div className="absolute inset-0">
                                <Image
                                    alt="Background"
                                    src={Global}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/90"></div>
                            </div>
                <div className="max-w-7xl mx-auto relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                                    {/* About Zibbo */}
                                    <div className="grid grid-cols-4 col-span-4">
                                        <div className="lg:col-span-1">
                                            <h3 className="text-white font-semibold mb-4">About Zibbo</h3>
                                            <ul className="space-y-2 text-gray-300 text-sm">
                                                <li><a href="#" className="hover:text-white transition">Company Profile</a></li>
                                                <li><a href="#" className="hover:text-white transition">Brand House</a></li>
                                                <li><a href="#" className="hover:text-white transition">R&D Innovation</a></li>
                                                <li><a href="#" className="hover:text-white transition">Join Us</a></li>
                                            </ul>
                                        </div>
            
                                        {/* Product */}
                                        <div className="lg:col-span-1">
                                            <h3 className="text-white font-semibold mb-4">Product</h3>
                                            <ul className="space-y-2 text-gray-300 text-sm">
                                                <li><a href="#" className="hover:text-white transition">Residential ESS</a></li>
                                                <li><a href="#" className="hover:text-white transition">Commercial ESS</a></li>
                                            </ul>
                                        </div>
            
                                        {/* Cases */}
                                        <div className="lg:col-span-1">
                                            <h3 className="text-white font-semibold mb-4">Cases</h3>
                                            <ul className="space-y-2 text-gray-300 text-sm">
                                                <li><a href="#" className="hover:text-white transition">Residential Cases</a></li>
                                                <li><a href="#" className="hover:text-white transition">C&I Cases</a></li>
                                            </ul>
                                        </div>
            
                                        {/* Solutions */}
                                        <div className="lg:col-span-1">
                                            <h3 className="text-white font-semibold mb-4">Solutions</h3>
                                            <ul className="space-y-2 text-gray-300 text-sm">
                                                <li><a href="#" className="hover:text-white transition">C&I Solutions</a></li>
                                                <li><a href="#" className="hover:text-white transition">Residential Solutions</a></li>
                                                <li><a href="#" className="hover:text-white transition">Centralised Solutions</a></li>
                                            </ul>
                                        </div>
            
                                        {/* Service & News */}
                                        <div className="lg:col-span-1">
                                            <h3 className="text-white font-semibold mb-4 mt-8">Service</h3>
                                            <ul className="space-y-2 text-gray-300 text-sm">
                                                <li><a href="#" className="hover:text-white transition">Warranty Registration</a></li>
                                                <li><a href="#" className="hover:text-white transition">Download Center</a></li>
                                                <li><a href="#" className="hover:text-white transition">After-Sales</a></li>
                                                <li><a href="#" className="hover:text-white transition">More Support</a></li>
                                            </ul>
                                        </div>
                                        <div className='lg:col-span-1'>
                                            <h3 className="text-white font-semibold mb-4 mt-8">NEWS & EVENTS</h3>
                                            <ul className="space-y-2 text-gray-300 text-sm">
                                                <li><a href="#" className="hover:text-white transition">Company News</a></li>
                                                <li><a href="#" className="hover:text-white transition">Exhibition News</a></li>
                                                <li><a href="#" className="hover:text-white transition">Technology Blog</a></li>
                                                <li><a href="#" className="hover:text-white transition">Events</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* Newsletter & Contact */}
                                    <div className="lg:col-span-2">
                                        <div className="bg-gray-700 rounded-lg p-4 mb-6">
                                            <h3 className="text-white font-semibold mb-3">Subscribe To Our Newsletter</h3>
                                            <div className="flex">
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
                                <div className="border-t border-gray-700 mt-12 pt-8">
                                    <div className="flex flex-col md:flex-row justify-between items-center">
                                        <div className="flex items-center mb-4 md:mb-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="84" height="52" viewBox="0 0 84 52" fill="none" className="mr-3">
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
        </div>
    );
}