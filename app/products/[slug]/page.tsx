"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Import product images
import Product1 from "../../Prodcutsimages/01 1.png"
import Product2 from "../../Prodcutsimages/02 b 2.png"
import Product3 from "../../Prodcutsimages/03 208889220.png"
import Product4 from "../../Prodcutsimages/04.png"
import Product5 from "../../Prodcutsimages/05 b 3.png"
import Product6 from "../../Prodcutsimages/06 1.png"
import Product7 from "../../Prodcutsimages/07 1.png"
import Product8 from "../../Prodcutsimages/08 1.png"
import Product9 from "../../Prodcutsimages/11 99.png"
import Product10 from "../../Prodcutsimages/12 1.png"
import Product11 from "../../Prodcutsimages/Group 1000005108.png"
import Product12 from "../../Prodcutsimages/Group 1000005109.png"

const productData: Record<string, any> = {
    '25-6kwh-wall-mounted': {
        name: "25.6kWH Wall Mounted Battery",
        model: "ZB-25.6-WM",
        category: "WALL MOUNTED",
        image: Product1,
        description: "High-capacity wall-mounted LiFePO4 battery system designed for residential and commercial applications.",
        keyFeatures: ["25.6kWh capacity", "LiFePO4 technology", "Wall-mounted", "Advanced BMS", "Modular", "10-year warranty"],
        specifications: {"Capacity": "25.6kWh", "Voltage": "51.2V", "Cycle Life": "6000+ cycles", "Warranty": "10 years"},
        applications: ["Residential storage", "Commercial backup", "Solar storage", "Peak shaving"]
    },
    '19-2kwh-wall-mounted': {
        name: "19.2kWH Wall Mounted",
        model: "ZB-19.2-WM",
        category: "WALL MOUNTED",
        image: Product2,
        description: "Mid-range wall-mounted battery for medium homes and businesses.",
        keyFeatures: ["19.2kWh capacity", "Compact design", "Smart monitoring", "Easy install", "8-year warranty"],
        specifications: {"Capacity": "19.2kWh", "Voltage": "48V", "Cycle Life": "5000+ cycles", "Warranty": "8 years"},
        applications: ["Medium homes", "Small commercial", "Backup power", "Grid-tie"]
    },
    '14-3kwh-wall-mounted': {
        name: "14.3kWH Wall Mounted",
        model: "ZB-14.3-WM",
        category: "WALL MOUNTED",
        image: Product3,
        description: "Compact battery solution for smaller residential applications.",
        keyFeatures: ["14.3kWh capacity", "Space-saving", "Plug-and-play", "Mobile app", "5-year warranty"],
        specifications: {"Capacity": "14.3kWh", "Voltage": "48V", "Cycle Life": "4000+ cycles", "Warranty": "5 years"},
        applications: ["Small homes", "Apartments", "Emergency backup", "Off-grid"]
    },
    '5-0kwh-wall-mounted': {
        name: "5.0kWH Wall Mounted",
        model: "ZB-5.0-WM",
        category: "WALL MOUNTED",
        image: Product4,
        description: "Ultra-compact solution for basic backup needs.",
        keyFeatures: ["5.0kWh capacity", "Ultra-compact", "DIY friendly", "Lightweight", "3-year warranty"],
        specifications: {"Capacity": "5.0kWh", "Voltage": "48V", "Cycle Life": "3000+ cycles", "Warranty": "3 years"},
        applications: ["Small apartments", "Essential backup", "Small solar", "Telecoms"]
    },
    '51-2v-200ah-powerwall': {
        name: "51.2V 200Ah Powerwall",
        model: "ZB-PW-200",
        category: "POWERWALL",
        image: Product5,
        description: "Professional powerwall with Grade A cells.",
        keyFeatures: ["Grade A cells", "10.24kWh", "Powerwall design", "Thermal mgmt", "7-year warranty"],
        specifications: {"Capacity": "10.24kWh", "Voltage": "51.2V", "Cycle Life": "6000+ cycles", "Warranty": "7 years"},
        applications: ["Powerwall systems", "Commercial storage", "Hybrid solar", "Microgrids"]
    },
    '51-2v-100ah-200ah-all-in-one': {
        name: "51.2V All-in-One",
        model: "ZB-AIO-200",
        category: "ALL-IN-ONE",
        image: Product6,
        description: "Versatile all-in-one system with integrated inverter.",
        keyFeatures: ["Scalable 100-200Ah", "Integrated inverter", "All-in-one", "Touch screen", "6-year warranty"],
        specifications: {"Capacity": "5.12-10.24kWh", "Voltage": "51.2V", "Cycle Life": "5500+ cycles", "Warranty": "6 years"},
        applications: ["All-in-one systems", "Small business", "Solar+storage", "Energy independence"]
    },
    '25-6kwh-stacked': {
        name: "25.6kWH Stacked",
        model: "ZB-25.6-ST",
        category: "Stacked Type",
        image: Product7,
        description: "High-capacity stacked system for large installations.",
        keyFeatures: ["25.6kWh (500Ah)", "Modular stacked", "Easy expansion", "Industrial grade", "10-year warranty"],
        specifications: {"Capacity": "25.6kWh", "Voltage": "51.2V", "Cycle Life": "6000+ cycles", "Warranty": "10 years"},
        applications: ["Large residential", "Commercial", "Industrial", "Utility-scale", "Microgrids"]
    },
    '51-2v-300ah-stacked': {
        name: "51.2V 300Ah Stacked",
        model: "ZB-300-ST",
        category: "Stacked Type",
        image: Product8,
        description: "Medium stacked system with Grade A cells.",
        keyFeatures: ["15.36kWh", "Grade A cells", "Flexible config", "High density", "8-year warranty"],
        specifications: {"Capacity": "15.36kWh", "Voltage": "51.2V", "Cycle Life": "5500+ cycles", "Warranty": "8 years"},
        applications: ["Commercial", "Industrial", "Large homes", "EV charging"]
    },
    '20-48kwh-stacked': {
        name: "20.48kWH Stacked",
        model: "ZB-20.48-ST",
        category: "Stacked Type",
        image: Product9,
        description: "Robust stacked system for reliable long-term use.",
        keyFeatures: ["20.48kWh", "Stackable", "High reliability", "Long cycle life", "7-year warranty"],
        specifications: {"Capacity": "20.48kWh", "Voltage": "51.2V", "Cycle Life": "6000+ cycles", "Warranty": "7 years"},
        applications: ["Commercial", "Industrial backup", "Large residential", "Grid stabilization"]
    },
    '35-84kwh-stacked': {
        name: "35.84kWH Stacked",
        model: "ZB-35.84-ST",
        category: "Stacked Type",
        image: Product10,
        description: "Enterprise-grade high-capacity stacked battery.",
        keyFeatures: ["35.84kWh", "Grade A cells", "Enterprise grade", "Scalable", "10-year warranty"],
        specifications: {"Capacity": "35.84kWh", "Voltage": "51.2V", "Cycle Life": "6500+ cycles", "Warranty": "10 years"},
        applications: ["Large commercial", "Industrial", "Utility-scale", "Data centers"]
    },
    '2mwh-mobile-power': {
        name: "2MWh Mobile Power",
        model: "ZB-2MWh-MP",
        category: "Mobile Power Stations",
        image: Product11,
        description: "Ultra-high capacity mobile power station.",
        keyFeatures: ["2MWh capacity", "Mobile container", "Rapid deployment", "Fire suppression", "15-year warranty"],
        specifications: {"Capacity": "2MWh", "Voltage": "1000V", "Cycle Life": "8000+ cycles", "Warranty": "15 years"},
        applications: ["Utility-scale", "Grid stabilization", "Renewable farms", "Peak shaving"]
    },
    'home-energy-storage': {
        name: "Smart Home Energy Storage",
        model: "ZB-HES-SMART",
        category: "Home Energy Storage",
        image: Product12,
        description: "Complete smart grid-connected home system.",
        keyFeatures: ["Smart grid-connected", "AI optimization", "Solar integration", "Mobile control", "10-year warranty"],
        specifications: {"Capacity": "10-30kWh", "Voltage": "48V", "Cycle Life": "6000+ cycles", "Warranty": "10 years"},
        applications: ["Smart homes", "Solar+storage", "Grid independence", "EV charging"]
    }
};

