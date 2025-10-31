"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Big1 from "../Generated Image October 28, 2025 - 2_03PM 1.png"
import Big2 from "../Generated Image October 28, 2025 - 2_06PM 1.png"
import Big3 from "../Generated Image October 28, 2025 - 2_09PM 1.png"
import BG from "../Rectangle 102.png"
import Adv1 from "../image 15.png"
import Adv2 from "../image 16.png"
import Adv3 from "../cropped-hand-woman-touching-solar-panel-against-sky-sunset.png"
import Adv4 from "../view-futuristic-high-tech-earth.png"
import Adv5 from "../person-checking-performance-solar-energy-system-with-tablet.png"
import Partner1 from "../Zibbo Website (4)/01.svg"
import Partner2 from "../Zibbo Website (4)/02.svg"
import Partner3 from "../Zibbo Website (4)/03.svg"
import Partner4 from "../Zibbo Website (4)/04.svg"
import Partner5 from "../Zibbo Website (4)/05.svg"
import Partner6 from "../Zibbo Website (4)/06.svg"
import Partner7 from "../Zibbo Website (4)/07.svg"
import Partner8 from "../Zibbo Website (4)/08.svg"
import Partner9 from "../Zibbo Website (4)/09.svg"
import Partner10 from "../Zibbo Website (4)/10.svg"
import Partner11 from "../Zibbo Website (4)/11.svg"
import Partner12 from "../Zibbo Website (4)/12.svg"
import Icon1 from "../5 icons/Professional Support.png"
import Icon2 from "../5 icons/Protection.png"
import Icon3 from "../5 icons/Quality Control.png"
import Icon4 from "../5 icons/Smart Energy Solutions.png"
import Icon5 from "../5 icons/world wide.png"
export default function AboutPage() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % companyHistory.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + companyHistory.length) % companyHistory.length);
    };

    // Determine visible years in navigation (show 4 at a time)



    const companyHistory = [
        {
            year: 2011,
            title: "Company Foundation",
            description: "Engaged In The Field Of Mobile Power, Graphite (Hybrid), Mobile Power, Bluetooth Speakers, Bluetooth Batteries, And Toy Batteries."
        },
        {
            year: 2012,
            title: "Manufacturing Excellence",
            description: "Established Manufacturing Small Digital Lithium Batteries, And Lithium Battery Packs For Power Tools."
        },
        {
            year: 2013,
            title: "Product Diversification",
            description: "The Company Underwent A Full Transformation, Focusing On The Development Of Battery Packs For Electric Bicycles, Electric Wheelchairs, And Electric Motorcycles."
        },
        {
            year: 2015,
            title: "Industrial Expansion",
            description: "Relocated To The Yijia Industrial Park In Shenzhen And Introduced Multiple Lithium Battery Production Lines And Machines For Comprehensive Battery Testing Equipment."
        },
        {
            year: 2019,
            title: "Technology Innovation",
            description: "Successfully Developed The Triangular Lithium Battery And Obtained 2 Patents Related To Electric Bicycles."
        },
        {
            year: 2020,
            title: "Manufacturing Scale",
            description: "Established Dongguan ZIBBO Technology Co., Ltd. And Relocated The Factory To Tangxia, Dongguan, Expanding The Production Capacity To An Annual Output Value Of 500 Million RMB."
        },
        {
            year: 2021,
            title: "Global Recognition",
            description: "Applied For Multiple Patents Related To Lithium Batteries And Began The Process Of Applying For Recognition As A High-Tech Enterprise."
        },
        {
            year: 2022,
            title: "Advanced Technology",
            description: "Successfully Developed The Bluetooth Board Electric Bicycle Lithium Battery And Achieved Bluetooth And 485 Data Communication."
        }
    ];
    // Auto-rotate every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % companyHistory.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [companyHistory.length]);

    const getVisibleYears = () => {
        const visible = [];
        for (let i = 0; i < 9; i++) {
            const index = (activeIndex + i) % companyHistory.length;
            visible.push({
                ...companyHistory[index],
                index,
                isActive: i === 1// Only the FIRST item in visible array is active
            });
        }
        return visible;
    };

    const advantages = [
        {
            title: "Reliable Energy Worldwide",
            description: "Supplying Advanced Lithium Batteries To More Than 30 Countries, Reaching Global Markets With Consistent Performance In Diverse Energy Requirements.",
            icon: Icon1,
            image: Adv1
        },
        {
            title: "Strict Quality Control",
            description: "Very Strict Quality Passes Multi-Step Inspections From Core Materials To Guaranteeing Long Life And Stable Performance.",
            icon: Icon2,
            image: Adv2
        },
        {
            title: "Protection at Every Level",
            description: "BMS With Multiple Safety Mechanisms Including Overcharge, Overdischarge, And Temperature Control For Comprehensive System Protection.",
            icon: Icon3,
            image: Adv3
        },
        {
            title: "Smart Energy Solutions",
            description: "BMS Intelligence Monitoring And Control Systems For Optimized Energy Storage Performance, ensuring maximum longevity and safety for all battery packs.",
            icon: Icon4,
            image: Adv4
        },
        {
            title: "Professional Support",
            description: "Expert Technical Teams And Efficient Customer Service Ensure Quick Solutions, Professional Guidance For Every Project, and seamless installation and maintenance support.",
            icon: Icon5,
            image: Adv5
        }
    ];
    const [advantageIndex, setAdvantageIndex] = useState(0);
    const advantagesPerView = 3;
    
    // Get visible advantages (3 at a time)
    const getVisibleAdvantages = () => {
        const visible = [];
        for (let i = 0; i < advantagesPerView; i++) {
            const index = (advantageIndex + i) % advantages.length;
            visible.push(advantages[index]);
        }
        return visible;
    };
    
    // Auto-rotate advantages every 2 seconds
    useEffect(() => {
        const advantageInterval = setInterval(() => {
            setAdvantageIndex((prev) => (prev + 1) % advantages.length);
        }, 2000); // Change every 2 seconds
        
        return () => clearInterval(advantageInterval);
    }, [advantages.length]);

    // Statistics animation
    const [activeStatIndex, setActiveStatIndex] = useState(0);
    const statistics = [
        { value: "2012", label: "Founded" },
        { value: "20+", label: "Countries Served" },
        { value: "500M", label: "RMB Annual Output" },
        { value: "100+", label: "Patents" }
    ];

    useEffect(() => {
        const statInterval = setInterval(() => {
            setActiveStatIndex((prev) => (prev + 1) % statistics.length);
        }, 2500); // Change every 2.5 seconds
        
        return () => clearInterval(statInterval);
    }, [statistics.length]);

    const [imageRotationIndex, setImageRotationIndex] = useState(0);
    
    // Auto-rotate one image at a time every 2 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setImageRotationIndex((prev) => (prev + 1) % advantages.length);
        }, 2000); // Change one image every 2 seconds
        
        return () => clearInterval(interval);
    }, [advantages.length]);

    // Partner logos carousel
    const partnerLogos = [
        Partner1, Partner2, Partner3, Partner4, Partner5, Partner6,
        Partner7, Partner8, Partner9, Partner10, Partner11, Partner12
    ];
    
    const [partnerIndex, setPartnerIndex] = useState(0);
    const partnersPerView = 5;
    
    // Get visible partners (5 at a time)
    const getVisiblePartners = () => {
        const visible = [];
        for (let i = 0; i < partnersPerView; i++) {
            const index = (partnerIndex + i) % partnerLogos.length;
            visible.push(partnerLogos[index]);
        }
        return visible;
    };
    
    // Auto-rotate partners every 1 second
    useEffect(() => {
        const partnerInterval = setInterval(() => {
            setPartnerIndex((prev) => (prev + 1) % partnerLogos.length);
        }, 1000); // Change every 1 second
        
        return () => clearInterval(partnerInterval);
    }, [partnerLogos.length]);
    return (
        <div className=" bg-gray-900 text-white">
            {/* Navigation - Same as another page */}
            <div className="min-h-screen">
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
                            <Link href="/products" className="hover:text-blue-400 transition">Product</Link>
                            <Link href="/case-studies" className="hover:text-blue-400 transition">Case Studies</Link>
                            <Link href="/news" className="hover:text-blue-400 transition">News</Link>
                            <Link href="/blog" className="hover:text-blue-400 transition">Blog</Link>
                            <Link href="/about" className="hover:text-blue-400 transition font-bold text-blue-500">About Us</Link>
                            <button className="bg-gradient-to-r from-[#2D8DFD] to-[#3DE15C] text-white px-6 py-2 rounded-full font-semibold hover:bg-cyan-300 transition">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 min-h-screen pb-20 px-6 [background:linear-gradient(to_bottom,#A0D1FF_1%,#fffff1_100%)]">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-6xl text-[#2E90F9] font-bold mb-6">About ZIBBO</h1>
                    <p className="text-2xl text-black mb-12 max-w-4xl mx-auto">
                        Reliable and Smart Energy Storage for a Sustainable Tomorrow
                    </p>

                    {/* Company Images Grid */}
                    <div className="grid md:grid-cols-3 gap-6 mt-16">
                        <div className="bg-white/10 backdrop-blur-md col-span-2 rounded-2xl  hover:bg-white/20 transition">
                            <Image src={Big1} alt='' />
                        </div>
                        <div className="col-span-1  flex flex-col gap-4">
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white/20 transition">
                                <Image src={Big2} alt='' />

                            </div>

                            <div className="bg-white/10 backdrop-blur-md rounded-2xl  hover:bg-white/20 transition">
                                <Image src={Big3} alt='' />

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>

            {/* Company Profile Section */}
            <section className="py-20 px-6 bg-white text-black">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className='border- pr-10'>
                            <h2 className="text-5xl font-bold mb-8">Empowering the Future with Smarter Energy Solutions</h2>
                            <div>
                                <p className="text-xl  leading-relaxed font-medium ">
                                    Founded in 2012, Zibbo Energy Technology Co., Ltd. (ZiBBOW) is a  leading innovator in Advanced Lithium Battery Technology and Energy Storage Systems, and Home Energy Storage. Headquartered in Shenzhen, China, With a 5,000 M² Facility and 150+ Professionals, Zibbo Delivers Safe, Reliable, and High-Performance Batteries to Customers in Over 20 Countries.
                                </p>
                                <p className="text-xl leading-relaxed font-medium mb-6">
                                    We Continue to Advance LiFePO4 and Smart BMS Technologies, Empowering a Cleaner and More Sustainable Future.
                                </p>
                            </div>
                        </div>

                        <div className="relative">
                            {/* Animated Progress Bar */}
                           
                            
                            <div className="grid grid-cols-1 gap-6 mb-8 pt-6">
                                {statistics.map((stat, index) => (
                                    <div key={index} className="text-center">
                                        <div 
                                            className={`text-6xl font-bold bg-clip-text text-transparent mb-2 transition-all duration-500 ${
                                                index === activeStatIndex ? 'opacity-100 scale-110' : 'opacity-60 scale-100'
                                            }`}
                                            style={{
                                        backgroundImage: 'linear-gradient(90deg, #2D8DFD 45%, #3DE15C 62%)'
                                            }}
                                        >
                                            {stat.value}
                                        </div>
                                        <div className={`text-black text-lg transition-all duration-500 ${
                                            index === activeStatIndex ? 'opacity-100 font-semibold' : 'opacity-60'
                                        }`}>
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div className="relative w-full  py-30 overflow-hidden">
                {/* Background Image with Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center"

                >
                    <Image alt='' src={BG} className='h-full w-full' />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/70"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-8 py-12 h-full flex flex-col justify-center">
                    <h2 className="text-5xl font-bold text-white mb-6">
                        R&D Innovation
                    </h2>

                    <p className="text-white/90 text-2xl max-w-5xl leading-relaxed mb-8">
                        Zibbo Is Committed To Continuous Research And Innovation In Lithium Battery Technology,
                        Focusing On LiFePO₄ Chemistry, Smart BMS Systems, And Advanced Structural Design. Our
                        R&D Team Includes Senior Experts With Over 10 Years Of Industry Experience, Ensuring
                        Every Product Meets Global Standards Of Safety, Reliability, And Performance.
                        With Multiple Patents In Design, Utility Models, And Inventions, Zibbo Continues To Lead The
                        Evolution Of Next-Generation Energy Storage Solutions, Driving Sustainable Growth Through
                        Technological Excellence.
                    </p>

                    <button className="flex items-center gap-2 text-white text-2xl hover:text-cyan-300 transition-colors font-medium group w-fit">
                        <span className="flex items-center bg-gradient-to-r from-[#2D8DFD] to-[#3DE15C] text-white justify-center w-12 h-12 rounded-full   transition-colors">
                            <svg
                                className="w-8 h-8 text-gray-900"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                                />
                            </svg>
                        </span>
                        <span>View Details</span>
                    </button>
                </div>
            </div>

            {/* Company History Section */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16 text-black">Company History</h2>

                    {/* Timeline Cards - Show 3 visible cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto">
                        {[0, 1, 2].map((offset) => {
                            const index = (activeIndex + offset) % companyHistory.length;
                            const item = companyHistory[index];
                            return (
                                <div key={index} className="text-left">
                                    <h3 className={`  text-4xl font-bold bg-clip-text text-transparent mb-2    `}
                                        style={{
                                            backgroundImage: 'linear-gradient(90deg, #2D8DFD 1%, #3DE15C 20%)'
                                        }}>{item.year}</h3>
                                    <p className="text-black text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Navigation Bar */}
                    <div className="flex items-center justify-center gap-4 max-w-2xl mx-auto">
                        {/* Previous Button */}
                        <button
                            onClick={handlePrev}
                            className=" hover:bg-gray-100 rounded-lg transition-colors"
                            aria-label="Previous"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24" height="43" viewBox="0 0 40 43" fill="none">
                                <rect width="40" height="43" transform="matrix(-1 0 0 1 40 0)" fill="url(#pattern0_212_66)" />
                                <defs>
                                    <pattern id="pattern0_212_66" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use xlinkHref="#image0_212_66" transform="matrix(0.0111111 0 0 0.0103359 0 0.0348837)" />
                                    </pattern>
                                    <image id="image0_212_66" width="90" height="90" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAABeElEQVR4nO3cvUoDURiE4UmKWYVct4JNilSpvAcL8YYEwc4fUkYCadRogtlv3HN4H9h2YF9YdovDSgAAAAAAADjkUtJa0pukZ0k3koYJbjZvF2T75bo/M8y6YLNpM0mvB6KcE2ZWsNmFlx+ibM8IU7HZvOUvUbZ/DFOx2bxhf+NjhhkKNrtgSXdHwjxIuvjnzS4QO4jYQcQOInaQiZ1jYueY2Dkmdo6JnWNi55jYOSZ2jomdY2LnmNg5JnaOiZ1jYueY2Dkmdo6JnWNi55jYOQOHdHKGE8JcT2CzCz7yyD9NZLN5PhLlcSKbTRtOeMyvJrDZtIGXYT3zeVfPRK5nItczkeuZyPVM5Homcj0TuZ6JXM9Ermci1zOR65nI9UzkeiZyPRO5nolcz0SuZyLXI3IAkQOIHEDkACIHcLglZFUQZEXkz+aS3kcOMi/YbN4uymbkIPOCzS7cFgS5JfJ3i32Yzf53xMsRgiwKNrsxa2QTAAAAAACoOx8k4indPdin0wAAAABJRU5ErkJggg==" />
                                </defs>
                            </svg>
                        </button>

                        {/* Year Navigation */}
                        <div className="flex gap-4 overflow-hidden">
                            {getVisibleYears().map((item, i) => (
                                <button
                                    key={item.index}
                                    onClick={() => setActiveIndex(item.index)} // Allow manual selection
                                    className={`text-2xl font-bold bg-clip-text text-transparent transition-all duration-300 ${item.isActive ? 'scale-125 opacity-100' : 'scale-100 opacity-40'
                                        }`}
                                    style={{
                                        backgroundImage: 'linear-gradient(90deg, #2D8DFD 1%, #3DE15C 70%)'
                                    }}
                                >
                                    {item.year}
                                </button>
                            ))}
                        </div>

                        {/* Next Button */}
                        <button
                            onClick={handleNext}
                            className=" hover:bg-gray-100 flex rounded-lg transition-colors"
                            aria-label="Next"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24" height="43" viewBox="0 0 40 43" fill="none">
                                <rect width="40" height="43" fill="url(#pattern0_212_67)" />
                                <defs>
                                    <pattern id="pattern0_212_67" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use xlinkHref="#image0_212_67" transform="matrix(0.0111111 0 0 0.0103359 0 0.0348837)" />
                                    </pattern>
                                    <image id="image0_212_67" width="90" height="90" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAABeElEQVR4nO3cvUoDURiE4UmKWYVct4JNilSpvAcL8YYEwc4fUkYCadRogtlv3HN4H9h2YF9YdovDSgAAAAAAADjkUtJa0pukZ0k3koYJbjZvF2T75bo/M8y6YLNpM0mvB6KcE2ZWsNmFlx+ibM8IU7HZvOUvUbZ/DFOx2bxhf+NjhhkKNrtgSXdHwjxIuvjnzS4QO4jYQcQOInaQiZ1jYueY2Dkmdo6JnWNi55jYOSZ2jomdY2LnmNg5JnaOiZ1jYueY2Dkmdo6JnWNi55jYOQOHdHKGE8JcT2CzCz7yyD9NZLN5PhLlcSKbTRtOeMyvJrDZtIGXYT3zeVfPRK5nItczkeuZyPVM5Homcj0TuZ6JXM9Ermci1zOR65nI9UzkeiZyPRO5nolcz0SuZyLXI3IAkQOIHEDkACIHcLglZFUQZEXkz+aS3kcOMi/YbN4uymbkIPOCzS7cFgS5JfJ3i32Yzf53xMsRgiwKNrsxa2QTAAAAAACoOx8k4indPdin0wAAAABJRU5ErkJggg==" />
                                </defs>
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            {/* Our Advantages Section */}
            <section className="py-20 px-6 bg-white ">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-5xl font-bold text-black text-center mb-4">Our Advantages</h2>
                    <p className="text-xl text-center text-black mb-16">Driving Growth that Powers Global Sustainability</p>

                    <div className="relative">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {getVisibleAdvantages().map((advantage, index) => (
                                <div key={index} className="group">
                                    <div className="relative overflow-hidden rounded-2xl p-8 h-80 hover:transform hover:scale-105 transition duration-300">
                                        {/* Background Image */}
                                        <div className="absolute inset-0">
                                            <Image 
                                                src={advantage.image} 
                                                alt={advantage.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* Black overlay */}
                                        <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition duration-300"></div>

                                        {/* Content */}
                                        <div className="relative z-10 h-full flex flex-col justify-end">
                                            {/* Icon */}
                                            <div className="mb-4">
                                                <Image 
                                                    src={advantage.icon} 
                                                    alt={`${advantage.title} icon`}
                                                    className="w-12 h-12 object-contain filter brightness-0 invert"
                                                />
                                            </div>
                                            <h3 className="text-2xl font-bold mb-4 text-white">{advantage.title}</h3>
                                            <p className="text-gray-300 leading-relaxed">{advantage.description}</p>
                                        </div>

                                        {/* Gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        {/* Progress indicator */}
                      
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            <section className="py-20 px-6 bg-gradient-to-b from-[#3DE15C] to-[#2D8DFD]">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-2xl font-bold mb-12  ">Dyness secures billions in Series B & C funding accelerating innovation for a smarter energy future.</h2>

                    {/* Partner logos carousel */}
                    <div className="flex justify-center items-center gap-8 overflow-hidden">
                        {getVisiblePartners().map((logo, index) => (
                            <div 
                                key={index} 
                                className=" rounded-xl p-6   flex items-center justify-center hover:shadow-lg transition-all duration-300 "
                            >
                                <Image 
                                    src={logo} 
                                    alt={`Partner ${index + 1}`}
                                    className=" h-full w-full object-contain transition-all duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

       

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
                        <Link href="#" className="hover:text-cyan-400 transition">Privacy Policy</Link>
                        <Link href="#" className="hover:text-cyan-400 transition">Terms of Service</Link>
                        <Link href="#" className="hover:text-cyan-400 transition">Contact</Link>
                    </div>
                    <p className="text-gray-500 text-sm mt-6">
                        © 2025 Zibbo Power Technology. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}