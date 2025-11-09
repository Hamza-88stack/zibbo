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
import Main from "../20240627140333.jpg"
import Global from "../WhatsApp Image 2025-10-24 at 9.31.57 PM 1.png"

import Img15kwhRack from "../productsImages/15kwh-lifepo4-phosphate-rack-mountable04e4b.webp"
import Img48v100ahRack from "../productsImages/48v-100ah-lifepo4-phosphate-rack-mountable3d9c6.webp"
import Img51v100ahRack from "../productsImages/51-2v-100ah-rack-mount-battery49b70.webp"
import Img51v20kwRack from "../productsImages/51-2v-20kw-rack-energy-storage-system4dad2.webp"
import Img48v100ahRackmount from "../productsImages/48v-100ah-rackmount-battery34e50.webp"
import ImgPhotovoltaic from "../productsImages/photovoltaic-inverter-energy-storage-battery7b7e86a3-99fb-4341-af29-085029ff5b01.webp"
import Img51v200ahVertical from "../productsImages/51-2v-200ah-vertical-storage-batteryb6be8.webp"
import ImgSolar100ahWall from "../productsImages/48v-100ah-wall-mount-batteryb4f77011-def4-40f3-8a39-1e2f21bf9f78.webp"
import Img3uCabinet from "../productsImages/3u-cabinet-type-energy-storage-battery-51-2vd8da8.webp"
import ImgPowerwall48v from "../productsImages/powerwall-lifepo4-battery-100ah-48ve5e95.webp"
import Img51v300ahIndustrial from "../productsImages/51-2v-300ah-industrial-energy-storage-with20300.webp"
import Img25kwhRack from "../productsImages/15kwh-lifepo4-phosphate-rack-mountable04e4b.webp"
import Img48v100ahWall from "../productsImages/48v-100ah-wall-mount-batteryb4f77011-def4-40f3-8a39-1e2f21bf9f78.webp"
import Img51v200ahStacked from "../productsImages/51-2v-200ah-stacked-solar-batteryf3e15.webp"
import Img51v300ahRack from "../productsImages/51-2v-300ah-lifepo4-phosphate-rack-mountablee049f.webp"
import Img48v50ahResidential from "../productsImages/48v-50ah-residential-battery2420a.webp"
import Img48v200ahResidential from "../productsImages/48v-200ah-residential-solar-battery971eb.webp"
import Img51v100ahEnergy from "../productsImages/51-2v-100ah-energy-storage-system13fed.webp"
import Img51v200ahStackedStorage from "../productsImages/51-2v-100ah-stacked-energy-storage1aade.webp"
import ImgLithium51v230ah from "../productsImages/lithium-battery-51-2v-230ah-10kwh-solar0f0c0.webp"
import ImgSolarWall5kwh from "../productsImages/48v-100ah-wall-mount-batteryb4f77011-def4-40f3-8a39-1e2f21bf9f78.webp"
import ImgLithium51v300ah from "../productsImages/lithium-battery-51-2v-300ah-314ah-15kwh-solar785bd.webp"
import Img6kwOffGrid from "../productsImages/6kw-off-grid-home-energy-storage-system-51-2v99251.webp"
import ImgPowerwall25v from "../productsImages/powerwall-25-6v-200ah-lithium-iron-phosphate4147e.webp"
import ImgSolar30kwhRack from "../productsImages/solar-30kwh-rack-mounted-51-2v-600ah-class-afa588.webp"
import ImgSolar51v500ah from "../productsImages/solar-lithium-battery-pack-51-2v-500ah-25kwh04e99.webp"
import Img2bpowerStackable from "../productsImages/residential-energy-storage-15kwh-solarf85d2.webp"
import ImgRackMounted28kwh from "../productsImages/rack-mounted-20kwh-400ah-51-2v-high-capacityd5de4.webp"
import ImgLithium51v200ah from "../productsImages/lithium-battery-51-2v-230ah-10kwh-solar0f0c0.webp"
import ImgBMS48v from "../productsImages/built-in-battery-management-system-lifepo41b91a.webp"
import ImgLithium25v100ah from "../productsImages/20250228113200b8dfa.webp"
import ImgSolar51v500ahResidential from "../productsImages/solar-lithium-battery-pack-51-2v-500ah-25kwh04e99.webp"
import ImgSolar5kwh100ah from "../productsImages/48v-100ah-wall-mount-batteryb4f77011-def4-40f3-8a39-1e2f21bf9f78.webp"
import ImgChina51v200ah from "../productsImages/china-factory-51-2v-48v-200ah-lifepo4-lithium2aadd.webp"
import Img51v280ahStanding from "../productsImages/51-2v-280ah-standing-lithium-ion-lifepo425684.webp"
import ImgSolarAllInOne6kw from "../productsImages/solar-all-in-one-6kw-inverter-10kwh-lithium6cf87.webp"
import ImgChina51v400ah from "../productsImages/china-factory-lifepo4-battery-51-2v-400ahf5a19.webp"
import ImgResidential15kwh from "../productsImages/residential-energy-storage-15kwh-solarf85d2.webp"
import ImgSolarEnergy24v48v from "../productsImages/solar-energy-storage-system-24v-48v-100ah5dc0f.webp"
import ImgChina25kwh700ah from "../productsImages/china-lithium-ion-battery-35kwh-700ah-solar57f31.webp"
import Img48vStacked600ah from "../productsImages/48v-stacked-lifepo4-battery-600ah-30kwh079c0.webp"
import ImgChinaAI12v from "../productsImages/class-a-lithium-ion-battery-12-8v-100ah-150ah3089d.webp"
import ImgOutdoorEmergency from "../productsImages/outdoor-emergency-solar-power-station-2400w58f5f.webp"
import Header from '../components/header';
import Footer from '../components/footer';
export default function ProductsPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 15;
    const products = [
        // Page 1 - Image 1
        {
            id: 1,
            name: "15KWH LiFePO4 Phosphate Rack Mountable Battery",
            slug: "15kwh-lifepo4-rack-mountable",
            type: "Cabinet Type",
            specs: "15.36KWH Grade A LiFePO4 Cell 51.2V 300Ah",
            category: "Rack Mount",
            image: Img15kwhRack,
            featured: false
        },
        {
            id: 2,
            name: "48V 100AH LiFePO4 Phosphate Rack Mountable Battery",
            slug: "48v-100ah-rack-mountable",
            type: "Cabinet Type",
            specs: "4.8KWH Grade A LiFePO4 Cell 48V 100Ah",
            category: "Rack Mount",
            image: Img48v100ahRack,
            featured: false
        },
        {
            id: 3,
            name: "51.2V 100Ah Rack Mount Battery",
            slug: "51-2v-100ah-rack-mount",
            type: "Cabinet Type",
            specs: "5.12KWH Grade A LiFePO4 Cell 51.2V 100Ah",
            category: "Rack Mount",
            image: Img51v100ahRack,
            featured: false
        },
        {
            id: 4,
            name: "51.2V 20kw Rack Energy Storage System",
            slug: "51-2v-20kw-rack-energy",
            type: "Cabinet Type",
            specs: "20.48KWH Grade A LiFePO4 Cell 51.2V 400Ah",
            category: "Rack Mount",
            image: Img51v20kwRack,
            featured: false
        },
        {
            id: 5,
            name: "48V 100Ah Rackmount Battery",
            slug: "48v-100ah-rackmount",
            type: "Cabinet Type",
            specs: "4.8KWH Grade A LiFePO4 Cell 48V 100Ah",
            category: "Rack Mount",
            image: Img48v100ahRackmount,
            featured: false
        },
        {
            id: 6,
            name: "Photovoltaic Inverter Energy Storage Battery",
            slug: "photovoltaic-inverter-storage",
            type: "Cabinet Type",
            specs: "19.2KWH Grade A LiFePO4 Cell 192V 100Ah",
            category: "Rack Mount",
            image: ImgPhotovoltaic,
            featured: false
        },
        {
            id: 7,
            name: "51.2V 200AH Vertical Storage Battery",
            slug: "51-2v-200ah-vertical",
            type: "Ground Type",
            specs: "10.24KWH Grade A LiFePO4 Cell 51.2V 200Ah",
            category: "Ground Type",
            image: Img51v200ahVertical,
            featured: false
        },

        // Page 2 - Image 2
        {
            id: 8,
            name: "Solar 100ah 51.2V 48V 5kwh Smart Home Energy Storage Powerwall Lithium Battery",
            slug: "solar-100ah-powerwall",
            type: "Wall-mounted",
            specs: "5.12KWH Grade A LiFePO4 Cell 51.2V 100Ah",
            category: "Wall Mounted",
            image: ImgSolar100ahWall,
            featured: false
        },
        {
            id: 9,
            name: "3U Cabinet Type Energy Storage Battery 51.2V 5KWH~30KWH",
            slug: "3u-cabinet-energy-storage",
            type: "3U STACKED ENERGY STORAGE LiFePO4 Battery",
            specs: "51.2V 100Ah 2.5-30KWH",
            category: "Stacked Type",
            image: Img3uCabinet,
            featured: false
        },
        {
            id: 10,
            name: "Powerwall Lifepo4 Battery 100Ah 48V",
            slug: "powerwall-100ah-48v",
            type: "Wall-mounted",
            specs: "5.00 kWh DOU Grade A LiFePO4 Cell 10 Years Design Life 6000 Times Life Cycle",
            category: "Wall Mounted",
            image: ImgPowerwall48v,
            featured: false
        },
        {
            id: 11,
            name: "51.2V 300AH Industrial Energy Storage With LCD Display",
            slug: "51-2v-300ah-industrial",
            type: "Cabinet Type",
            specs: "51.2V 300Ah",
            category: "Industrial",
            image: Img51v300ahIndustrial,
            featured: false
        },
        {
            id: 12,
            name: "25KWH LiFePO4 Phosphate Rack Mountable Battery",
            slug: "25kwh-rack-mountable",
            type: "Cabinet Type",
            specs: "25.6KWH Grade A LiFePO4 Cell 51.2V 500Ah",
            category: "Rack Mount",
            image: Img25kwhRack,
            featured: false
        },
        {
            id: 13,
            name: "48V 100AH Wall Mount Battery",
            slug: "48v-100ah-wall-mount",
            type: "Wall-mounted",
            specs: "4.8KWH Grade A LiFePO4 Cell 48V 100Ah",
            category: "Wall Mounted",
            image: Img48v100ahWall,
            featured: false
        },
        {
            id: 14,
            name: "51.2V 200AH Stacked Solar Battery",
            slug: "51-2v-200ah-stacked-solar",
            type: "Stacked Type",
            specs: "51.2V 200Ah",
            category: "Stacked Type",
            image: Img51v200ahStacked,
            featured: false
        },
        {
            id: 15,
            name: "51.2V 300AH LiFePO4 Phosphate Rack Mountable Battery",
            slug: "51-2v-300ah-rack",
            type: "Cabinet Type",
            specs: "15.36KWH Grade A LiFePO4 Cell 51.2V 300Ah",
            category: "Rack Mount",
            image: Img51v300ahRack,
            featured: false
        },
        {
            id: 16,
            name: "48V 50AH Residential Battery",
            slug: "48v-50ah-residential",
            type: "Wall-mounted",
            specs: "48V 50Ah",
            category: "Residential",
            image: Img48v50ahResidential,
            featured: false
        },
        {
            id: 17,
            name: "48V 200AH Residential Solar Battery",
            slug: "48v-200ah-residential-solar",
            type: "Wall-mounted",
            specs: "9.6KWH Grade A LiFePO4 Cell 48V 200Ah",
            category: "Residential",
            image: Img48v200ahResidential,
            featured: false
        },
        {
            id: 18,
            name: "51.2V 100Ah Energy Storage System",
            slug: "51-2v-100ah-energy-storage",
            type: "Wall-mounted",
            specs: "51.2V 100Ah",
            category: "Energy Storage",
            image: Img51v100ahEnergy,
            featured: false
        },
        {
            id: 19,
            name: "51.2V 200AH Stacked Energy Storage",
            slug: "51-2v-200ah-stacked-storage",
            type: "ALL-IN-ONE",
            specs: "51.2V 200Ah Grade A LiFePO4 Cell 5KW Off-grid Inverter 10.2kwh Lithium Battery",
            category: "All-in-One",
            image: Img51v200ahStackedStorage,
            featured: false
        },

        // Page 3 - Image 3
        {
            id: 20,
            name: "Lithium Battery 51.2V 23bah 10KWH Solar Lifepo4 Battery",
            slug: "lithium-51-2v-23bah-10kwh",
            type: "Ground Type",
            specs: "10.24KWH Grade A LiFePO4 Cell 51.2V 200Ah",
            category: "Ground Type",
            image: ImgLithium51v230ah,
            featured: false
        },
        {
            id: 21,
            name: "Solar Wall Mounted 5KWh Lithium-Ion Battery 24V 48V 100AH 200ah LiFePO4",
            slug: "solar-wall-5kwh",
            type: "Wall-mounted",
            specs: "5.12KWH Grade A LiFePO4 Cell 51.2V 100Ah",
            category: "Wall Mounted",
            image: ImgSolarWall5kwh,
            featured: false
        },
        {
            id: 22,
            name: "Lithium Battery 51.2V 7140h Solar Lifepo4 Battery",
            slug: "lithium-51-2v-7140h",
            type: "Ground Type",
            specs: "6.15KWH Grade A LiFePO4 Cell 51.2V 120Ah",
            category: "Ground Type",
            image: ImgLithium51v300ah,
            featured: false
        },
        {
            id: 23,
            name: "6KW Off-Grid Home Energy Storage System 51.2V 100Ah All-in-One Lithium Battery",
            slug: "6kw-off-grid-all-in-one",
            type: "ALL-IN-ONE",
            specs: "51.2V 100Ah Grade A LiFePO4 Cell",
            category: "All-in-One",
            image: Img6kwOffGrid,
            featured: false
        },
        {
            id: 24,
            name: "Powerwall 25.6V 200Ah Lithium Iron Phosphate Battery 5kwh",
            slug: "powerwall-25-6v-200ah",
            type: "Wall-mounted",
            specs: "5.12KWH Grade A LiFePO4 Cell 25.6V 200Ah",
            category: "Wall Mounted",
            image: ImgPowerwall25v,
            featured: false
        },
        {
            id: 25,
            name: "Solar 30kwh Rack Mounted 51.2V 600Ah Class A Lithium Battery",
            slug: "solar-30kwh-rack-600ah",
            type: "Stacked type",
            specs: "30.00KWH 51.2V Grade A LiFePO4 Cell 2.56kwh - 60kwh",
            category: "Stacked Type",
            image: ImgSolar30kwhRack,
            featured: false
        },
        {
            id: 26,
            name: "Solar Lithium Battery Pack 51.2V 500Ah 28kwh Server Rack Batteries",
            slug: "solar-51-2v-500ah-28kwh",
            type: "Stacked type",
            specs: "51.2V 500Ah Grade A LiFePO4 Cell 2.56kwh - 60kwh",
            category: "Stacked Type",
            image: ImgSolar51v500ah,
            featured: false
        },
        {
            id: 27,
            name: "2BPOWER Stackable 51.2V 300ah Lithium Battery 6000 Cycle Life 15kWh",
            slug: "2bpower-stackable-300ah",
            type: "Stacked type",
            specs: "51.2V 300Ah Grade A LiFePO4 Cell 2.56kwh - 60kwh",
            category: "Stacked Type",
            image: Img2bpowerStackable,
            featured: false
        },
        {
            id: 28,
            name: "Rack-Mounted 28kwh 400ah 51.2V High Capacity Lithium Battery Pack",
            slug: "rack-mounted-28kwh-400ah",
            type: "Stacked type",
            specs: "51.2V 400Ah Grade A LiFePO4 Cell 2.56kwh - 60kwh",
            category: "Stacked Type",
            image: ImgRackMounted28kwh,
            featured: false
        },
        {
            id: 29,
            name: "Lithium Battery 51.2V 200ah 10KWH Solar Lifepo4 Battery",
            slug: "lithium-51-2v-200ah-10kwh",
            type: "Ground Type",
            specs: "15.36KWH Grade A LiFePO4 Cell 51.2V 300Ah",
            category: "Ground Type",
            image: ImgLithium51v200ah,
            featured: false
        },
        {
            id: 30,
            name: "Built-in Battery Management System Lifepo4 48v Lithium-ion Battery 200ah 10kwh",
            slug: "bms-48v-200ah-10kwh",
            type: "Ground Type",
            specs: "9.6KWH Grade A LiFePO4 Cell 48V 200Ah",
            category: "Ground Type",
            image: ImgBMS48v,
            featured: false
        },
        {
            id: 31,
            name: "Lithium Ion Battery 25.6V 100ah Wall Mount",
            slug: "lithium-25-6v-100ah-wall",
            type: "Wall-mounted",
            specs: "2.5KWH Grade A LiFePO4 Cell 100Ah - 200Ah",
            category: "Wall Mounted",
            image: ImgLithium25v100ah,
            featured: false
        },

        // Page 4 - Image 4
        {
            id: 32,
            name: "Solar 51.2V 500Ah 25.6kwh Residential Battery Storage",
            slug: "solar-51-2v-500ah-residential",
            type: "Stacked Type",
            specs: "25.60KWH Grade A LiFePO4 Cell 51.2V 500Ah",
            category: "Stacked Type",
            image: ImgSolar51v500ahResidential,
            featured: false
        },
        {
            id: 33,
            name: "Solar 5kwh 100Ah Lithium Battery",
            slug: "solar-5kwh-100ah",
            type: "Wall-mounted",
            specs: "5.12KWH 48/96/48V/51.2X 5X - 100Ah X5kWh",
            category: "Wall Mounted",
            image: ImgSolar5kwh100ah,
            featured: false
        },
        {
            id: 34,
            name: "China Factory 51.2V 48V 200Ah LiFePO4 Lithium Battery Ground Type Home Energy...",
            slug: "china-51-2v-200ah-ground",
            type: "Ground Type",
            specs: "10.24KWH 48V/51.2X 200Ah - 300Ah",
            category: "Ground Type",
            image: ImgChina51v200ah,
            featured: false
        },
        {
            id: 35,
            name: "51.2v 280ah Standing Lithium Ion Lifepo4 Battery",
            slug: "51-2v-280ah-standing",
            type: "Ground Type",
            specs: "14.34KWH Grade A LiFePO4 Cell",
            category: "Ground Type",
            image: Img51v280ahStanding,
            featured: false
        },
        {
            id: 36,
            name: "Solar All-in-One 6KW Inverter + 10kwh Lithium Battery",
            slug: "solar-all-in-one-6kw",
            type: "ALL-IN-ONE",
            specs: "10.24KWH/20.48KWH Grade A LiFePO4 Cell",
            category: "All-in-One",
            image: ImgSolarAllInOne6kw,
            featured: false
        },
        {
            id: 37,
            name: "China Factory Lifepo4 Battery 51.2V 400Ah 20kwh Lithium Batteries",
            slug: "china-51-2v-400ah-20kwh",
            type: "Stacked Type",
            specs: "20.48KWH Grade A LiFePO4 Cell 51.2V 400Ah",
            category: "Stacked Type",
            image: ImgChina51v400ah,
            featured: false
        },
        {
            id: 38,
            name: "Residential Energy Storage 15KWH Solar Stacked Battery 51.2V 300Ah Long Lif...",
            slug: "residential-15kwh-stacked",
            type: "Stacked Type",
            specs: "15.36KWH Grade A LiFePO4 Cell 51.2V 300Ah",
            category: "Stacked Type",
            image: ImgResidential15kwh,
            featured: false
        },
        {
            id: 39,
            name: "Solar Energy Storage System 24V 48V 100ah 200ah Lithium Iron Phosphate Battery",
            slug: "solar-energy-storage-24v-48v",
            type: "Wall-mounted",
            specs: "5.12KWH Grade A LiFePO4 Cell 25.6V 200Ah",
            category: "Wall Mounted",
            image: ImgSolarEnergy24v48v,
            featured: false
        },
        {
            id: 40,
            name: "China Lithium Ion Battery 25kwh 700Ah 51.2V Solar Lip Battery",
            slug: "china-25kwh-700ah",
            type: "Stacked Type",
            specs: "35.84KWH Grade A LiFePO4 Cell 51.2V 700Ah",
            category: "Stacked Type",
            image: ImgChina25kwh700ah,
            featured: false
        },
        {
            id: 41,
            name: "48V Stacked LiFePO4 Battery 600Ah",
            slug: "48v-stacked-600ah",
            type: "Stacked Type",
            specs: "30.72KWH Grade A LiFePO4 Cell 51.2V 400Ah",
            category: "Stacked Type",
            image: Img48vStacked600ah,
            featured: false
        },
        {
            id: 42,
            name: "China AI Lithium-Ion Battery 12.8V 100Ah Lifepo4 Battery For RV",
            slug: "china-ai-12-8v-100ah-rv",
            type: "Battery",
            specs: "12.8V 100Ah",
            category: "RV Battery",
            image: ImgChinaAI12v,
            featured: false
        },
        {
            id: 43,
            name: "Outdoor Emergency Solar Power Station Battery Storage Power Station",
            slug: "outdoor-emergency-power-station",
            type: "Mobile power stations",
            specs: "2.16KWH Grade A LiFePO4 Cell 51.2V 42Ah",
            category: "Mobile Power",
            image: ImgOutdoorEmergency,
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
          

            {/* Hero Section */}
            <section className="relative h-[500px] overflow-hidden">
                <Header/>
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
                <div className=" relative z-10 text-left px-6 max-w-7xl mx-auto pt-32">
                    <p className='text-xl text-white font-bold mb-6'>Home/Products</p>
                    <h1 className="text-6xl text-white font-bold mb-6">Products</h1>
                    <button className='bg-gradient-to-r from-[#2D8DFD] to-[#3DE15C] text-white text-2xl px-16 py-4 mt-5 rounded-full font-semibold hover:bg-cyan-300 transition'>
                         Contact Us
                    </button>

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

                                   <div className="mt-auto">
                                        <Link href={`/products/${product.slug}`}>
                                            <button className="w-full bg-gradient-to-r from-[#2D8DFD] to-[#3DE15C] text-white py-2 px-4 rounded-lg font-semibold hover:opacity-90 transition">
                                                View Details
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* All Products Grid */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-black text-center mb-16">All Products</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {currentProducts.map((product) => (
                            <div key={product.id} className="bg-white rounded-2xl border-2 border-blue-200 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
                                <div className="p-6 flex flex-col flex-grow">
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

                                    <div className="mt-auto">
                                        <Link href={`/products/${product.slug}`}>
                                            <button className="w-full bg-gradient-to-r from-[#2D8DFD] to-[#3DE15C] text-white py-2 px-4 rounded-lg font-semibold hover:opacity-90 transition">
                                                View Details
                                            </button>
                                        </Link>
                                    </div>
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
<div className="flex flex-col justify-end">
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
                </div>
            </section>

            {/* Footer */}
            <Footer/>
        </div>
    );
}