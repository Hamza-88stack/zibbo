"use client"
import React, { useState, useEffect } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import Home1 from "../../app/Generated Image October 24, 2025 - 1_37PM 2 (1).png"
import Image from 'next/image';
import Aunty from "../../app/01A2222-1536x991 1.png"
import Green from "../../app/ChatGPT Image Oct 21, 2025, 02_13_26 PM 1.png"
import Product1 from "../../app/02 b 1.png"
import Product2 from "../../app/04.png"
import Product3 from "../../app/05 b 1.png"
import Product4 from "../../app/solaredge-energy-bank-battery_front-1500px-x-1000px-v2 1.png"
import Global from "../WhatsApp Image 2025-10-24 at 9.31.57 PM 1.png"
import Chip from "../Untitled-design-18-768x768 1.png"
import BhareFan from "../Group 1000005100-Photoroom.png"
import Cert1 from "../p2025021717225247f8b.webp"
import Cert2 from "../p20250217172252428ec.webp"
import Cert3 from "../p20250217172251b7e6a.webp"
import Cert4 from "../p2025021717225156cb1.webp"
import Cert5 from "../p2025021717225111093.webp"
import Cert6 from "../p202502171722510c822.webp"
import Cert7 from "../p20250217172250ee0e7.webp"
import Cert8 from "../p20250217172250418da.webp"
import Cert9 from "../p20250217172250417fe.webp"
import Cert10 from "../p2025021717225013cbf.webp"
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
export default function ZibboWebsite() {
      const [activeProduct, setActiveProduct] = useState(0);
    const [activeLocation, setActiveLocation] = useState(0);
    const [selectedCert, setSelectedCert] = useState<number | null>(null);
    const [activeCertIndex, setActiveCertIndex] = useState(0);

    const certificates = [
        Cert1, Cert2, Cert3, Cert4, Cert5, Cert6, Cert7, Cert8, Cert9, Cert10
    ];
useEffect(() => {
    const interval = setInterval(() => {
        setActiveCertIndex((prev) => (prev + 1) % certificates.length);
    }, 3000); // Rotate every 3 seconds

    return () => clearInterval(interval);
}, [certificates.length]);
    const getVisibleCertificates = () => {
        const visible = [];
        for (let i = 0; i < 5; i++) {
            const index = (activeCertIndex + i) % certificates.length;
            visible.push({ cert: certificates[index], originalIndex: index });
        }
        return visible;
    };

    const products = [
        { name: 'Grade A LiFePO4 Cell', capacity: '3.2V/280Ah', image: Product4 },
        { name: 'ZB-512200', capacity: '10.24kWh', image: Product2 },
        { name: 'ZB-C-3U-308200', capacity: '61.9V 308Ah', image: Product3 },
        { name: 'ZB-05R2300', capacity: '25.60kWh', image: Product1 }
    ];

    // Global locations with real geographic coordinates (longitude, latitude)
    const locations: { name: string; code: string; flag: string; coordinates: [number, number]; company: string }[] = [
        { name: 'Pakistan', code: 'PK', flag: '🇵🇰', coordinates: [69.3451, 30.3753], company: 'ZIBBO Pakistan PTE LTD.' },
        { name: 'United States', code: 'US', flag: '🇺🇸', coordinates: [-95.7129, 37.0902], company: 'ZIBBO North America' },
        { name: 'Canada', code: 'CA', flag: '🇨🇦', coordinates: [-106.3468, 56.1304], company: 'ZIBBO Canada' },
        { name: 'Mexico', code: 'MX', flag: '🇲🇽', coordinates: [-102.5528, 23.6345], company: 'ZIBBO Mexico' },
        { name: 'Brazil', code: 'BR', flag: '🇧🇷', coordinates: [-51.9253, -14.2350], company: 'ZIBBO Brazil' },
        { name: 'Europe', code: 'EU', flag: '🇪🇺', coordinates: [10.4515, 51.1657], company: 'ZIBBO Europe' },
        { name: 'Russia', code: 'RU', flag: '🇷🇺', coordinates: [105.3188, 61.5240], company: 'ZIBBO Russia' },
        { name: 'Kenya', code: 'KE', flag: '🇰🇪', coordinates: [37.9062, -0.0236], company: 'ZIBBO Kenya' },
        { name: 'South Africa', code: 'ZA', flag: '🇿🇦', coordinates: [22.9375, -30.5595], company: 'ZIBBO South Africa' },
        { name: 'China', code: 'CN', flag: '🇨🇳', coordinates: [104.1954, 35.8617], company: 'ZIBBO China' },
        { name: 'Japan', code: 'JP', flag: '🇯🇵', coordinates: [138.2529, 36.2048], company: 'ZIBBO Japan' },
        { name: 'South Korea', code: 'KR', flag: '🇰🇷', coordinates: [127.7669, 35.9078], company: 'ZIBBO Korea' },
        { name: 'Taiwan', code: 'TW', flag: '🇹🇼', coordinates: [120.9605, 23.6978], company: 'ZIBBO Taiwan' },
        { name: 'Thailand', code: 'TH', flag: '🇹🇭', coordinates: [100.9925, 15.8700], company: 'ZIBBO Thailand' },
        { name: 'Singapore', code: 'SG', flag: '🇸🇬', coordinates: [103.8198, 1.3521], company: 'ZIBBO Singapore' },
        { name: 'Australia', code: 'AU', flag: '🇦🇺', coordinates: [133.7751, -25.2744], company: 'ZIBBO Australia' },
        { name: 'New Zealand', code: 'NZ', flag: '🇳🇿', coordinates: [174.8860, -40.9006], company: 'ZIBBO New Zealand' },
    ];

    // Cycle through locations every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveLocation((prev) => (prev + 1) % locations.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [locations.length]);

    return (

        <div className="min-h-screen bg-gray-900 text-white">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-black/10  backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
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
                        </div>
                        <div className="hidden md:flex items-center bg-white text-black p-2 rounded-full px-5 space-x-10">
                            <a href="#product" className="hover:text-blue-400 transition">Product</a>
                            <a href="#case-studies" className="hover:text-blue-400 transition">Case Studies</a>
                            <a href="#news" className="hover:text-blue-400 transition">News</a>
                            <a href="#blog" className="hover:text-blue-400 transition">Blog</a>
                            <a href="#about" className="hover:text-blue-400 transition">About Us</a>
                            <button className="bg-gradient-to-r from-[#2D8DFD] to-[#3DE15C] text-white px-6 py-2 rounded-full font-semibold hover:bg-cyan-300 transition">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative min-h-screen  overflow-hidden">
                <div className="absolute inset-0 z-0">

                    <Image alt=' ' src={Home1} className="  w-full h-full" />

                    <div className="absolute inset-0  "></div>
                </div>

                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-32">
                    <h1 className="text-5xl md:text-5xl font-bold mb-4">
                        POWERING PAKISTAN WITH SMART
                    </h1>
                    <h2 className="text-5xl md:text-5xl font-bold text-[#3DE15C] mb-6">
                        LITHIUM ENERGY SOLUTIONS
                    </h2>
                    <p className="text-lg md:text-xl mb-8 text-white max-w-3xl mx-auto">
                        Smart, Safe, And Reliable Lithium Battery Solutions For Homes And Businesses. Click Below To See How Zibbo Is Driving The Future Of Clean Energy.A
                    </p>
                    <button className="bg-gradient-to-r from-[#2D8DFD] to-[#3DE15C] text-white px-8 py-2 rounded-full text-xl font-semibold transition transform hover:scale-105">
                        Discover Products
                    </button>

                    {/* Product Display */}
                    <div className="mt-16 flex items-end justify-center space-x-4">

                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="relative min-h-screen flex items-center justify-center py-20 px-6">
                <div className="absolute inset-0">
                    <Image
                        alt="Background"
                        src={Green}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto">
                    <h2 className="text-5xl font-bold text-center mb-12">About ZIBBO</h2>
                    <p className="text-center text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
                        Zibbo Power (ZB Power Technology Co., Ltd), Founded In 2012, Is Committed To Shaping The Future Of Energy Storage.
                        With Continuous Innovation And Strong Technical Expertise, Zibbo Has Earned Global Recognition As A Trusted Leader In
                        Advanced Lithium Battery Technology. Now Expanding Proven Solutions To Pakistan, We Aim To Empower Homes,
                        Businesses, And Industries With Energy Storage Systems That Are Safe, Sustainable, And High-Performance.
                    </p>
                    <div className="flex justify-center mb-10">
                        <button className="bg-gradient-to-r from-[#2D8DFD] to-[#3DE15C] text-white px-8 py-2 rounded-full text-xl font-semibold transition transform hover:scale-105">
                            Learn More
                        </button>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
                        <div className="lg:w-1/2">
                            <div className=" ">
                                <Image src={Aunty} alt='' />
                            </div>
                        </div>

                        <div className="lg:w-1/2 grid grid-cols-2 gap-6">
                            <div className="text-start">
                                <div className="text-6xl font-bold bg-clip-text text-transparent mb-2"
                                    style={{
                                        backgroundImage: 'linear-gradient(90deg, #2D8DFD 15%, #3DE15C 75%)'
                                    }}> 5GWh+</div>
                                <div className="text-white">Annual Production Capacity</div>
                            </div>
                            <div className="text-start">
                                <div className="text-6xl font-bold bg-clip-text text-transparent mb-2"
                                    style={{
                                        backgroundImage: 'linear-gradient(90deg, #2D8DFD 2%, #3DE15C 98%)'
                                    }}>100+</div>
                                <div className="text-white">Patents & Technological Innovations</div>
                            </div>
                            <div className="text-start">
                                <div className="text-6xl font-bold bg-clip-text text-transparent mb-2"
                                    style={{
                                        backgroundImage: 'linear-gradient(90deg, #2D8DFD 2%, #3DE15C 98%)'
                                    }}>500+</div>
                                <div className="text-white">Global Customers Trust Zibbo</div>
                            </div>
                            <div className="text-start">
                                <div className="text-6xl font-bold bg-clip-text text-transparent mb-2"
                                    style={{
                                        backgroundImage: 'linear-gradient(90deg, #2D8DFD 2%, #3DE15C 98%)'
                                    }}>100+</div>
                                <div className="text-white">Utility Model Patents</div>
                            </div>
                            <button
                                className=" border-2 border-[#3DE15C] w-52 text-white text-[#3DE15C] px-2 py-1 rounded-full font-semibold transition mr-4">
                                Learn More About Us
                            </button>

                        </div>
                    </div>


                </div>
            </section>

            {/* Solutions Section */}
            <section className="relative min-h-screen flex bg-white items-center justify-center py-20 px-6">
                <div className="absolute inset-0 bg-white"></div>
                <div className="absolute inset-0">
                    <Image
                        alt="Background"
                        src={BhareFan}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="relative z-10 max-w-6xl mx-auto">
                    <h2 className="text-5xl font-bold text-center mb-4 text-black">
                        Reliable and Smart Energy Storage for a
                    </h2>
                    <h3 className="text-5xl font-bold text-center mb-16 text-black">
                        Sustainable Tomorrow
                    </h3>

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mb-12">
                        <div className="relative backdrop-blur-md rounded-3xl p-8 hover:shadow-2xl transition transform hover:scale-105 bg-gradient-to-r from-[#07B4E3] to-[#4CC420] p-[4px]">
                            <div className="bg-white rounded-3xl p-8 h-full">
                                <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="41" viewBox="0 0 55 41" fill="none">
                                        <g clip-path="url(#clip0_163_527)">
                                            <path d="M0 17.4422C2.23438 15.5203 4.46875 13.5985 6.71745 11.6766C9.29557 9.46352 11.888 7.25045 14.4948 5.0665C14.7526 4.84811 15.1536 4.70251 15.4974 4.68795C17.1445 4.64427 18.7773 4.67339 20.4245 4.67339C20.6107 4.10557 20.4674 3.72702 20.0234 3.37758C19.3073 2.82432 18.6484 2.21281 17.9609 1.64498C17.6029 1.35379 17.388 1.03348 17.5456 0.567569C17.7031 0.11622 18.0755 0.028862 18.5052 0.028862C20.2956 0.028862 22.0859 0.028862 23.8763 0.028862C24.5208 0.028862 24.8646 0.349175 24.8503 0.858763C24.8503 1.38291 24.5065 1.65954 23.8477 1.65954C22.8021 1.65954 21.7422 1.65954 20.582 1.65954C20.7396 1.83426 20.8112 1.92162 20.8828 1.99442C22.3581 3.26111 23.8333 4.5278 25.3229 5.77993C25.4948 5.92552 25.724 6.042 25.9388 6.042C28.9323 6.05656 31.9115 6.05656 34.9049 6.05656C34.9766 6.05656 35.0339 6.042 35.1914 5.8964C35.0768 5.82361 34.9479 5.76537 34.8333 5.67801C33.3581 4.42588 31.8971 3.17375 30.4219 1.93618C30.2357 1.77602 29.9492 1.68866 29.7057 1.6741C29.1185 1.63042 28.5313 1.6741 27.9297 1.65954C27.3281 1.64498 26.9844 1.33923 26.9987 0.844203C26.9987 0.349175 27.3568 0.028862 27.944 0.028862C30.1641 -0.000257279 32.3698 -0.000257276 34.5612 -0.000257276C36.4089 -0.000257276 38.2422 -0.0293766 40.0898 0.0143024C40.4766 0.028862 40.9492 0.174459 41.25 0.421973C45.6758 4.16381 50.0872 7.93476 54.4987 11.7057C54.6706 11.8513 54.8281 12.026 54.9857 12.1862C54.9857 12.3755 54.9857 12.5502 54.9857 12.7394C54.7565 13.1908 54.3698 13.3364 53.8828 13.3218C52.4648 13.3073 51.0612 13.3073 49.6432 13.3218C49.5 13.3218 49.3424 13.3364 49.099 13.3655C49.2852 13.5257 49.3854 13.6276 49.4857 13.7149C50.7747 14.8069 52.0495 15.9134 53.3385 17.0054C53.668 17.2821 53.8971 17.5878 53.7396 18.0392C53.582 18.5051 53.1953 18.607 52.7513 18.607C52.3646 18.5924 51.9779 18.607 51.5625 18.607C51.5625 19.6262 51.5625 20.5725 51.5625 21.4898C52.25 21.6791 52.8945 21.8538 53.5534 22.0431C54.026 22.1741 54.3268 22.4653 54.4557 22.9458C54.6276 23.5864 54.7995 24.227 54.9857 24.8676C54.9857 25.4937 54.9857 26.1052 54.9857 26.7313C54.8854 27.1681 54.7852 27.6194 54.6706 28.0416C54.1979 29.716 53.2812 31.0992 51.9062 32.162C51.6341 32.3804 51.5339 32.5843 51.5339 32.9337C51.5482 35.0594 51.5482 37.1997 51.5339 39.3254C51.5339 40.4756 51.0326 40.9997 49.901 40.9997C46.3633 40.9997 42.8112 40.9997 39.2734 40.9997C39.1732 40.9997 39.0586 40.9997 38.9583 40.9852C38.4857 40.9269 38.1849 40.6066 38.1849 40.1698C38.1849 39.7039 38.5 39.3836 39.0156 39.3691C40.0182 39.3545 41.0208 39.3691 42.0234 39.3545C42.2383 39.3545 42.4531 39.3545 42.6966 39.3545C42.6966 37.3889 42.6966 35.4525 42.6966 33.5161C41.9232 33.6326 41.1641 33.8073 40.3906 33.8655C34.7331 34.2877 30.4076 27.9834 32.7422 22.7274C32.8568 22.4799 33.1289 22.2323 33.3724 22.1304C37.0534 20.5725 41.3216 22.1159 43.2695 25.6684C43.3555 25.8286 43.4414 25.9887 43.5417 26.178C44.9023 23.5282 46.9935 21.9703 49.901 21.548C49.901 20.5725 49.901 19.6262 49.901 18.6361C43.1263 18.6361 36.3945 18.6361 29.5911 18.6361C29.5768 18.8399 29.5625 19.0292 29.5625 19.2185C29.5625 25.7121 29.5625 32.2203 29.5482 38.7139C29.5482 39.2526 29.7057 39.3691 30.2214 39.3691C31.7539 39.3399 33.3008 39.3545 34.8333 39.3545C35.0052 39.3545 35.1914 39.3545 35.3633 39.3836C35.75 39.4564 35.9648 39.7039 35.9935 40.097C36.0221 40.5047 35.8503 40.8105 35.4635 40.9269C35.263 40.9852 35.0339 40.9997 34.8333 40.9997C24.0768 40.9997 13.3203 40.9997 2.54948 40.9997C2.30599 40.9997 2.04818 40.9852 1.80469 40.9269C1.23177 40.7813 0.859375 40.2572 0.845052 39.5729C0.830729 36.8066 0.845052 34.0402 0.845052 31.2739C0.845052 30.6769 1.16016 30.3275 1.64714 30.3275C2.14844 30.3275 2.44922 30.6769 2.44922 31.2739C2.44922 33.749 2.44922 36.2242 2.44922 38.6993C2.44922 38.9031 2.44922 39.0924 2.44922 39.3254C4.71224 39.3254 6.93229 39.3254 9.20964 39.3254C9.20964 39.0779 9.20964 38.8595 9.20964 38.6411C9.20964 33.7199 9.20964 28.8133 9.20964 23.8921C9.20964 22.771 9.58203 22.3779 10.6849 22.3779C13.6927 22.3779 16.7005 22.3779 19.7083 22.3779C20.7969 22.3779 21.1979 22.771 21.1979 23.8921C21.1979 28.7842 21.1979 33.6908 21.1979 38.5828C21.1979 38.8158 21.1979 39.0487 21.1979 39.3108C23.4753 39.3108 25.681 39.3108 27.944 39.3108C27.944 39.0779 27.944 38.874 27.944 38.6848C27.944 31.7835 27.944 24.8822 27.9583 17.9955C27.9583 17.5732 27.8294 17.2966 27.5 17.0345C23.5755 13.7004 19.651 10.3517 15.7266 7.00294C15.569 6.85734 15.3971 6.7263 15.1966 6.56615C14.7669 6.93014 14.3659 7.26501 13.9505 7.61444C10.2839 10.7739 6.57422 13.9333 2.86458 17.0782C2.57812 17.3257 2.46354 17.5732 2.46354 17.9518C2.47786 20.922 2.47786 23.8921 2.47786 26.8478C2.47786 27.0225 2.49219 27.2117 2.46354 27.3865C2.39193 27.8232 2.11979 28.0708 1.6901 28.0853C1.26042 28.0999 0.988281 27.8524 0.888021 27.4301C0.845052 27.27 0.859375 27.0807 0.859375 26.8914C0.859375 24.1688 0.859375 21.4316 0.859375 18.7671C0.544271 18.5196 0.272135 18.3158 0 18.0974C0 17.879 0 17.6606 0 17.4422ZM19.5651 24.0669C16.6432 24.0669 13.75 24.0669 10.8711 24.0669C10.8711 29.1773 10.8711 34.2441 10.8711 39.3108C13.793 39.3108 16.6719 39.3108 19.5651 39.3108C19.5651 34.2004 19.5651 29.1336 19.5651 24.0669ZM17.5885 6.30407C17.5742 6.34775 17.5456 6.37687 17.5312 6.42055C17.6029 6.46423 17.6745 6.50791 17.7461 6.56615C21.7135 9.95855 25.6953 13.3509 29.6771 16.7288C29.849 16.8744 30.1211 16.9617 30.3503 16.9617C36.9818 16.9763 43.6276 16.9763 50.2591 16.9763C50.388 16.9763 50.5026 16.9472 50.7318 16.9181C49.8294 16.1464 48.9987 15.4475 48.1823 14.7341C48.1393 14.7924 48.0964 14.8215 48.0677 14.8652C47.8672 15.3165 47.5091 15.4912 47.0651 15.3456C46.6211 15.2146 46.4922 14.836 46.5065 14.3992C46.5208 14.0644 46.5065 13.7149 46.5065 13.3509C42.7969 13.3509 39.1302 13.3509 35.4062 13.3509C35.4062 13.6276 35.4062 13.8751 35.4062 14.1372C35.4062 15.0253 35.1484 15.4039 34.5755 15.3893C34.0169 15.3747 33.8021 15.0253 33.7878 14.1517C33.7734 13.2199 33.9023 13.2782 32.9427 13.3364C32.0404 13.3946 31.3672 13.1034 30.6797 12.5065C28.4023 10.4973 26.0677 8.5317 23.7331 6.58071C23.5469 6.42055 23.2604 6.31863 23.0169 6.31863C21.7708 6.28952 20.5104 6.30407 19.2643 6.30407C18.7201 6.30407 18.1471 6.30407 17.5885 6.30407ZM41.3646 32.1038C41.1927 31.9145 41.0781 31.7835 40.9635 31.667C39.6172 30.2984 38.2852 28.9443 36.9388 27.5757C36.6094 27.2409 36.2656 26.9206 35.9648 26.5711C35.6497 26.2217 35.6784 25.7412 35.9792 25.4355C36.2799 25.1297 36.724 25.1152 37.0964 25.4209C37.2109 25.5083 37.2969 25.6247 37.4115 25.7267C38.9727 27.3137 40.5195 28.8861 42.0807 30.4731C42.2096 30.6041 42.3529 30.7352 42.5391 30.9099C42.582 30.7206 42.6393 30.5896 42.6536 30.444C43.2695 25.8868 38.944 22.1159 34.6042 23.4262C34.2461 23.5281 34.0885 23.732 33.9883 24.0814C33.0859 27.3428 34.8333 30.7643 37.9844 31.9C39.0443 32.2639 40.1471 32.3513 41.3646 32.1038ZM45.776 32.0456C45.9049 32.1184 45.9479 32.1475 45.9909 32.162C50.5456 33.0356 54.5273 28.4348 53.0951 23.9504C53.0234 23.7465 52.7799 23.5136 52.5794 23.4408C49.3711 22.4071 45.8763 24.2561 44.7878 27.5321C44.4297 28.624 44.3581 29.716 44.6016 30.9099C44.7878 30.7352 44.9167 30.6187 45.0456 30.4877C46.6497 28.857 48.2539 27.2263 49.8581 25.5956C50.3307 25.1152 50.8034 25.0715 51.1615 25.4355C51.5195 25.7995 51.4479 26.2799 50.9753 26.7604C50.5169 27.2263 50.0586 27.6922 49.6146 28.1436C48.3542 29.4394 47.0794 30.7206 45.776 32.0456ZM27.6003 7.71636C27.7721 7.8474 27.8294 7.90564 27.901 7.96388C29.2904 9.14321 30.6654 10.3371 32.0547 11.5019C32.2266 11.6475 32.513 11.6911 32.7422 11.6911C35.5638 11.7057 38.3997 11.7057 41.2214 11.6911C41.3932 11.6911 41.5651 11.6766 41.8372 11.662C41.6224 11.4582 41.4935 11.3272 41.3503 11.2107C40.1042 10.1478 38.8724 9.07041 37.5977 8.03667C37.3542 7.8474 36.9961 7.7018 36.6953 7.7018C33.888 7.67268 31.0807 7.68724 28.2734 7.68724C28.1016 7.67268 27.9297 7.7018 27.6003 7.71636ZM45.2461 6.042C45.1458 5.91096 45.1172 5.85273 45.0742 5.82361C43.5273 4.49868 41.9805 3.17375 40.4193 1.86338C40.2617 1.73234 40.0039 1.65954 39.7891 1.65954C37.5833 1.64498 35.3919 1.64498 33.1862 1.64498C33.0716 1.64498 32.9427 1.65954 32.7708 1.6741C32.8568 1.79058 32.8854 1.84882 32.9284 1.8925C34.4753 3.21743 36.0221 4.54236 37.5833 5.85273C37.7409 5.98376 37.9987 6.042 38.2135 6.042C39.5169 6.05656 40.8203 6.05656 42.138 6.05656C43.1406 6.042 44.1432 6.042 45.2461 6.042ZM49.9154 33.3414C48.0534 34.0693 46.2344 34.0257 44.401 33.4433C44.401 35.4525 44.401 37.3744 44.401 39.3254C46.2487 39.3254 48.0677 39.3254 49.9154 39.3254C49.9154 37.3453 49.9154 35.3797 49.9154 33.3414ZM39.7747 7.67268C39.9323 7.83284 39.9609 7.89108 40.0182 7.93476C41.4076 9.11409 42.7826 10.308 44.1719 11.4582C44.3438 11.6038 44.6159 11.6766 44.8451 11.6766C47.0221 11.6911 49.2135 11.6911 51.3906 11.6911C51.5195 11.6911 51.6484 11.662 51.8633 11.6475C51.7057 11.5019 51.6198 11.4145 51.5339 11.3417C50.2448 10.2352 48.9557 9.15777 47.681 8.03667C47.3802 7.7746 47.0651 7.67268 46.6641 7.67268C45.4466 7.68724 44.2292 7.67268 43.0117 7.67268C41.9948 7.67268 40.9635 7.67268 39.7747 7.67268Z" fill="black" />
                                            <path d="M13.7643 31.245C13.7643 31.5507 13.7786 31.871 13.7643 32.1768C13.7357 32.6427 13.4492 32.9193 13.0052 32.9339C12.5755 32.963 12.2461 32.7155 12.2031 32.2787C12.1458 31.5799 12.1458 30.8664 12.2031 30.1676C12.2461 29.7453 12.5755 29.5124 13.0195 29.5415C13.4492 29.5706 13.707 29.8181 13.75 30.2695C13.7786 30.5898 13.7643 30.9247 13.7643 31.245Z" fill="black" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_163_527">
                                                <rect width="55" height="41" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <h4 className="text-3xl font-bold mb-3 text-[#333333]">Residential Energy Storage Solution</h4>
                                <p className="text-black text-lg">
                                    Zibbo's Home Energy Storage Keeps Your Appliances Running 24/7, Saves On Electricity Bills, And Protects
                                    You From Unexpected Outages Ensuring Worry-Free Power For Your Family.
                                </p>
                            </div>
                        </div>

                        <div className="relative backdrop-blur-md rounded-3xl p-8 hover:shadow-2xl transition transform hover:scale-105 bg-gradient-to-r from-[#07B4E3] to-[#4CC420] p-[4px]">
                            <div className="bg-white rounded-3xl p-8 h-full">
                                <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="47" height="57" viewBox="0 0 47 57" fill="none">
                                        <g clip-path="url(#clip0_163_536)">
                                            <path d="M0 57C0 56.4656 0 55.9313 0 55.3412C1.31111 55.3412 2.57778 55.3412 3.91111 55.3412C3.91111 39.6996 3.91111 24.1025 3.91111 8.44981C4.71111 8.44981 5.43333 8.44981 6.21111 8.44981C6.21111 6.75762 6.21111 5.13223 6.21111 3.47344C6.77778 3.47344 7.3 3.47344 7.86667 3.47344C7.86667 5.10996 7.86667 6.73535 7.86667 8.40527C8.53333 8.40527 9.14445 8.40527 9.83333 8.40527C9.83333 5.67773 9.83333 2.93906 9.83333 0.166992C10.4111 0.166992 10.9222 0.166992 11.5 0.166992C11.5 2.89453 11.5 5.6332 11.5 8.42754C15.5222 8.42754 19.4778 8.42754 23.5 8.42754C23.5 8.73926 23.5 8.99531 23.5 9.25137C23.5 24.9152 23.5 40.568 23.5 56.2318C23.5 56.4879 23.5333 56.7439 23.5556 57C15.7 57 7.85556 57 0 57ZM5.63333 10.142C5.63333 25.227 5.63333 40.2674 5.63333 55.2967C11.0444 55.2967 16.4111 55.2967 21.8 55.2967C21.8 40.234 21.8 25.2047 21.8 10.142C16.4 10.142 11.0333 10.142 5.63333 10.142Z" fill="black" />
                                            <path d="M24.8894 57.0002C24.8894 56.4658 24.8894 55.9314 24.8894 55.3414C29.5338 55.3414 34.1227 55.3414 38.7783 55.3414C38.7783 55.0854 38.7783 54.885 38.7783 54.6846C38.7783 45.2217 38.7783 35.7588 38.7894 26.307C38.7894 25.884 38.6783 25.6613 38.2783 25.4721C33.9116 23.3791 29.5449 21.2639 25.1894 19.1598C24.9894 19.0596 24.8005 18.9594 24.5449 18.8369C24.7783 18.3471 25.0116 17.8684 25.256 17.3451C26.0116 17.7125 26.7449 18.0576 27.5116 18.425C28.4227 17.501 29.3227 16.6104 30.2005 15.6752C30.3227 15.5416 30.3449 15.2744 30.3449 15.0629C30.356 12.9811 30.356 10.9104 30.356 8.82852C30.356 8.62813 30.356 8.42773 30.356 8.19395C30.9227 8.19395 31.4338 8.19395 32.0005 8.19395C32.0005 10.0309 32.0005 11.8566 32.0005 13.7826C32.1783 13.6602 32.2894 13.6045 32.3671 13.5154C33.3783 12.5023 34.3894 11.5004 35.3783 10.4762C35.5338 10.3092 35.6449 10.0309 35.6449 9.8082C35.6671 8.43887 35.656 7.06953 35.656 5.64453C36.2116 5.64453 36.7338 5.64453 37.3227 5.64453C37.3227 6.56855 37.3227 7.48145 37.3227 8.45C38.7783 6.9916 40.1671 5.58887 41.5894 4.1416C42.0005 4.60918 42.356 5.00996 42.7227 5.43301C41.956 6.17891 41.1116 7.00273 40.2671 7.81543C40.3005 7.87109 40.3227 7.92676 40.356 7.98242C41.0449 7.98242 41.7227 7.98242 42.4338 7.98242C42.4338 8.57246 42.4338 9.08457 42.4338 9.67461C41.3783 9.67461 40.3227 9.69688 39.2783 9.66348C38.756 9.64121 38.3894 9.78594 38.0227 10.1756C36.9894 11.2666 35.9116 12.302 34.756 13.4486C35.0116 13.4709 35.156 13.5043 35.3116 13.5043C36.556 13.5043 37.7894 13.5154 39.0338 13.5043C39.3894 13.5043 39.5449 13.5934 39.5227 13.9719C39.5005 14.3504 39.5116 14.74 39.5116 15.1854C38.6116 15.1854 37.7783 15.1854 36.9449 15.1854C35.8005 15.1854 34.6449 15.1742 33.5005 15.1965C33.3116 15.1965 33.056 15.2076 32.9338 15.3301C31.656 16.5881 30.3894 17.8572 29.0783 19.1709C29.3227 19.2934 29.5005 19.4047 29.7005 19.4938C33.1005 21.1303 36.4894 22.7779 39.9005 24.4033C40.3005 24.5926 40.456 24.8041 40.456 25.2717C40.4449 35.0463 40.4449 44.8209 40.4449 54.5955C40.4449 54.8182 40.4449 55.0408 40.4449 55.308C41.7449 55.308 43.0116 55.308 44.3338 55.308C44.3338 55.9092 44.3338 56.4547 44.3338 57.0002C37.856 57.0002 31.3783 57.0002 24.8894 57.0002Z" fill="black" />
                                            <path d="M47 0C46.7445 1.72559 46.5222 3.45117 46.2111 5.16562C45.6222 8.46094 44.8889 11.734 43.7667 14.9068C43.2 16.51 42.5667 18.1131 41.4111 19.4045C40.2222 20.7293 38.7445 21.6088 36.9667 22.1209C36.8111 21.5977 36.6667 21.0855 36.5333 20.6068C37.2333 20.2617 37.9222 19.9834 38.5556 19.616C40.3111 18.6363 41.2111 16.9887 41.8889 15.1852C43.2111 11.6561 44.0222 7.98223 44.6667 4.275C44.8 3.5291 44.9222 2.79434 45.0667 1.95937C44.0778 2.12637 43.1778 2.28223 42.2778 2.44922C38.7222 3.08379 35.2222 3.89648 31.8333 5.17676C30.0333 5.85586 28.4333 6.79101 27.4333 8.53887C26.2222 10.643 25.9222 12.8361 26.6556 15.1629C26.7222 15.3855 26.7889 15.6193 26.8667 15.8754C26.3667 16.0869 25.9 16.2873 25.3 16.5434C25.0889 15.7084 24.8111 14.918 24.7111 14.1053C24.2667 10.5539 25.3222 7.50352 28.1667 5.28809C29.2778 4.41973 30.6667 3.85195 32.0111 3.36211C35.8889 1.91484 39.9445 1.13555 44.0111 0.456445C44.9 0.311719 45.7889 0.155859 46.6889 0.0111328C46.7778 0 46.8889 0 47 0Z" fill="black" />
                                            <path d="M30.3886 27.0752C30.3886 35.9703 30.3886 44.8209 30.3886 53.716C28.8663 53.716 27.3775 53.716 25.833 53.716C25.833 44.8432 25.833 35.9703 25.833 27.0752C27.3441 27.0752 28.833 27.0752 30.3886 27.0752ZM27.4997 28.734C27.4997 36.5381 27.4997 44.2754 27.4997 52.0238C27.933 52.0238 28.3219 52.0238 28.7219 52.0238C28.7219 44.242 28.7219 36.4936 28.7219 28.734C28.2997 28.734 27.9219 28.734 27.4997 28.734Z" fill="black" />
                                            <path d="M36.4334 53.7156C34.9222 53.7156 33.4334 53.7156 31.9111 53.7156C31.9111 44.8316 31.9111 35.9699 31.9111 27.0859C33.4111 27.0859 34.9 27.0859 36.4334 27.0859C36.4334 35.9477 36.4334 44.8205 36.4334 53.7156ZM33.5778 28.7336C33.5778 36.5377 33.5778 44.275 33.5778 52.0457C33.9889 52.0457 34.3667 52.0457 34.7556 52.0457C34.7556 44.2527 34.7556 36.5043 34.7556 28.7336C34.3556 28.7336 33.9889 28.7336 33.5778 28.7336Z" fill="black" />
                                            <path d="M33.7003 17.9571C33.6447 18.447 33.6003 18.9591 33.5336 19.6048C32.767 19.3932 32.0447 19.1817 31.2559 18.9591C31.5003 18.4581 31.6781 18.0462 31.9003 17.6454C31.9448 17.5563 32.1448 17.4784 32.2448 17.5118C32.7114 17.6231 33.1781 17.7901 33.7003 17.9571Z" fill="black" />
                                            <path d="M36.6448 19.2371C36.0225 19.3707 35.4559 19.482 34.8114 19.6156C34.767 19.0479 34.7225 18.5246 34.667 17.9568C35.1337 17.8566 35.5781 17.7676 36.0892 17.6562C36.267 18.1684 36.4337 18.6693 36.6448 19.2371Z" fill="black" />
                                            <path d="M38.1001 16.4102C38.4668 16.8109 38.8224 17.2006 39.2112 17.6348C38.7779 17.9688 38.3112 18.3361 37.789 18.7369C37.489 18.2137 37.2335 17.7572 36.9668 17.2785C37.3668 16.9779 37.7224 16.6996 38.1001 16.4102Z" fill="black" />
                                            <path d="M7.12207 19.7717C7.12207 18.0684 7.12207 16.3873 7.12207 14.6729C11.5221 14.6729 15.8998 14.6729 20.311 14.6729C20.311 16.3762 20.311 18.0572 20.311 19.7717C15.9332 19.7717 11.5554 19.7717 7.12207 19.7717ZM8.79985 18.1018C12.1221 18.1018 15.3887 18.1018 18.6443 18.1018C18.6443 17.4895 18.6443 16.9328 18.6443 16.3428C15.3554 16.3428 12.0887 16.3428 8.79985 16.3428C8.79985 16.9439 8.79985 17.5117 8.79985 18.1018Z" fill="black" />
                                            <path d="M7.13379 21.876C11.5338 21.876 15.8893 21.876 20.3005 21.876C20.3005 23.5793 20.3005 25.2715 20.3005 26.9971C15.9227 26.9971 11.5449 26.9971 7.13379 26.9971C7.13379 25.2938 7.13379 23.6127 7.13379 21.876ZM18.6449 23.557C15.3338 23.557 12.0671 23.557 8.80046 23.557C8.80046 24.1693 8.80046 24.726 8.80046 25.3271C12.0893 25.3271 15.356 25.3271 18.6449 25.3271C18.6449 24.7371 18.6449 24.1693 18.6449 23.557Z" fill="black" />
                                            <path d="M7.12207 34.1998C7.12207 32.4854 7.12207 30.8043 7.12207 29.0898C11.5221 29.0898 15.8998 29.0898 20.2998 29.0898C20.2998 30.7932 20.2998 32.4742 20.2998 34.1998C15.9332 34.1998 11.5554 34.1998 7.12207 34.1998ZM8.79985 32.5299C12.111 32.5299 15.3776 32.5299 18.6443 32.5299C18.6443 31.9176 18.6443 31.3498 18.6443 30.7598C15.3554 30.7598 12.0887 30.7598 8.79985 30.7598C8.79985 31.3609 8.79985 31.9176 8.79985 32.5299Z" fill="black" />
                                            <path d="M7.13379 36.3037C11.5449 36.3037 15.9116 36.3037 20.3005 36.3037C20.3005 38.007 20.3005 39.677 20.3005 41.3914C15.9116 41.3914 11.5449 41.3914 7.13379 41.3914C7.13379 39.7103 7.13379 38.0404 7.13379 36.3037ZM18.656 37.9959C15.3338 37.9959 12.0671 37.9959 8.81157 37.9959C8.81157 38.5971 8.81157 39.1648 8.81157 39.7326C12.1116 39.7326 15.3782 39.7326 18.656 39.7326C18.656 39.1426 18.656 38.5859 18.656 37.9959Z" fill="black" />
                                            <path d="M7.12207 48.6172C7.12207 46.9139 7.12207 45.2551 7.12207 43.5518C11.511 43.5518 15.8887 43.5518 20.2998 43.5518C20.2998 45.2217 20.2998 46.9027 20.2998 48.6172C15.9332 48.6172 11.5554 48.6172 7.12207 48.6172ZM8.78874 46.9473C12.111 46.9473 15.3776 46.9473 18.6332 46.9473C18.6332 46.3461 18.6332 45.7783 18.6332 45.2217C15.3332 45.2217 12.0665 45.2217 8.78874 45.2217C8.78874 45.8117 8.78874 46.3684 8.78874 46.9473Z" fill="black" />
                                            <path d="M16.6338 12.8918C16.6338 12.3574 16.6338 11.8453 16.6338 11.2998C17.856 11.2998 19.0449 11.2998 20.2671 11.2998C20.2671 11.823 20.2671 12.3352 20.2671 12.8918C19.0782 12.8918 17.8893 12.8918 16.6338 12.8918Z" fill="black" />
                                            <path d="M11.0781 12.8918C11.0781 12.3574 11.0781 11.8564 11.0781 11.2998C11.6003 11.2998 12.1003 11.2998 12.6559 11.2998C12.6559 11.8119 12.6559 12.3352 12.6559 12.8918C12.1559 12.8918 11.6337 12.8918 11.0781 12.8918Z" fill="black" />
                                            <path d="M15.4551 11.2891C15.4551 11.8234 15.4551 12.3355 15.4551 12.8811C14.944 12.8811 14.4218 12.8811 13.8662 12.8811C13.8662 12.3578 13.8662 11.8346 13.8662 11.2891C14.4107 11.2891 14.9107 11.2891 15.4551 11.2891Z" fill="black" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_163_536">
                                                <rect width="47" height="57" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <h4 className="text-3xl font-bold mb-3 text-[#333333]">C&I Energy Storage Solution</h4>
                                <p className="text-black text-lg">
                                    Our Commercial And Industrial Storage Solutions Deliver Safe, Flexible, And Efficient Energy
                                    Management, Helping Businesses Lower Costs And Run Without Disruptions.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <button className="bg-gradient-to-r from-[#2D8DFD] to-[#3DE15C] text-white px-8 py-2 rounded-full text-xl font-semibold transition transform hover:scale-105">
                            View All Products
                        </button>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className="relative min-h-screen flex items-center justify-center py-20 px-6">
                <div className="absolute inset-0">
                    <Image
                        alt="Background"
                        src={Green}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto">
                    <h2 className="text-5xl font-bold text-center mb-16">OUR PRODUCTS</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {products.map((product, index) => (
                            <div className="">
                                <div
                                    key={index}
                                    className="  rounded-3xl p-6 border-4 border-green-500  hover:border-[#319644] shadow-[#319644]/20 shadow-xl transition transform hover:scale-105 cursor-pointer"
                                    onMouseEnter={() => setActiveProduct(index)}
                                >
                                    <div className="aspect-square  rounded-2xl mb-4 flex items-center justify-center relative overflow-hidden group">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-contain p-4"
                                        />
                                        <div className="absolute bottom-3 right-3 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <h3 className=" pl-5 text-xl font-bold mb-1 pt-4 pb-1">{product.name}</h3>
                                <p className=" pl-5 text-white/70">{product.capacity}</p>

                            </div>

                        ))}
                    </div>
                </div>
            </section>

            {/* Global Network Section */}
            <section className="relative min-h-screen flex items-center justify-center py-20 px-6">
                <div className="absolute inset-0">
                    <Image
                        alt="Background"
                        src={Global}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/80"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto text-center">
                    <h2 className="text-5xl font-bold mb-16">Global Network</h2>

                    <div className="relative mb-12">
                        {/* World Map Visualization */}
                        <div className="relative w-full h-[500px] flex items-center justify-center   rounded-2xl overflow-hidden">
                            <ComposableMap
                                projection="geoMercator"
                                projectionConfig={{
                                    scale: 147,
                                    center: [0, 20]
                                }}
                                className="w-full h-full"
                            >
                                <Geographies geography={geoUrl}>
                                    {({ geographies }) =>
                                        geographies.map((geo) => (
                                            <Geography
                                                key={geo.rsmKey}
                                                geography={geo}
                                                fill="#3DE15C"
                                                stroke="#1a1a1a"
                                                strokeWidth={0.5}
                                                style={{
                                                    default: { fill: "#3DE15C", opacity: 0.8, outline: "none" },
                                                    hover: { fill: "#3DE15C", opacity: 1, outline: "none" },
                                                    pressed: { fill: "#3DE15C", opacity: 0.9, outline: "none" },
                                                }}
                                            />
                                        ))
                                    }
                                </Geographies>

                                {/* Location Markers */}
                                {locations.map((location, index) => (
                                    <Marker key={location.code} coordinates={location.coordinates}>
                                        <circle
                                            r={activeLocation === index ? 8 : 5}
                                            fill="white"
                                            opacity={activeLocation === index ? 1 : 0.7}
                                            className={`transition-all duration-500 ${activeLocation === index ? 'animate-pulse' : ''}`}
                                            stroke="#3DE15C"
                                            strokeWidth={2}
                                        />
                                        {activeLocation === index && (
                                            <text
                                                textAnchor="middle"
                                                y={-15}
                                                style={{ fill: "white", fontSize: "12px", fontWeight: "bold" }}
                                            >
                                                {location.code}
                                            </text>
                                        )}
                                    </Marker>
                                ))}
                            </ComposableMap>

                            {/* Dynamic Location Callout */}
                            <div
                                key={activeLocation}
                                className="absolute bottom-8 -right-8 transition-all duration-500 animate-fade-in"
                            >
                                <div className="  border-2 border-[#3DE15C] shadow-lg shadow-[#3DE15C] rounded-xl p-4 flex items-center gap-3   min-w-[280px]">
                                    <div className="w-12 h-12 bg-[#3DE15C] rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-2xl font-bold text-gray-900">{locations[activeLocation].flag}</span>
                                    </div>
                                    <div className="text-left">
                                        <div className="text-white font-bold text-lg">{locations[activeLocation].name}</div>
                                        <div className="text-sm text-gray-300">{locations[activeLocation].company}</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <p className="text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                        Trusted By Enterprises Across Multiple Regions, ZIBBO Delivers And Exports Advanced Lithium Battery Systems
                        While Offering End-To-End Technical Assistance, Ensuring Reliable Deployment And Long-Term Performance
                        Across Global Markets.
                    </p>

                    <button className="bg-gradient-to-r from-[#2D8DFD] to-[#3DE15C] text-white px-8 py-3 rounded-full font-semibold transition transform hover:scale-105">
                        Explore Our Network
                    </button>
                </div>
            </section>

            {/* Power Features Section */}
            <section className="relative min-h-screen flex items-center justify-center py-20 px-6">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white"></div>

                <div className="relative z-10 max-w-7xl mx-auto">
                    <div className="relative flex items-center mb-48">
                        {/* Left side - Aunty Image */}
                        <div className="relative w-1/2">
                            <Image
                                src={Aunty}
                                alt="Zibbo Manufacturing Facility"
                                className="rounded-3xl shadow-2xl w-full h-auto"
                            />
                        </div>

                        {/* Right side - Content Card (Overlapping) */}
                        <div className="absolute -bottom-24 left-[40%] w-[55%] opacity-80 bg-gradient-to-br from-[#2C8FFD] to-[#5BA8FF] rounded-3xl px-10 py-20 text-white shadow-2xl">
                            <h2 className="text-4xl font-bold mb-6">
                                Power That Lasts, Protects, And Performs
                            </h2>
                            <p className="text-lg leading-relaxed">
                                At Zibbo, We Combine Durability, Safety, And Smart Design To Deliver Energy Solutions You Can Trust.
                                With Long-Lasting Battery Cycles, Multiple Layers Of Protection, High Energy Density, And User-Friendly
                                Technology, Zibbo Ensures Reliable Power For Homes And Businesses Alike.
                            </p>
                        </div>
                    </div>

                    {/* Feature Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="relative backdrop-blur-md rounded-3xl p-8 hover:shadow-2xl transition shadow-xl transform hover:scale-105 bg-gradient-to-r from-[#07B4E3] to-[#4CC420] p-[4px]">
                            <div className="bg-white rounded-3xl p-8 h-full">
                                <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                        <rect opacity="0.5" width="48" height="48" fill="url(#pattern0_163_555)" />
                                        <defs>
                                            <pattern id="pattern0_163_555" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                <use xlinkHref="#image0_163_555" transform="scale(0.0133333)" />
                                            </pattern>
                                            <image id="image0_163_555" width="75" height="75" preserveAspectRatio="none" xlinkHref="data:image/png;base64,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" />
                                        </defs>
                                    </svg>
                                </div>
                                <h4 className="text-3xl font-bold mb-3 text-[#333333]">Residential Energy Storage Solution</h4>
                                <p className="text-black text-lg">
                                    Zibbo's Home Energy Storage Keeps Your Appliances Running 24/7, Saves On Electricity Bills, And Protects
                                    You From Unexpected Outages Ensuring Worry-Free Power For Your Family.
                                </p>
                            </div>
                        </div>

                        <div className="relative backdrop-blur-md rounded-3xl p-8 hover:shadow-2xl transition shadow-xl transform hover:scale-105 bg-gradient-to-r from-[#07B4E3] to-[#4CC420] p-[4px]">
                            <div className="bg-white rounded-3xl p-8 h-full">
                                <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="45" height="46" viewBox="0 0 45 46" fill="none">
                                        <rect opacity="0.5" width="45" height="46" fill="url(#pattern0_163_556)" />
                                        <defs>
                                            <pattern id="pattern0_163_556" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                <use xlinkHref="#image0_163_556" transform="matrix(0.0132756 0 0 0.012987 -0.0044733 0)" />
                                            </pattern>
                                            <image id="image0_163_556" width="76" height="77" preserveAspectRatio="none" xlinkHref="data:image/png;base64,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" />
                                        </defs>
                                    </svg>
                                </div>
                                <h4 className="text-3xl font-bold mb-3 text-[#333333]">Residential Energy Storage Solution</h4>
                                <p className="text-black text-lg">
                                    Zibbo's Home Energy Storage Keeps Your Appliances Running 24/7, Saves On Electricity Bills, And Protects
                                    You From Unexpected Outages Ensuring Worry-Free Power For Your Family.
                                </p>
                            </div>
                        </div>

                        <div className="relative backdrop-blur-md rounded-3xl p-8 hover:shadow-2xl transition shadow-xl transform hover:scale-105 bg-gradient-to-r from-[#07B4E3] to-[#4CC420] p-[4px]">
                            <div className="bg-white rounded-3xl p-8 h-full">
                                <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="38" height="58" viewBox="0 0 38 58" fill="none">
                                        <rect opacity="0.5" width="38" height="58" fill="url(#pattern0_163_557)" />
                                        <defs>
                                            <pattern id="pattern0_163_557" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                <use xlinkHref="#image0_163_557" transform="matrix(0.0208333 0 0 0.0136494 0 -0.00502874)" />
                                            </pattern>
                                            <image id="image0_163_557" width="48" height="74" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAABKCAYAAAD9u9cgAAADsUlEQVRogdWaW4hNURjHf2fmzJgZxJRCcpnmQYonnkSUpDQSCjGKvCDXeaLkUij3N5dcmhBNxDygPHhQXuRBeJFQkiLXDLnNReu0zum07b3Pvvz3Puf8X86cs/f6vvWbb++1vrW+lWlpaSFlLQOmAPuAX3FdZ1PufCtwGhgCPAW64hqs0fQrsLqBYUAGGKQwmCbAUWCy/bsfeKcwmhbAXGB90fcB4JvCcFoAF4HGou8G4IvCcBoAN4CRjt8MwFeF8aQB2oE2l9/7qwHADJWHPIZqE4HfCidJAtwGRntc61M5SQpgIzDT5/oLlaMkACYCB0rc80blLAkAM+oMLXHPc5UzNcBxYFKA+96qHCoBZjhmWz89UzlVApwNkaBVXAQ67csbVBUVATPTLg/Z5q/Ab05xAZptohYmt5dNYggAzIpqeMg2khworzgAW4A5EdpJFjJ5RQUYB+yP2F6yDsgrKsAVYHDEtu8jtnNVFIC9wPQYPssaAbOf0xHTZ9kiYLZCbtmFShx9LhfAKWCswOcHgY2CggIsAdaIfH4X2ckpCIBZ054B6gT+eoEfAjsFBQG4ZFMGhf4APUqAUpu7q+3jo5LJg5p8Fvth1ee3vW42YV/bT5UG7GOUEdmr8YvAXXHnsR1XvEsFeb0D24GpSkdJyQ1gGrCnGjoPrHAD6FYVHxLWBeCqE+AgMKYKOm9m821mQCgGmG0XKdWgefmcqhjgcpU8OmbH+1H+Sx7gmnBySVKPgd3F9g3AUmBhFXTeaIGztpxV1GpT0k63Xe0adXZo0wW17gFH3Gxm7Q7DBJFDE951wCYxwCqvklTWDkfKZV7s8w8OLfIriCRR4GgV2uqy63BPJQEwSmTno12P+G4EJwGgSkX+GzLdVKkROA88CHJjEgBx05FXwOagw7EaQLFUXBxmblIDxM2nOmy+E1hqgPEx2j4EToZtpAaI+gL32xw/9CSoBoiakrRH3XZXAzgPNgXRHeB6VIdqgLCHUH8CK+OcHVIDhK1YmvrypzgOlQdfMyHqZmaSOgHcjOtUGYH6ELOwKTPtsKNPLCkBmkJEYJZqm10JUBcwArsq9cBTo42Cn8wplWNCn1IA899vKHFPWzlKTEHVUCICG4CXQn85qSNQ73HNrGvPCX0VpI6Am0xJaa0t8MmlBBjh8Xub+nhBsZQAbql0p621JSYlgDMT7bErrN5qBZivPlrjJiVA8UGQw8B9oW1PqZM5oyfOIkSSqm1uVh2DyO3n1AJb1Qf7PAX8A8/DjTbtmsDrAAAAAElFTkSuQmCC" />
                                        </defs>
                                    </svg>
                                </div>
                                <h4 className="text-3xl font-bold mb-3 text-[#333333]">Residential Energy Storage Solution</h4>
                                <p className="text-black text-lg">
                                    Zibbo's Home Energy Storage Keeps Your Appliances Running 24/7, Saves On Electricity Bills, And Protects
                                    You From Unexpected Outages Ensuring Worry-Free Power For Your Family.
                                </p>
                            </div>
                        </div>


                        <div className="relative backdrop-blur-md rounded-3xl p-8 hover:shadow-2xl transition shadow-xl transform hover:scale-105 bg-gradient-to-r from-[#07B4E3] to-[#4CC420] p-[4px]">
                            <div className="bg-white rounded-3xl p-8 h-full">
                                <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="47" height="44" viewBox="0 0 47 44" fill="none">
                                        <rect opacity="0.5" width="47" height="44" fill="url(#pattern0_163_558)" />
                                        <defs>
                                            <pattern id="pattern0_163_558" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                <use xlinkHref="#image0_163_558" transform="matrix(0.0144928 0 0 0.0154809 0 -0.0108696)" />
                                            </pattern>
                                            <image id="image0_163_558" width="69" height="66" preserveAspectRatio="none" xlinkHref="data:image/png;base64,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" />
                                        </defs>
                                    </svg>
                                </div>
                                <h4 className="text-3xl font-bold mb-3 text-[#333333]">C&I Energy Storage Solution</h4>
                                <p className="text-black text-lg">
                                    Our Commercial And Industrial Storage Solutions Deliver Safe, Flexible, And Efficient Energy
                                    Management, Helping Businesses Lower Costs And Run Without Disruptions.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Smart Energy Storage Banner */}
            <section className="bg-[#2C8FFD] px-6">

                <div className="  max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-12 items-center">
                        {/* Left side - Content */}
                        <div className="text-white col-span-2">
                            <h2 className="text-5xl font-bold mb-6">
                                Reliable and Smart Energy Storage for a Sustainable Tomorrow
                            </h2>
                            <p className="text-xl mb-8 leading-relaxed">
                                Zibbo Batteries Are Powered With An Advanced Intelligent BMS That Ensures Maximum Safety, Reliability, And Performance.
                            </p>
                            <button className="bg-white text-[#2C8FFD] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition transform hover:scale-105">
                                Learn More
                            </button>
                        </div>

                        {/* Right side - Image/Illustration */}
                        <div className="relative top-4">
                            <div className="   rounded-3xl  flex items-center justify-center">
                                <Image src={Chip} alt='' className='h-[616px] w-[616px]' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Honor Section */}
            <section className="relative bg-white py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-5xl font-bold text-center mb-16 text-black">Our Honor</h2>
                    
                    {/* Certificates Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
                        {getVisibleCertificates().map((certItem, index) => (
                            <div
                                key={index}
                                className="cursor-pointer transform transition hover:scale-105 hover:shadow-2xl rounded-lg overflow-hidden bg-white border-2 border-gray-200"
                                onClick={() => setSelectedCert(certItem.originalIndex)}
                            >
                                <Image
                                    src={certItem.cert}
                                    alt={`Certificate ${certItem.originalIndex + 1}`}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-2">
                        {certificates.map((_, index) => (
                            <div
                                key={index}
                                className={`w-3 h-3 rounded-full transition ${
                                    index >= activeCertIndex && index < activeCertIndex + 5 ? 'bg-[#3FE25B]' : 'bg-gray-300'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal for Full-Size View */}
            {selectedCert !== null && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
                    onClick={() => setSelectedCert(null)}
                >
                    <button
                        className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300 transition"
                        onClick={() => setSelectedCert(null)}
                    >
                        ×
                    </button>
                    <div className="relative max-w-5xl max-h-[90vh] overflow-auto">
                        <Image
                            src={certificates[selectedCert]}
                            alt={`Certificate ${selectedCert + 1}`}
                            className="w-full h-[500px] object-contain"
                        />
                    </div>
                </div>
            )}

            {/* Footer */}
            <footer className="relative bg-gray-900 border-t border-gray-800 py-12 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="flex items-center justify-center space-x-2 mb-6">
                        <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                        <div className="w-8 h-8 bg-green-500 rounded-full -ml-4"></div>
                        <span className="ml-2 text-2xl font-bold">ZiBBO</span>
                    </div>
                    <p className="text-gray-400 mb-4">
                        Powering Pakistan with Smart Lithium Energy Solutions
                    </p>
                    <div className="flex justify-center space-x-6 text-gray-400">
                        <a href="#" className="hover:text-cyan-400 transition">Privacy Policy</a>
                        <a href="#" className="hover:text-cyan-400 transition">Terms of Service</a>
                        <a href="#" className="hover:text-cyan-400 transition">Contact</a>
                    </div>
                    <p className="text-gray-500 text-sm mt-6">
                        © 2025 Zibbo Power Technology. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}