interface Props {
    params: Promise<{ slug: string }>;
}

export default async function ProductDetail({ params }: Props) {
    const { slug } = await params;
    const product = productData[slug];
    if (!product) notFound();

    return (
        <div className="min-h-screen bg-white">
            <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <Link href="/">ZIBBO Logo</Link>
                    <div className="flex space-x-6">
                        <Link href="/products" className="text-blue-500">Products</Link>
                        <Link href="/about">About</Link>
                        <button className="bg-gradient-to-r from-[#2D8DFD] to-[#3DE15C] text-white px-6 py-2 rounded-full">Contact</button>
                    </div>
                </div>
            </nav>

            <div className="pt-24 pb-6 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <Link href="/">Home</Link> / <Link href="/products">Products</Link> / {product.name}
                </div>
            </div>

            <section className="py-12 px-6">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
                    <div className="bg-gray-50 rounded-2xl p-8">
                        <Image src={product.image} alt={product.name} className="w-full h-96 object-contain" />
                    </div>
                    <div>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">{product.category}</span>
                        <h1 className="text-4xl font-bold mt-4 mb-4">{product.name}</h1>
                        <p className="text-xl text-gray-600 mb-6">{product.description}</p>
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold mb-4">Key Features:</h3>
                            <ul className="space-y-2">
                                {product.keyFeatures.map((f: string, i: number) => (
                                    <li key={i} className="flex items-center">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex space-x-4">
                            <button className="bg-gradient-to-r from-[#2D8DFD] to-[#3DE15C] text-white px-8 py-3 rounded-lg font-semibold">Request Quote</button>
                            <button className="border-2 border-gray-300 px-8 py-3 rounded-lg font-semibold">Download Datasheet</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Technical Specifications</h2>
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <div className="grid md:grid-cols-2 gap-6">
                            {Object.entries(product.specifications).map(([k, v]) => (
                                <div key={k} className="flex justify-between py-3 border-b">
                                    <span className="font-medium">{k}:</span>
                                    <span>{v as string}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Applications</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {product.applications.map((app: string, i: number) => (
                            <div key={i} className="bg-white p-6 rounded-xl shadow-lg">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4"></div>
                                <h3 className="font-semibold">{app}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 bg-gray-900 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to Power Your Future?</h2>
                    <p className="text-xl mb-8">Contact our experts for your energy storage needs.</p>
                    <button className="bg-gradient-to-r from-[#2D8DFD] to-[#3DE15C] px-8 py-3 rounded-lg font-semibold">Contact Team</button>
                </div>
            </section>
        </div>
    );
}