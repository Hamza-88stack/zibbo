"use client"
import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Flag } from 'lucide-react';
import Image from 'next/image';
import BGIMAGE from '../wind-turbines-open-field-cloudy-sky (1) 1.png'
import Global from "../WhatsApp Image 2025-10-24 at 9.31.57 PM 1.png"
import Header from '../components/header';
import Footer from '../components/footer';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        consultingProduct: '',
        customerType: '',
        country: '',
        city: '',
        companyName: '',
        phone: '',
        email: '',
        howDidYouHear: '',
        message: ''
    });

    const [activeTab, setActiveTab] = useState('buy');

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        alert('Form submitted successfully!');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <Header />

            {/* Hero Section */}
            <section className="relative h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        alt='Products Background'
                        src={BGIMAGE}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center px-4">
                    <div className="text-center text-white z-10">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">GET IN TOUCH</h1>
                    </div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="bg-gray-100 py-8 sm:py-12 md:py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
                        {/* China Office */}
                        <div className="relative mt-8">
                            {/* Flag */}
                            <div className="absolute -top-8 left-4 sm:left-0">
                                <div className="  rounded-full flex items-center justify-center shadow-lg">
                                    <div className="relative w-12 h-12">
                                        {/* Chinese flag stars representation */}
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="80" height="80" viewBox="0 0 60 60" fill="none">
                                            <g filter="url(#filter0_d_299_53)">
                                                <rect x="1.90039" y="1.90039" width="50" height="50" fill="url(#pattern0_299_53)" shape-rendering="crispEdges" />
                                            </g>
                                            <defs>
                                                <filter id="filter0_d_299_53" x="0.00039053" y="0.00039053" width="59.8" height="59.8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                    <feOffset dx="3" dy="3" />
                                                    <feGaussianBlur stdDeviation="2.45" />
                                                    <feComposite in2="hardAlpha" operator="out" />
                                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_299_53" />
                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_299_53" result="shape" />
                                                </filter>
                                                <pattern id="pattern0_299_53" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                    <use xlinkHref="#image0_299_53" transform="scale(0.00195312)" />
                                                </pattern>
                                                <image id="image0_299_53" width="512" height="512" preserveAspectRatio="none" xlinkHref="data:image/png;base64,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" />
                                            </defs>
                                        </svg>                </div>
                                </div>
                            </div>

                            <div className="bg-white border-2 border-[#DE2910] min-h-[240px] flex rounded-2xl p-4 sm:p-6 md:p-8 pt-12 shadow-md">
                                {/* Phone */}
                                <div className="w-full">
                                    <div className="flex items-start space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                                        </div>
                                        <div>
                                            <p className="text-xs sm:text-sm font-semibold text-gray-700 mb-1">Phone:</p>
                                            <p className="text-sm sm:text-base text-gray-900 font-medium">+8618819760216</p>
                                            <p className="text-sm sm:text-base text-gray-900 font-medium">+86-769-82960591</p>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="flex items-start space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                                        </div>
                                        <div>
                                            <p className="text-xs sm:text-sm font-semibold text-gray-700 mb-1">Email:</p>
                                            <a
                                                href="mailto:alvin@zblpower.com"
                                                className="text-sm sm:text-base text-gray-900 font-medium hover:text-blue-600 transition underline break-all"
                                            >
                                                alvin@zblpower.com
                                            </a>
                                        </div>
                                    </div>

                                    {/* Address */}
                                    <div className="flex items-start space-x-3 sm:space-x-4">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                                        </div>
                                        <div>
                                            <p className="text-xs sm:text-sm font-semibold text-gray-700 mb-1">Address</p>
                                            <p className="text-sm sm:text-base text-gray-900 font-medium leading-relaxed">
                                                Building 1, No.5 Weizai Road,<br />
                                                Tianxin Village, Tangxia Town,<br />
                                                Dongguan City, Guangdong<br />
                                                Province, China
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pakistan Office */}
                        <div className="relative mt-8">
                            {/* Flag */}
                            <div className="absolute -top-8 left-4 sm:left-0">
                                <div className="  rounded-full flex items-center justify-center shadow-lg">
                                    <div className="relative w-12 h-12">
                                        {/* Pakistani flag representation */}
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="74" height="74" viewBox="0 0 54 54" fill="none">
                                            <g filter="url(#filter0_d_299_40)">
                                                <rect x="1.90039" y="1.90039" width="44" height="44" fill="url(#pattern0_299_40)" shape-rendering="crispEdges" />
                                            </g>
                                            <defs>
                                                <filter id="filter0_d_299_40" x="0.00039053" y="0.00039053" width="53.8" height="53.8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                    <feOffset dx="3" dy="3" />
                                                    <feGaussianBlur stdDeviation="2.45" />
                                                    <feComposite in2="hardAlpha" operator="out" />
                                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_299_40" />
                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_299_40" result="shape" />
                                                </filter>
                                                <pattern id="pattern0_299_40" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                    <use xlinkHref="#image0_299_40" transform="scale(0.00195312)" />
                                                </pattern>
                                                <image id="image0_299_40" width="512" height="512" preserveAspectRatio="none" xlinkHref="data:image/png;base64,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" />
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white border-2 border-[#3DE15C] min-h-[240px] flex rounded-2xl p-4 sm:p-6 md:p-8 pt-12 shadow-md">
                                {/* Phone */}
                                <div className="w-full">
                                    <div className="flex items-start space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                                        </div>
                                        <div>
                                            <p className="text-xs sm:text-sm font-semibold text-gray-700 mb-1">Phone:</p>
                                            <p className="text-sm sm:text-base text-gray-900 font-medium">03208889219</p>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="flex items-start space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                                        </div>
                                        <div>
                                            <p className="text-xs sm:text-sm font-semibold text-gray-700 mb-1">Email:</p>
                                            <a
                                                href="mailto:sales@zibbopower.pk"
                                                className="text-sm sm:text-base text-gray-900 font-medium hover:text-blue-600 transition underline break-all"
                                            >
                                                sales@zibbopower.pk
                                            </a>
                                        </div>
                                    </div>

                                    {/* Address */}
                                    <div className="flex items-start space-x-3 sm:space-x-4">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                                        </div>
                                        <div>
                                            <p className="text-xs sm:text-sm font-semibold text-gray-700 mb-1">Address</p>
                                            <p className="text-sm sm:text-base text-gray-900 font-medium leading-relaxed">
                                                67-K Commercial Phase-1 Ghazi<br />
                                                Road, DHA Lahore.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-8 sm:py-12 md:py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-6 sm:mb-8">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 sm:mb-4">Get Your Instant Energy Storage Quote Now</h2>
                        <p className="text-sm sm:text-base text-gray-600 mb-2">Talk To Our Experts And Discover The Best Zibbo Battery Solution For Your Home,</p>
                        <p className="text-sm sm:text-base text-gray-600 mb-2">Business, Or Solar System</p>
                        <p className="text-sm sm:text-base text-gray-600">We'll Respond Quickly With Customized Recommendations And Pricing Details.</p>
                    </div>

                    {/* Tab Buttons */}
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
                        <button
                            onClick={() => setActiveTab('buy')}
                            className={`px-4 sm:px-6 py-2 text-sm sm:text-base rounded-full font-semibold transition ${activeTab === 'buy'
                                ? 'bg-gradient-to-r from-[#2D8DFD] to-[#3DE15C] text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                        >
                            Buy Products
                        </button>
                        <button
                            onClick={() => setActiveTab('partner')}
                            className={`px-4 sm:px-6 py-2 text-sm sm:text-base rounded-full font-semibold transition ${activeTab === 'partner'
                                ? 'bg-gradient-to-r from-[#2D8DFD] to-[#3DE15C] text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                        >
                            Become a Partner
                        </button>
                        <button
                            onClick={() => setActiveTab('sales')}
                            className={`px-4 sm:px-6 py-2 text-sm sm:text-base rounded-full font-semibold transition ${activeTab === 'sales'
                                ? 'bg-gradient-to-r from-[#2D8DFD] to-[#3DE15C] text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                        >
                            After - Sales
                        </button>
                    </div>

                    {/* Form */}
                    <div className="bg-gray-100 p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg">
                        <div className="space-y-4 sm:space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <select
                                    name="consultingProduct"
                                    value={formData.consultingProduct}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Consulting Product *</option>
                                    <option value="wall-mounted">Wall Mounted Battery</option>
                                    <option value="powerwall">Powerwall</option>
                                    <option value="stacked">Stacked Type</option>
                                </select>
                                <select
                                    name="customerType"
                                    value={formData.customerType}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Customer Type *</option>
                                    <option value="dealer">Dealer</option>
                                    <option value="installer">Installer</option>
                                    <option value="end-user">End User</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <input
                                    type="text"
                                    name="country"
                                    placeholder="Country *"
                                    value={formData.country}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="City"
                                    value={formData.city}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input
                                    type="text"
                                    name="companyName"
                                    placeholder="Company Name"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone *"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input
                                    type="text"
                                    name="howDidYouHear"
                                    placeholder="How did you hear about us? *"
                                    value={formData.howDidYouHear}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <textarea
                                name="message"
                                placeholder="Message"
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <div className="flex items-center space-x-2">
                                <input type="checkbox" id="privacy" className="w-4 h-4" />
                                <label htmlFor="privacy" className="text-sm text-black">
                                    I agree to the Privacy Policy and accept these conditions
                                </label>
                            </div>

                            <button
                                onClick={handleSubmit}
                                className="w-full bg-gradient-to-r from-[#2D8DFD] to-[#3DE15C] text-white py-3 rounded-full font-semibold hover:opacity-90 transition text-lg"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}