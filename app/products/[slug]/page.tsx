"use client"
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import Link from 'next/link';

// Product images from productsImages folder
import Img15kwhRack from "../../productsImages/15kwh-lifepo4-phosphate-rack-mountable04e4b.webp"
import Img48v100ahRack from "../../productsImages/48v-100ah-lifepo4-phosphate-rack-mountable3d9c6.webp"
import Img51v100ahRack from "../../productsImages/51-2v-100ah-rack-mount-battery49b70.webp"
import Img51v20kwRack from "../../productsImages/51-2v-20kw-rack-energy-storage-system4dad2.webp"
import Img48v100ahRackmount from "../../productsImages/48v-100ah-rackmount-battery34e50.webp"
import ImgPhotovoltaic from "../../productsImages/photovoltaic-inverter-energy-storage-battery7b7e86a3-99fb-4341-af29-085029ff5b01.webp"
import Img51v200ahVertical from "../../productsImages/51-2v-200ah-vertical-storage-batteryb6be8.webp"
import ImgSolar100ahWall from "../../productsImages/48v-100ah-wall-mount-batteryb4f77011-def4-40f3-8a39-1e2f21bf9f78.webp"
import Img3uCabinet from "../../productsImages/3u-cabinet-type-energy-storage-battery-51-2vd8da8.webp"
import ImgPowerwall48v from "../../productsImages/powerwall-lifepo4-battery-100ah-48ve5e95.webp"
import Img51v300ahIndustrial from "../../productsImages/51-2v-300ah-industrial-energy-storage-with20300.webp"
import Img25kwhRack from "../../productsImages/15kwh-lifepo4-phosphate-rack-mountable04e4b.webp"
import Img48v100ahWall from "../../productsImages/48v-100ah-wall-mount-batteryb4f77011-def4-40f3-8a39-1e2f21bf9f78.webp"
import Img51v200ahStacked from "../../productsImages/51-2v-200ah-stacked-solar-batteryf3e15.webp"
import Img51v300ahRack from "../../productsImages/51-2v-300ah-lifepo4-phosphate-rack-mountablee049f.webp"
import Img48v50ahResidential from "../../productsImages/48v-50ah-residential-battery2420a.webp"
import Img48v200ahResidential from "../../productsImages/48v-200ah-residential-solar-battery971eb.webp"
import Img51v100ahEnergy from "../../productsImages/51-2v-100ah-energy-storage-system13fed.webp"
import Img51v200ahStackedStorage from "../../productsImages/51-2v-100ah-stacked-energy-storage1aade.webp"
import ImgLithium51v230ah from "../../productsImages/lithium-battery-51-2v-230ah-10kwh-solar0f0c0.webp"
import ImgSolarWall5kwh from "../../productsImages/48v-100ah-wall-mount-batteryb4f77011-def4-40f3-8a39-1e2f21bf9f78.webp"
import ImgLithium51v300ah from "../../productsImages/lithium-battery-51-2v-300ah-314ah-15kwh-solar785bd.webp"
import Img6kwOffGrid from "../../productsImages/6kw-off-grid-home-energy-storage-system-51-2v99251.webp"
import ImgPowerwall25v from "../../productsImages/powerwall-25-6v-200ah-lithium-iron-phosphate4147e.webp"
import ImgSolar30kwhRack from "../../productsImages/solar-30kwh-rack-mounted-51-2v-600ah-class-afa588.webp"
import ImgSolar51v500ah from "../../productsImages/solar-lithium-battery-pack-51-2v-500ah-25kwh04e99.webp"
import Img2bpowerStackable from "../../productsImages/residential-energy-storage-15kwh-solarf85d2.webp"
import ImgRackMounted28kwh from "../../productsImages/rack-mounted-20kwh-400ah-51-2v-high-capacityd5de4.webp"
import ImgLithium51v200ah from "../../productsImages/lithium-battery-51-2v-230ah-10kwh-solar0f0c0.webp"
import ImgBMS48v from "../../productsImages/built-in-battery-management-system-lifepo41b91a.webp"
import ImgLithium25v100ah from "../../productsImages/20250228113200b8dfa.webp"
import ImgSolar51v500ahResidential from "../../productsImages/solar-lithium-battery-pack-51-2v-500ah-25kwh04e99.webp"
import ImgSolar5kwh100ah from "../../productsImages/48v-100ah-wall-mount-batteryb4f77011-def4-40f3-8a39-1e2f21bf9f78.webp"
import ImgChina51v200ah from "../../productsImages/china-factory-51-2v-48v-200ah-lifepo4-lithium2aadd.webp"
import Img51v280ahStanding from "../../productsImages/51-2v-280ah-standing-lithium-ion-lifepo425684.webp"
import ImgSolarAllInOne6kw from "../../productsImages/solar-all-in-one-6kw-inverter-10kwh-lithium6cf87.webp"
import ImgChina51v400ah from "../../productsImages/china-factory-lifepo4-battery-51-2v-400ahf5a19.webp"
import ImgResidential15kwh from "../../productsImages/residential-energy-storage-15kwh-solarf85d2.webp"
import ImgSolarEnergy24v48v from "../../productsImages/solar-energy-storage-system-24v-48v-100ah5dc0f.webp"
import ImgChina25kwh700ah from "../../productsImages/china-lithium-ion-battery-35kwh-700ah-solar57f31.webp"
import Img48vStacked600ah from "../../productsImages/48v-stacked-lifepo4-battery-600ah-30kwh079c0.webp"
import ImgChinaAI12v from "../../productsImages/class-a-lithium-ion-battery-12-8v-100ah-150ah3089d.webp"
import ImgOutdoorEmergency from "../../productsImages/outdoor-emergency-solar-power-station-2400w58f5f.webp"
import Renewable from "../../gray-sofa-white-living-room-interior-with-copy-space-3d-rendering.jpg"
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';


