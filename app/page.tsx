"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Home1 from "../app/Group 15.png"
import { Building2, Battery, Users, Award, ArrowRight,  Factory, Zap, Globe, Calendar, ChevronRight } from 'lucide-react';
import {  Smartphone } from 'lucide-react';
import DynessAboutSection from './componenets/dynesssection';

const SolarHeroSection: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">

        <Image alt=' ' src={Home1} className="  w-full h-full" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-6 bg-white/0.01 backdrop-blur-md  rounded-lg py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
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

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 text-white">
            <a href="#" className="hover:text-cyan-400 transition">Products</a>
            <a href="#" className="hover:text-cyan-400 transition">Case Studies</a>
            <a href="#" className="hover:text-cyan-400 transition">News</a>
            <a href="#" className="hover:text-cyan-400 transition">Knowledge</a>
            <a href="#" className="hover:text-cyan-400 transition">About Us</a>
            <a href="#" className="hover:text-cyan-400 transition">Blog</a>
          </div>

          {/* Contact Button */}
          <div className="flex items-center space-x-4">
            <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition">
              Contact Us
            </button>
            <button className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
<path d="M11.6254 11.6185L17 17M13.4444 7.22222C13.4444 10.6587 10.6587 13.4444 7.22222 13.4444C3.78579 13.4444 1 10.6587 1 7.22222C1 3.78579 3.78579 1 7.22222 1C10.6587 1 13.4444 3.78579 13.4444 7.22222Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-[58px] font-bold text-white mb-6 leading-tight">
              Power Your Future,
              <br />
              Reliable Solar Solutions
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Empowering Homes And Businesses With Efficient
              <br />
              And Sustainable Energy
            </p>
            <div className="flex space-x-4">
              <button className="bg-white/0.01 backdrop-blur-sm text-white px-8 py-3 rounded-xl font-medium border border-white/30 hover:bg-white/20 transition">
                Learn More
              </button>
              <button className="bg-white text-black backdrop-blur-sm text- px-8 py-3 rounded-xl font-medium border border-white/30 hover:bg-white/20 transition">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* Right Side Social Icons */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-30 flex flex-col justify-center items-center border-2 border-white rounded-lg py-4 px-1 space-y-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
          <path d="M39.5833 6.25C40.6884 6.25 41.7482 6.68899 42.5296 7.47039C43.311 8.25179 43.75 9.3116 43.75 10.4167V39.5833C43.75 40.6884 43.311 41.7482 42.5296 42.5296C41.7482 43.311 40.6884 43.75 39.5833 43.75H10.4167C9.3116 43.75 8.25179 43.311 7.47039 42.5296C6.68899 41.7482 6.25 40.6884 6.25 39.5833V10.4167C6.25 9.3116 6.68899 8.25179 7.47039 7.47039C8.25179 6.68899 9.3116 6.25 10.4167 6.25H39.5833ZM38.5417 38.5417V27.5C38.5417 25.6987 37.8261 23.9713 36.5524 22.6976C35.2787 21.4239 33.5513 20.7083 31.75 20.7083C29.9792 20.7083 27.9167 21.7917 26.9167 23.4167V21.1042H21.1042V38.5417H26.9167V28.2708C26.9167 26.6667 28.2083 25.3542 29.8125 25.3542C30.586 25.3542 31.3279 25.6615 31.8749 26.2084C32.4219 26.7554 32.7292 27.4973 32.7292 28.2708V38.5417H38.5417ZM14.3333 17.8333C15.2616 17.8333 16.1518 17.4646 16.8082 16.8082C17.4646 16.1518 17.8333 15.2616 17.8333 14.3333C17.8333 12.3958 16.2708 10.8125 14.3333 10.8125C13.3996 10.8125 12.504 11.1834 11.8437 11.8437C11.1834 12.504 10.8125 13.3996 10.8125 14.3333C10.8125 16.2708 12.3958 17.8333 14.3333 17.8333ZM17.2292 38.5417V21.1042H11.4583V38.5417H17.2292Z" fill="#FFFCFC" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
      
          <g mask="url(#mask0_46_325)">
            <path d="M28.35 1.68686H33.8709L21.8109 15.5057L36 34.3132H24.8914L16.1846 22.9089L6.23314 34.3132H0.707143L13.6054 19.5274L0 1.68943H11.3914L19.2497 12.1114L28.35 1.68686ZM26.4086 31.0012H29.4686L9.72 4.82658H6.43886L26.4086 31.0012Z" fill="#FFFCFC" />
          </g>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
          <path d="M14.3001 3.66669H29.7001C35.5667 3.66669 40.3334 8.43335 40.3334 14.3V29.7C40.3334 32.5202 39.2131 35.2248 37.219 37.2189C35.2248 39.2131 32.5202 40.3334 29.7001 40.3334H14.3001C8.43341 40.3334 3.66675 35.5667 3.66675 29.7V14.3C3.66675 11.4799 4.78704 8.77526 6.78118 6.78112C8.77532 4.78698 11.4799 3.66669 14.3001 3.66669ZM13.9334 7.33335C12.183 7.33335 10.5043 8.02871 9.26651 9.26645C8.02877 10.5042 7.33341 12.1829 7.33341 13.9334V30.0667C7.33341 33.715 10.2851 36.6667 13.9334 36.6667H30.0667C31.8172 36.6667 33.4959 35.9713 34.7337 34.7336C35.9714 33.4959 36.6667 31.8171 36.6667 30.0667V13.9334C36.6667 10.285 33.7151 7.33335 30.0667 7.33335H13.9334ZM31.6251 10.0834C32.2329 10.0834 32.8158 10.3248 33.2455 10.7546C33.6753 11.1843 33.9167 11.7672 33.9167 12.375C33.9167 12.9828 33.6753 13.5657 33.2455 13.9955C32.8158 14.4252 32.2329 14.6667 31.6251 14.6667C31.0173 14.6667 30.4344 14.4252 30.0046 13.9955C29.5749 13.5657 29.3334 12.9828 29.3334 12.375C29.3334 11.7672 29.5749 11.1843 30.0046 10.7546C30.4344 10.3248 31.0173 10.0834 31.6251 10.0834ZM22.0001 12.8334C24.4312 12.8334 26.7628 13.7991 28.4819 15.5182C30.201 17.2373 31.1667 19.5689 31.1667 22C31.1667 24.4312 30.201 26.7627 28.4819 28.4818C26.7628 30.2009 24.4312 31.1667 22.0001 31.1667C19.5689 31.1667 17.2374 30.2009 15.5183 28.4818C13.7992 26.7627 12.8334 24.4312 12.8334 22C12.8334 19.5689 13.7992 17.2373 15.5183 15.5182C17.2374 13.7991 19.5689 12.8334 22.0001 12.8334ZM22.0001 16.5C20.5414 16.5 19.1424 17.0795 18.111 18.1109C17.0795 19.1424 16.5001 20.5413 16.5001 22C16.5001 23.4587 17.0795 24.8577 18.111 25.8891C19.1424 26.9206 20.5414 27.5 22.0001 27.5C23.4588 27.5 24.8577 26.9206 25.8892 25.8891C26.9206 24.8577 27.5001 23.4587 27.5001 22C27.5001 20.5413 26.9206 19.1424 25.8892 18.1109C24.8577 17.0795 23.4588 16.5 22.0001 16.5Z" fill="#FFFCFC" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none">
          <path d="M46.6666 23.3333C46.6666 10.4533 36.2133 0 23.3333 0C10.4533 0 0 10.4533 0 23.3333C0 34.6267 8.02666 44.03 18.6667 46.2V30.3333H14V23.3333H18.6667V17.5C18.6667 12.9967 22.33 9.33333 26.8333 9.33333H32.6667V16.3333H28C26.7167 16.3333 25.6667 17.3833 25.6667 18.6667V23.3333H32.6667V30.3333H25.6667V46.55C37.45 45.3833 46.6666 35.4433 46.6666 23.3333Z" fill="#FFFCFC" />
        </svg>
      </div>
    </div>
  );
};