// All products data
const allProducts = [
    { 
        id: 1, 
        name: "15KWH LiFePO4 Phosphate Rack Mountable Battery", 
        slug: "15kwh-lifepo4-rack-mountable", 
        type: "Cabinet Type", 
        specs: "15.36KWH Grade A LiFePO4 Cell 51.2V 300Ah", 
        category: "Rack Mount", 
        image: Img15kwhRack, 
        featured: false,
        description: "ZBPOWER offers Rack Mounted lithium iron phosphate batteries in 10 kWh, 15 kWh, 20 kWh, and 25 kWh capacities, allowing you to store enough solar energy and power your home with compatibility with most of the inverters on the market, and dramatically reduce your electric bill."
    },
    { id: 2, name: "48V 100AH LiFePO4 Phosphate Rack Mountable Battery", slug: "48v-100ah-rack-mountable", type: "Cabinet Type", specs: "4.8KWH Grade A LiFePO4 Cell 48V 100Ah", category: "Rack Mount", image: Img48v100ahRack, featured: false, description: "ZBPOWER 48V 100AH is a 4.8kwh rack mounted low-voltage lithium iron phosphate battery that is compatible with most inverters on the market. You have the flexibility to expand your power capacity without limit. It enables you to meet growing energy demands and ensure an uninterrupted supply of power to your equipment or system." },
    { id: 3, name: "51.2V 100Ah Rack Mount Battery", slug: "51-2v-100ah-rack-mount", type: "Cabinet Type", specs: "5.12KWH Grade A LiFePO4 Cell 51.2V 100Ah", category: "Rack Mount", image: Img51v100ahRack, featured: false, description: "ZBPOWER 51.2V 100AH is a lithium iron phosphate lithium-ion battery with a capacity of 5.12kwh and a low voltage of 100Ah, which is compatible with most of the inverters on the market. It is mainly used for home or outdoor PV energy storage." },
    { id: 4, name: "51.2V 20kw Rack Energy Storage System", slug: "51-2v-20kw-rack-energy", type: "Cabinet Type", specs: "20.48KWH Grade A LiFePO4 Cell 51.2V 400Ah", category: "Rack Mount", image: Img51v20kwRack, featured: false, description: "ZBPOWER 51.2V 400AH is a lithium iron phosphate lithium-ion battery with a capacity of 20.48kwh, which is compatible with most of the inverters on the market. It is mainly used for home or outdoor PV energy storage." },
    { id: 5, name: "48V 100Ah Rackmount Battery", slug: "48v-100ah-rackmount", type: "Cabinet Type", specs: "4.8KWH Grade A LiFePO4 Cell 48V 100Ah", category: "Rack Mount", image: Img48v100ahRackmount, featured: false, description: "ZBPOWER 48V 100AH is a 4.8 kWh rack mounted low voltage lithium iron phosphate battery, compatible with most inverters on the market and supports up to 15 battery modules in parallel. The stackable module architecture allows users to easily expand capacity by adding more battery cells, ensuring flexibility and scalability for home needs." },
    { id: 6, name: "Photovoltaic Inverter Energy Storage Battery", slug: "photovoltaic-inverter-storage", type: "Cabinet Type", specs: "19.2KWH Grade A LiFePO4 Cell 192V 100Ah", category: "Rack Mount", image: ImgPhotovoltaic, featured: false, description: "The ZBPOWER 192V 100AH is an off-grid high voltage lithium iron phosphate battery with a capacity of 19kwh compatible with most inverters on the market. It is mainly used for home or outdoor PV energy storage." },
    { id: 7, name: "51.2V 200AH Vertical Storage Battery", slug: "51-2v-200ah-vertical", type: "Ground Type", specs: "10.24KWH Grade A LiFePO4 Cell 51.2V 200Ah", category: "Ground Type", image: Img51v200ahVertical, featured: false, description: "ZBPOWER 51.2V 200AH Vertical Energy Storage Battery Module adopts an upright structure, which is convenient for users to install and maintain, and at the same time has the advantages of occupying a small space, beautiful and generous, providing stable and reliable power supply for home electricity, industrial production, and outdoor activities." },
    { id: 8, name: "Solar 100ah 51.2V 48V 5kwh Smart Home Energy Storage Powerwall Lithium Battery", slug: "solar-100ah-powerwall", type: "Wall-mounted", specs: "5.12KWH Grade A LiFePO4 Cell 51.2V 100Ah", category: "Wall Mounted", image: ImgSolar100ahWall, featured: false, description: "This wall-mounted lithium battery has the advantages of high efficiency, energy saving, environmental protection and long life. Its compact design is easy to install, can be easily hung on the wall, saving indoor space. The high-quality battery cell and intelligent management system ensure stability and safety." },
    { id: 9, name: "3U Cabinet Type Energy Storage Battery 51.2V 5KWH~30KWH", slug: "3u-cabinet-energy-storage", type: "3U STACKED ENERGY STORAGE LiFePO4 Battery", specs: "51.2V 100Ah 2.5-30KWH", category: "Stacked Type", image: Img3uCabinet, featured: false },
    { id: 10, name: "Powerwall Lifepo4 Battery 100Ah 48V", slug: "powerwall-100ah-48v", type: "Wall-mounted", specs: "5.00 kWh DOU Grade A LiFePO4 Cell 10 Years Design Life 6000 Times Life Cycle", category: "Wall Mounted", image: ImgPowerwall48v, featured: false, description: "The 5kwh lithium iron phosphate battery pack is composed of 3.2V 100Ah 16S1P cell. High-quality quality, support customized logo, professional technical team can customize solutions according to customer requirements. Supports up to 16 parallel machines, can be expanded to 80kwh, compatible with many brands of inverters." },
    { id: 11, name: "51.2V 300AH Industrial Energy Storage With LCD Display", slug: "51-2v-300ah-industrial", type: "Cabinet Type", specs: "51.2V 300Ah", category: "Industrial", image: Img51v300ahIndustrial, featured: false, description: "ZBPOWER 51.2V 300AH Vertical Energy Storage Battery Module adopts an upright structure, convenient for installation and maintenance. Compatible with many top brand inverters, cycle life >6000 cycles up to 15 years, can be connected in parallel to increase battery capacity with RS232, RS485, CAN communication interface." },
    { id: 12, name: "25KWH LiFePO4 Phosphate Rack Mountable Battery", slug: "25kwh-rack-mountable", type: "Cabinet Type", specs: "25.6KWH Grade A LiFePO4 Cell 51.2V 500Ah", category: "Rack Mount", image: Img25kwhRack, featured: false, description: "ZBPOWER offers Rack Mounted lithium iron phosphate batteries in 10 kWh, 15 kWh, 20 kWh, and 25 kWh capacities, allowing you to store enough solar energy and power your home with compatibility with most of the inverters on the market, and dramatically reduce your electric bill." },
    { id: 13, name: "48V 100AH Wall Mount Battery", slug: "48v-100ah-wall-mount", type: "Wall-mounted", specs: "4.8KWH Grade A LiFePO4 Cell 48V 100Ah", category: "Wall Mounted", image: Img48v100ahWall, featured: false, description: "ZBPOWER 48V 100AH wall-mounted energy storage is designed for small home energy storage systems. Built-in BMS management system allows users to monitor the status of the energy storage system in real time, and better manage and control the system. The system can also increase capacity to meet electricity demand." },
    { id: 14, name: "51.2V 200AH Stacked Solar Battery", slug: "51-2v-200ah-stacked-solar", type: "Stacked Type", specs: "51.2V 200Ah", category: "Stacked Type", image: Img51v200ahStacked, featured: false, description: "The integrated design of battery module and inverter is beautiful and corrosion-resistant, adapting to various environments, occupying less space. Can be directly connected to solar PV panels for charging and discharging. Optional WIFI connectivity and LCD for real-time battery status viewing through mobile APP." },
    { id: 15, name: "51.2V 300AH LiFePO4 Phosphate Rack Mountable Battery", slug: "51-2v-300ah-rack", type: "Cabinet Type", specs: "15.36KWH Grade A LiFePO4 Cell 51.2V 300Ah", category: "Rack Mount", image: Img51v300ahRack, featured: false, description: "ZBPOWER 51.2V 300AH is a lithium iron phosphate battery with 15.36kwh capacity, ground-type design with rotating wheels for easy movement. Compatible with most inverters on the market. Can be used in motorhomes, solar energy systems, residential energy storage, off-grid settings, and more." },
    { id: 16, name: "48V 50AH Residential Battery", slug: "48v-50ah-residential", type: "Wall-mounted", specs: "48V 50Ah", category: "Residential", image: Img48v50ahResidential, featured: false, description: "ZBPOWER 48V 50Ah Residential Standby Battery is a split household energy storage battery with wall-mounted design, which can be installed on both indoor and outdoor walls, effectively saving house footprint. High performance charging and discharging, long life with 6000+ cycles, eco-friendly and reliable." },
    { id: 17, name: "48V 200AH Residential Solar Battery", slug: "48v-200ah-residential-solar", type: "Wall-mounted", specs: "9.6KWH Grade A LiFePO4 Cell 48V 200Ah", category: "Residential", image: Img48v200ahResidential, featured: false },
    { id: 18, name: "51.2V 100Ah Energy Storage System", slug: "51-2v-100ah-energy-storage", type: "Wall-mounted", specs: "51.2V 100Ah", category: "Energy Storage", image: Img51v100ahEnergy, featured: false },
    { id: 19, name: "51.2V 200AH Stacked Energy Storage", slug: "51-2v-200ah-stacked-storage", type: "ALL-IN-ONE", specs: "51.2V 200Ah Grade A LiFePO4 Cell 5KW Off-grid Inverter 10.2kwh Lithium Battery", category: "All-in-One", image: Img51v200ahStackedStorage, featured: false },
    { id: 20, name: "Lithium Battery 51.2V 23bah 10KWH Solar Lifepo4 Battery", slug: "lithium-51-2v-23bah-10kwh", type: "Ground Type", specs: "10.24KWH Grade A LiFePO4 Cell 51.2V 200Ah", category: "Ground Type", image: ImgLithium51v230ah, featured: false },
    { id: 21, name: "Solar Wall Mounted 5KWh Lithium-Ion Battery 24V 48V 100AH 200ah LiFePO4", slug: "solar-wall-5kwh", type: "Wall-mounted", specs: "5.12KWH Grade A LiFePO4 Cell 51.2V 100Ah", category: "Wall Mounted", image: ImgSolarWall5kwh, featured: false },
    { id: 22, name: "Lithium Battery 51.2V 7140h Solar Lifepo4 Battery", slug: "lithium-51-2v-7140h", type: "Ground Type", specs: "6.15KWH Grade A LiFePO4 Cell 51.2V 120Ah", category: "Ground Type", image: ImgLithium51v300ah, featured: false },
    { id: 23, name: "6KW Off-Grid Home Energy Storage System 51.2V 100Ah All-in-One Lithium Battery", slug: "6kw-off-grid-all-in-one", type: "ALL-IN-ONE", specs: "51.2V 100Ah Grade A LiFePO4 Cell", category: "All-in-One", image: Img6kwOffGrid, featured: false },
    { id: 24, name: "Powerwall 25.6V 200Ah Lithium Iron Phosphate Battery 5kwh", slug: "powerwall-25-6v-200ah", type: "Wall-mounted", specs: "5.12KWH Grade A LiFePO4 Cell 25.6V 200Ah", category: "Wall Mounted", image: ImgPowerwall25v, featured: false },
    { id: 25, name: "Solar 30kwh Rack Mounted 51.2V 600Ah Class A Lithium Battery", slug: "solar-30kwh-rack-600ah", type: "Stacked type", specs: "30.00KWH 51.2V Grade A LiFePO4 Cell 2.56kwh - 60kwh", category: "Stacked Type", image: ImgSolar30kwhRack, featured: false },
    { id: 26, name: "Solar Lithium Battery Pack 51.2V 500Ah 28kwh Server Rack Batteries", slug: "solar-51-2v-500ah-28kwh", type: "Stacked type", specs: "51.2V 500Ah Grade A LiFePO4 Cell 2.56kwh - 60kwh", category: "Stacked Type", image: ImgSolar51v500ah, featured: false },
    { id: 27, name: "2BPOWER Stackable 51.2V 300ah Lithium Battery 6000 Cycle Life 15kWh", slug: "2bpower-stackable-300ah", type: "Stacked type", specs: "51.2V 300Ah Grade A LiFePO4 Cell 2.56kwh - 60kwh", category: "Stacked Type", image: Img2bpowerStackable, featured: false },
    { id: 28, name: "Rack-Mounted 28kwh 400ah 51.2V High Capacity Lithium Battery Pack", slug: "rack-mounted-28kwh-400ah", type: "Stacked type", specs: "51.2V 400Ah Grade A LiFePO4 Cell 2.56kwh - 60kwh", category: "Stacked Type", image: ImgRackMounted28kwh, featured: false },
    { id: 29, name: "Lithium Battery 51.2V 200ah 10KWH Solar Lifepo4 Battery", slug: "lithium-51-2v-200ah-10kwh", type: "Ground Type", specs: "15.36KWH Grade A LiFePO4 Cell 51.2V 300Ah", category: "Ground Type", image: ImgLithium51v200ah, featured: false },
    { id: 30, name: "Built-in Battery Management System Lifepo4 48v Lithium-ion Battery 200ah 10kwh", slug: "bms-48v-200ah-10kwh", type: "Ground Type", specs: "9.6KWH Grade A LiFePO4 Cell 48V 200Ah", category: "Ground Type", image: ImgBMS48v, featured: false },
    { id: 31, name: "Lithium Ion Battery 25.6V 100ah Wall Mount", slug: "lithium-25-6v-100ah-wall", type: "Wall-mounted", specs: "2.5KWH Grade A LiFePO4 Cell 100Ah - 200Ah", category: "Wall Mounted", image: ImgLithium25v100ah, featured: false },
    { id: 32, name: "Solar 51.2V 500Ah 25.6kwh Residential Battery Storage", slug: "solar-51-2v-500ah-residential", type: "Stacked Type", specs: "25.60KWH Grade A LiFePO4 Cell 51.2V 500Ah", category: "Stacked Type", image: ImgSolar51v500ahResidential, featured: false },
    { id: 33, name: "Solar 5kwh 100Ah Lithium Battery", slug: "solar-5kwh-100ah", type: "Wall-mounted", specs: "5.12KWH 48/96/48V/51.2X 5X - 100Ah X5kWh", category: "Wall Mounted", image: ImgSolar100ahWall, featured: false },
    { id: 34, name: "China Factory 51.2V 48V 200Ah LiFePO4 Lithium Battery Ground Type Home Energy...", slug: "china-51-2v-200ah-ground", type: "Ground Type", specs: "10.24KWH 48V/51.2X 200Ah - 300Ah", category: "Ground Type", image: ImgChina51v200ah, featured: false },
    { id: 35, name: "51.2v 280ah Standing Lithium Ion Lifepo4 Battery", slug: "51-2v-280ah-standing", type: "Ground Type", specs: "14.34KWH Grade A LiFePO4 Cell", category: "Ground Type", image: Img51v280ahStanding, featured: false },
    { id: 36, name: "Solar All-in-One 6KW Inverter + 10kwh Lithium Battery", slug: "solar-all-in-one-6kw", type: "ALL-IN-ONE", specs: "10.24KWH/20.48KWH Grade A LiFePO4 Cell", category: "All-in-One", image: ImgSolarAllInOne6kw, featured: false },
    { id: 37, name: "China Factory Lifepo4 Battery 51.2V 400Ah 20kwh Lithium Batteries", slug: "china-51-2v-400ah-20kwh", type: "Stacked Type", specs: "20.48KWH Grade A LiFePO4 Cell 51.2V 400Ah", category: "Stacked Type", image: ImgChina51v400ah, featured: false },
    { id: 38, name: "Residential Energy Storage 15KWH Solar Stacked Battery 51.2V 300Ah Long Lif...", slug: "residential-15kwh-stacked", type: "Stacked Type", specs: "15.36KWH Grade A LiFePO4 Cell 51.2V 300Ah", category: "Stacked Type", image: ImgResidential15kwh, featured: false },
    { id: 39, name: "Solar Energy Storage System 24V 48V 100ah 200ah Lithium Iron Phosphate Battery", slug: "solar-energy-storage-24v-48v", type: "Wall-mounted", specs: "5.12KWH Grade A LiFePO4 Cell 25.6V 200Ah", category: "Wall Mounted", image: ImgSolarEnergy24v48v, featured: false },
    { id: 40, name: "China Lithium Ion Battery 25kwh 700Ah 51.2V Solar Lip Battery", slug: "china-25kwh-700ah", type: "Stacked Type", specs: "35.84KWH Grade A LiFePO4 Cell 51.2V 700Ah", category: "Stacked Type", image: ImgChina25kwh700ah, featured: false },
    { id: 41, name: "48V Stacked LiFePO4 Battery 600Ah", slug: "48v-stacked-600ah", type: "Stacked Type", specs: "30.72KWH Grade A LiFePO4 Cell 51.2V 400Ah", category: "Stacked Type", image: Img48vStacked600ah, featured: false },
    { id: 42, name: "China AI Lithium-Ion Battery 12.8V 100Ah Lifepo4 Battery For RV", slug: "china-ai-12-8v-100ah-rv", type: "Battery", specs: "12.8V 100Ah", category: "RV Battery", image: ImgChinaAI12v, featured: false },
    { id: 43, name: "Outdoor Emergency Solar Power Station Battery Storage Power Station", slug: "outdoor-emergency-power-station", type: "Mobile power stations", specs: "2.16KWH Grade A LiFePO4 Cell 51.2V 42Ah", category: "Mobile Power", image: ImgOutdoorEmergency, featured: false }
];

export default function ProductDetailPage() {
    const params = useParams();
    const slug = params?.slug as string;

    // Find the current product
    const product = allProducts.find(p => p.slug === slug);

    // Get related products (same category, excluding current product)
    const relatedProducts = allProducts
        .filter(p => p.category === product?.category && p.id !== product?.id)
        .slice(0, 3);

    const [formData, setFormData] = useState({
        name: '',
        product: product?.name || '',
        type: '',
        country: '',
        city: '',
        company: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        alert('Form submitted successfully!');
    };

    if (!product) {
        return <div className="min-h-screen flex items-center justify-center">Product not found</div>;
    }



    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
          <Header/>



            {/* Hero Section */}
            <section className="relative min-h-[650px] sm:min-h-[750px] md:min-h-[850px] lg:min-h-screen overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 ">
                    <div className="absolute inset-0 ">
                        <Image src={Renewable} alt="Renewable Energy" className="w-full h-full " />
                        <div className="absolute inset-0 bg-black/30"></div>

                    </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-20 left-10 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>

                <div className="absolute inset-0 flex items-center py-8 sm:py-12 md:py-16">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
                            <div className="text-white z-10 bg-white/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12">
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 leading-tight">{product.name}</h1>
                                <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-3 sm:mb-4 font-semibold">{product.type}</p>
                                <p className="text-white/90 mb-3 sm:mb-4 max-w-2xl leading-relaxed text-sm sm:text-base md:text-lg">
                                    {product.specs}
                                </p>
                                {product.description && (
                                    <p className="text-white/85 mb-6 sm:mb-8 md:mb-10 max-w-2xl leading-relaxed text-sm sm:text-base md:text-lg">
                                        {product.description}
                                    </p>
                                )}
                                <button className="bg-gradient-to-r from-[#2D8DFD] to-[#3DE15C] text-white px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 rounded-full hover:opacity-90 transition-all duration-300 font-semibold text-sm sm:text-base md:text-lg shadow-xl hover:shadow-2xl w-full sm:w-auto">
                                    Product Inquiry →
                                </button>
                            </div>
                            <div className="relative h-[280px] sm:h-[380px] md:h-[450px] lg:h-[500px] flex items-center justify-center">
                                <div className="relative w-full h-full">
                                    <Image 
                                        src={product.image} 
                                        alt={product.name}
                                        className="object-contain w-full h-full drop-shadow-2xl"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Features */}
            <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-12 md:mb-16 text-black">Product Features</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
                        <FeatureCard
                            title="Modular Design"
                            description="Flexible expansion with stackable modules for customized capacity"
                        />
                        <FeatureCard
                            title="Advanced Safety"
                            description="Multiple protection layers with intelligent thermal management"
                        />
                        <FeatureCard
                            title="Long Cycle Life"
                            description="6000+ cycles with LiFePO4 technology for lasting performance"
                        />
                        <FeatureCard
                            title="Smart Integration"
                            description="Compatible with leading hybrid inverters and monitoring systems"
                        />
                    </div>
                </div>
            </section>

            {/* Technical Specifications */}
            <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-12 md:mb-16 text-black">Technical Specifications</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
                        <div className="relative h-[280px] sm:h-[350px] md:h-[420px] lg:h-[480px] flex items-center justify-center bg-gray-50 rounded-2xl p-6 sm:p-8">
                            <div className="text-center text-gray-400">
                                <Image src={product.image} alt={product.name} width={300} height={400} className="object-contain" />
                            </div>
                        </div>
                        <div className="space-y-4 sm:space-y-5 md:space-y-6 text-black">
                            <SpecRow label="Product Name" value={product.name} />
                            <SpecRow label="Product Type" value={product.type} />
                            <SpecRow label="Category" value={product.category} />
                            <SpecRow label="Specifications" value={product.specs} />
                            <SpecRow label="Battery Type" value="LiFePO₄" />
                            <SpecRow label="Cycle life" value="6000+ Cycles" />
                            <SpecRow label="Protection Level" value="IP65" />
                            <SpecRow label="Warranty" value="10 Years" />
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 pt-6 sm:pt-8">
                                <button className="bg-gradient-to-r from-[#2D8DFD] to-[#3DE15C] text-white px-6 py-3 rounded-full hover:opacity-90 transition font-semibold text-sm sm:text-base">
                                    Technical Datasheet →
                                </button>
                                <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-50 transition font-semibold text-sm sm:text-base">
                                    More Information →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Products */}
            <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-12 md:mb-16 text-black">Related Products</h2>
                    <div className="relative">
                        {relatedProducts.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-black gap-6 sm:gap-8 md:gap-10">
                                {relatedProducts.map((relatedProduct) => (
                                    <Link key={relatedProduct.id} href={`/products/${relatedProduct.slug}`}>
                                        <div className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-blue-200">
                                            <div className="h-52 sm:h-56 md:h-60 bg-gray-100 rounded-xl mb-5 sm:mb-6 flex items-center justify-center p-4">
                                                <Image src={relatedProduct.image} alt={relatedProduct.name} width={200} height={200} className="object-contain" />
                                            </div>
                                            <h3 className="font-bold mb-3 text-base sm:text-lg md:text-xl leading-snug">{relatedProduct.name}</h3>
                                            <p className="text-sm sm:text-base text-gray-600 mb-5 sm:mb-6 leading-relaxed">{relatedProduct.specs}</p>
                                            <button className="w-full bg-gradient-to-r from-[#2D8DFD] to-[#3DE15C] text-white py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-semibold hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg">
                                                View Details
                                            </button>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <p className="text-center text-gray-500">No related products available</p>
                        )}
                    </div>
                </div>
            </section>

            {/* Typical Case */}
            <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-12 md:mb-16 text-black">Typical Case</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center bg-white rounded-3xl overflow-hidden max-w-6xl mx-auto shadow-xl">
                        <div className="h-72 sm:h-80 md:h-96 lg:h-full bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center p-8 sm:p-10 md:p-12 lg:p-16">
                            <Image src={product.image} alt={product.name} width={300} height={400} className="w-full h-full object-contain" />
                        </div>
                        <div className="p-6 sm:p-8 md:p-10 lg:p-12">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-5 md:mb-6">
                                {product.category} Installation Project
                            </h3>
                            <div className="space-y-3 sm:space-y-4 text-black mb-6 sm:mb-8">
                                <InfoRow label="Product" value={product.name} />
                                <InfoRow label="Type" value={product.type} />
                                <InfoRow label="Category" value={product.category} />
                                <InfoRow label="Application" value="Residential & Commercial" />
                            </div>
                            <button className="bg-gradient-to-r from-[#2D8DFD] to-[#3DE15C] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full hover:opacity-90 transition-all duration-300 font-semibold text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl w-full sm:w-auto">
                                Read more →
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-12 md:mb-16 text-black">Product Inquiry</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center bg-gray-50 rounded-3xl overflow-hidden max-w-6xl mx-auto shadow-xl">
                        <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 sm:p-10 md:p-12 lg:p-16 flex items-center justify-center min-h-[300px] sm:min-h-[400px]">
                            <Image src={product.image} alt={product.name} width={300} height={400} className="w-full h-full object-contain" />
                        </div>
                        <div className="p-6 sm:p-8 md:p-10 lg:p-12">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-5 md:mb-6">
                                Get a Quote
                            </h3>
                            <div className="space-y-3 sm:space-y-4 text-black mb-6 sm:mb-8">
                                <InfoRow label="Product" value={product.name} />
                                <InfoRow label="Type" value={product.type} />
                                <InfoRow label="Category" value={product.category} />
                            </div>
                            <form>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name *"
                                        className="border-2 border-gray-300 rounded-xl px-5 py-3.5 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm sm:text-base"
                                    />
                                    <input
                                        type="text"
                                        name="product"
                                        value={product.name}
                                        readOnly
                                        className="border border-gray-300 rounded-lg px-4 py-3 text-black bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                                    />
                                </div>
                                <div className="grid grid-cols-1 gap-4 sm:gap-5">
                                    <select
                                        name="type"
                                        className="border-2 border-gray-300 rounded-xl px-5 py-3.5 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm sm:text-base"
                                    >
                                        <option value="">Customer Type *</option>
                                        <option value="residential">Residential</option>
                                        <option value="commercial">Commercial</option>
                                        <option value="dealer">Dealer</option>
                                        <option value="installer">Installer</option>
                                    </select>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
                                    <input
                                        type="text"
                                        name="country"
                                        placeholder="Country"
                                        className="border-2 border-gray-300 rounded-xl px-5 py-3.5 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm sm:text-base"
                                    />
                                    <input
                                        type="text"
                                        name="city"
                                        placeholder="City"
                                        className="border-2 border-gray-300 rounded-xl px-5 py-3.5 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm sm:text-base"
                                    />
                                    <input
                                        type="text"
                                        name="company"
                                        placeholder="Company Name"
                                        className="border-2 border-gray-300 rounded-xl px-5 py-3.5 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm sm:text-base"
                                    />
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone *"
                                        className="border-2 border-gray-300 rounded-xl px-5 py-3.5 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm sm:text-base"
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email *"
                                        className="border-2 border-gray-300 rounded-xl px-5 py-3.5 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm sm:text-base"
                                    />
                                </div>
                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    rows={5}
                                    className="w-full border-2 border-gray-300 rounded-xl px-5 py-3.5 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm sm:text-base resize-none"
                                />
                                <div className="flex items-center space-x-3">
                                    <input type="checkbox" id="verification" className="w-5 h-5 rounded border-gray-300 text-blue-500 focus:ring-2 focus:ring-blue-500" />
                                    <label htmlFor="verification" className="text-sm sm:text-base text-black leading-relaxed">
                                        I am a <span className="text-[#3DE15C] font-semibold">Human</span> and I am interested in <span className="text-[#2D8DFD] font-semibold">products</span>
                                    </label>
                                </div>
                                <button
                                    onClick={handleSubmit}
                                    className="w-full bg-gradient-to-r from-[#2D8DFD] to-[#3DE15C] text-white py-4 sm:py-5 rounded-full hover:opacity-90 transition-all duration-300 font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl"
                                >
                                    Submit Inquiry
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
           <Footer/>
        </div>
    );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
    return (
        <div className="bg-white p-6 sm:p-7 md:p-8 lg:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-100 hover:border-blue-200">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 mx-auto mb-4 sm:mb-5 md:mb-6 bg-gradient-to-br from-[#2D8DFD] to-[#3DE15C] rounded-full flex items-center justify-center shadow-lg">
                <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-white rounded-full"></div>
            </div>
            <h3 className="font-bold mb-3 sm:mb-4 text-black text-lg sm:text-xl md:text-2xl">{title}</h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">{description}</p>
        </div>
    );
}

function SpecRow({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex flex-col sm:flex-row sm:justify-between py-3 sm:py-4 border-b border-gray-200 gap-2 sm:gap-4">
            <span className="text-gray-600 text-sm sm:text-base md:text-lg font-medium">{label}</span>
            <span className="font-semibold text-sm sm:text-base md:text-lg break-words text-black">{value}</span>
        </div>
    );
}

function ProductCard({ name, description }: { name: string; description: string }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <Image src="/api/placeholder/200/200" alt={name} width={200} height={200} />
            </div>
            <h3 className="font-bold mb-2">{name}</h3>
            <p className="text-sm text-gray-600 mb-4">{description}</p>
            <button className="w-full bg-gradient-to-r from-[#2D8DFD] to-[#3DE15C] text-white py-2 rounded-full text-sm hover:opacity-90">
                Product Inquiry
            </button>
        </div>
    );
}

function InfoRow({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex items-start space-x-3">
            <Check className="w-5 h-5 sm:w-6 sm:h-6 text-[#3DE15C] flex-shrink-0 mt-1" />
            <span className="text-sm sm:text-base md:text-lg break-words leading-relaxed">
                <span className="font-semibold">{label}:</span> {value}
            </span>
        </div>
    );
}