const AboutSection: React.FC = () => {
  const stats = [
    { value: '5GWh+', label: 'Annual Production Capacity', icon: Battery },
    { value: '100+', label: 'Patents & Innovations', icon: Award },
    { value: '500+', label: 'Global Users Trust ZiBBO', icon: Users },
    { value: '100+', label: 'Utility Model Patent', icon: Building2 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About ZiBBO
          </h1>
          <div className="max-w-3xl">
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Zibbo Power (ZB Power Technology Co., Ltd), established in 2012, is dedicated to shaping the future of energy storage. Through continuous innovation and expertise, ZiBBO has earned global trust as a reliable leader in advanced lithium battery technology.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Now bringing our proven solutions to Pakistan, we aim to empower homes, businesses, and industries with safe, sustainable, and high-performance energy storage systems.
            </p>
          </div>
          <button className="mt-8 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Learn More
          </button>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="bg-white rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <Building2 className="w-32 h-32 mx-auto text-blue-500 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    DONGGUAN ZPOWER TECHNOLOGY CO., LTD
                  </h3>
                  <div className="flex justify-center gap-4 mt-6">
                    <div className="w-12 h-12 bg-red-500 rounded-lg shadow-md"></div>
                    <div className="w-12 h-12 bg-yellow-400 rounded-lg shadow-md"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border-4 border-blue-500">
              <Battery className="w-16 h-16 text-blue-600" />
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-gray-600 text-sm leading-snug">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Decorative Elements */}
        <div className="mt-20 flex justify-center gap-4">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse delay-75"></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-150"></div>
        </div>
      </div>
    </div>
  );
}
// Statistics Section Component
const Statistics = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Global Customers */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Global Customers</h3>
            <div className="text-5xl font-bold text-blue-500 mb-2">3000+</div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Trusted By Satisfied Clients And<br />
              Partners In Over 30 Countries.
            </p>
          </div>

          {/* Factory Land Occupation */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Factory Land Occupation</h3>
            <div className="text-5xl font-bold text-blue-500 mb-2">10000+</div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Expanding Innovation Across A<br />
              State-Of-The-Art Production Facility.
            </p>
          </div>

          {/* Utility Model Patent */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Utility Model Patent</h3>
            <div className="text-5xl font-bold text-blue-500 mb-2">1000+</div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Innovative Designs Protected By<br />
              Certified Technology Patents.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Hot Selling Products Section Component
const HotSellingProducts = () => {
  const products = [
    {
      id: 1,
      name: "Solar 51.2V 500Ah",
      description: "Smart Each Module Is Equipped With An Independent BMS System.",
    },
    {
      id: 2,
      name: "Solar 51.2V 500Ah",
      description: "Smart Each Module Is Equipped With An Independent BMS System.",
    },
    {
      id: 3,
      name: "Solar 51.2V 500Ah",
      description: "Smart Each Module Is Equipped With An Independent BMS System.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold">
            <span className="text-blue-500">Hot Selling</span>
            <span className="text-green-500 ml-2">Products</span>
          </h2>
          <button className="flex items-center text-gray-800 font-semibold hover:text-blue-500 transition-colors">
            View All
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              {/* Product Image Placeholder */}
              <div className="bg-white rounded-lg p-8 mb-6 flex items-center justify-center h-48">
                <div className="text-center">
                  <div className="bg-green-500 w-16 h-10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">ZIBBO</span>
                  </div>
                  <div className="bg-gray-200 w-32 h-24 rounded-lg mx-auto border-2 border-gray-300">
                    <div className="h-full flex items-center justify-center">
                      <div className="w-2 h-16 bg-gray-400 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{product.description}</p>

              <button className="flex items-center text-green-500 font-semibold hover:text-green-600 transition-colors">
                View Details
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};




const EnergyStorageSection =() => {
  const [openSection, setOpenSection] = useState('residential');

  const sections = [
    {
      id: 'residential',
      title: 'Residential Energy Storage Solution',
      content: 'Zibbo’s home energy storage keeps your appliances running 24/7, saves on electricity bills, and protects you from unexpected outages—ensuring worry-free power for your family.',
      videoSrc: 'https://apac.dyness.com/Public/Uploads/uploadfile/files/20241221/WeChat20240912134844.mp4'
    },
    {
      id: 'commercial',
      title: 'C&I Energy Storage Solution',
      content: 'Our commercial and industrial storage solutions deliver safe, flexible, and efficient energy management, helping businesses lower costs and run without disruptions.',
      videoSrc: 'https://apac.dyness.com/Public/Uploads/uploadfile/files/20241221/gongshangyechunengjiejuefangan2.mp4'
    },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text- mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Safe And Efficient{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Energy Storage Solutions</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-green-400 -z-0"></span>
            </span>
          </h1>
          <p className="text-3xl sm:text-4xl font-semibold text-gray-800">
            Driving The Global Transition To Cleaner, Greener Energy
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mt-16">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div 
                key={section.id}
                className={`border-b border-gray-200 pb-8 ${index === sections.length - 1 ? 'border-b-0' : ''}`}
              >
                <h2 
                  className={`text-2xl font-bold mb-4 cursor-pointer transition-colors ${
                    openSection === section.id ? 'text-green-500' : 'text-gray-400 hover:text-gray-600'
                  }`}
                  onClick={() => setOpenSection(openSection === section.id ? null : section.id)}
                >
                  {section.title}
                </h2>
                {openSection === section.id && (
                  <div className="animate-fadeIn">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {section.content}
                    </p>
                    <button className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors">
                      <ArrowRight className="w-5 h-5" />
                      <span className="font-medium">Read More</span>
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column - Video Display */}
          <div className="relative">
            <div className="relative rounded-lg shadow-xl overflow-hidden bg-black">
              {sections.map((section) => (
                <video
                  key={section.id}
                  src={section.videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={`w-full h-auto transition-opacity duration-500 ${
                    openSection === section.id ? 'opacity-100' : 'opacity-0 absolute inset-0'
                  }`}
                >
                  Your browser does not support the video tag.
                </video>
              ))}
            </div>
            {/* Green energy indicators overlay */}
            <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <SolarHeroSection />
      <Statistics />
      <AboutSection/>
      <HotSellingProducts />
      <EnergyStorageSection/>
      <DynessAboutSection/>
      {/* <ProductsSection/> */}
      {/* More components will be added here */}
    </div>
  );
}
