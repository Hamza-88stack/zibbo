"use client"
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import Image from 'next/image';
import Product1 from "../../Prodcutsimages/01 1.png"

export default function ProductDetailPage() {
  const [formData, setFormData] = useState({
    name: '',
    product: '',
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

 

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/10 backdrop-blur-md">
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
              <a href="/products" className="hover:text-blue-400 transition font-semibold text-blue-500">Products</a>
              <a href="/case-studies" className="hover:text-blue-400 transition text-black">Case Studies</a>
              <a href="/news" className="hover:text-blue-400 transition text-black">News</a>
              <a href="/blog" className="hover:text-blue-400 transition text-black">Blog</a>
              <a href="/about" className="hover:text-blue-400 transition text-black">About Us</a>
              <button className="bg-gradient-to-r from-[#2D8DFD] to-[#3DE15C] text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </nav>

 

      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-br min-h-screen from-blue-500 via-blue-400 to-green-400 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="text-white z-10">
                <h1 className="text-7xl font-bold mb-4">ZB-512200</h1>
                <p className="text-2xl mb-3 font-semibold">10.24kWh Energy Storage System</p>
                <p className="text-white/90 mb-8 max-w-lg leading-relaxed text-lg">
                  Advanced lithium iron phosphate battery system designed for residential and commercial applications. 
                  Features intelligent BMS, modular design, and exceptional cycle life for reliable long-term performance.
                </p>
                <button className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition font-semibold text-lg shadow-lg">
                  Product Inquiry →
                </button>
              </div>
              <div className="relative h-[450px] flex items-center justify-center">
               <Image src={Product1} alt="Product" width={300} height={400} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">Product Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative h-[400px] flex items-center justify-center bg-gray-50 rounded-2xl">
              <div className="text-center text-gray-400">
                <Image src={Product1} alt="Product" width={300} height={400} />
              </div>
            </div>
            <div className="space-y-4 text-black">
              <SpecRow label="Product model" value="L-alfa02a" />
              <SpecRow label="Battery Type" value="LiFePO₄" />
              <SpecRow label="Nominal Voltage (VDC)" value="51.2 VDC" />
              <SpecRow label="Max Capacity" value="200 Ah" />
              <SpecRow label="Dimension(H*W*D)" value="154*427*430 mm" />
              <SpecRow label="Cycle life" value="6000 Cycles" />
              <SpecRow label="Protection Level" value="IP67" />
              <SpecRow label="Protection" value="Up to 10 kWs in parallel" />
              <div className="flex space-x-4 pt-4">
                <button className="bg-gradient-to-r from-[#2D8DFD] to-[#3DE15C] text-white px-6 py-3 rounded-full hover:opacity-90 transition">
                  Technical Datasheet →
                </button>
                <button className="border-2 border-gray-300 text-black px-6 py-3 rounded-full hover:bg-gray-50 transition font-semibold">
                  More Information →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">Related Products</h2>
          <div className="relative">
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-100 transition">
              <ChevronLeft className="w-6 h-6 text-black" />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-3 text-black gap-8 px-12">
              <ProductCard
                name="PowerBox-D2"
                description="10-30 kWh | up to 90 kWh in 3 in parallel"
              />
              <ProductCard
                name="DLS.0C"
                description="5-15 kWh | up to 30 kWh | up to 90 kWh with rack-mount or floor standing"
              />
              <ProductCard
                name="CXN-Modular"
                description="5 kWh Modular | Floor-mounted or 19'' Rack"
              />
            </div>
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-100 transition">
              <ChevronRight className="w-6 h-6 text-black" />
            </button>
          </div>
        </div>
      </section>

      {/* Typical Case */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">Typical Case</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gray-50 rounded-2xl overflow-hidden max-w-6xl mx-auto shadow-lg">
            <div className="h-full bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center p-12">
            <Image src={Product1} alt="Product" width={300} height={400} />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-black mb-4">
                Residential Energy Storage Installation Project
              </h3>
              <div className="space-y-2 text-black mb-6">
                <InfoRow label="Product" value="CXC5V / Stacked" />
                <InfoRow label="Address" value="Hillah, Germany" />
                <InfoRow label="Date" value="2022-10" />
                <InfoRow label="Application" value="Home" />
              </div>
              <button className="bg-gradient-to-r from-[#2D8DFD] to-[#3DE15C] text-white px-6 py-3 rounded-full hover:opacity-90 transition">
                Read more →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Inquiry Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-8 text-black">Product Inquiry</h2>
          <div className="flex justify-center space-x-4 mb-8">
            <button className="bg-gradient-to-r from-[#2D8DFD] to-[#3DE15C] text-white px-6 py-2 rounded-full hover:opacity-90 transition">
              Become a Dealer
            </button>
            <button className="border-2 border-gray-300 text-black px-6 py-2 rounded-full hover:bg-gray-50 transition font-semibold">
              Become a Partner
            </button>
            <button className="border-2 border-gray-300 text-black px-6 py-2 rounded-full hover:bg-gray-50 transition font-semibold">
              After-sales
            </button>
          </div>
          
          <div className="space-y-6 bg-white p-8 rounded-2xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name *"
                className="border border-gray-300 rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                // onChange={handleChange}
              />
              <select
                name="product"
                className="border border-gray-300 rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                // onChange={handleChange}
              >
                <option value="">Consulting Product *</option>
                <option value="dls0c">DLS.0C</option>
              </select>
              <select
                name="type"
                className="border border-gray-300 rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                // onChange={handleChange}
              >
                <option value="">Customer Type</option>
                <option value="dealer">Dealer</option>
                <option value="installer">Installer</option>
              </select>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                name="country"
                placeholder="Country"
                className="border border-gray-300 rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                // onChange={handleChange}
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                className="border border-gray-300 rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                // onChange={handleChange}
              />
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                className="border border-gray-300 rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                // onChange={handleChange}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                name="phone"
                placeholder="Phone *"
                className="border border-gray-300 rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                // onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email *"
                className="border border-gray-300 rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                // onChange={handleChange}
              />
            </div>
            
            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            //   onChange={handleChange}
            />
            
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="verification" className="w-4 h-4" />
              <label htmlFor="verification" className="text-sm text-black">
                I am a <span className="text-[#3DE15C] font-semibold">Human</span> and I am interested in <span className="text-[#2D8DFD] font-semibold">products</span>
              </label>
            </div>
            
            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-[#2D8DFD] to-[#3DE15C] text-white py-3 rounded-full font-semibold hover:opacity-90 transition"
            >
              Submit
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div>
              <h3 className="font-bold mb-4 text-white">About Zibbo</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-white transition cursor-pointer">Company Profile</li>
                <li className="hover:text-white transition cursor-pointer">Our Advantage</li>
                <li className="hover:text-white transition cursor-pointer">Core Technology</li>
                <li className="hover:text-white transition cursor-pointer">Certificate</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-white">Products</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-white transition cursor-pointer">Low Voltage</li>
                <li className="hover:text-white transition cursor-pointer">High Voltage</li>
                <li className="hover:text-white transition cursor-pointer">Commercial & Industrial</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-white">Solutions</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-white transition cursor-pointer">Residential Solutions</li>
                <li className="hover:text-white transition cursor-pointer">Commercial Solutions</li>
                <li className="hover:text-white transition cursor-pointer">Industrial Solutions</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-white">NEWS & EVENTS</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-white transition cursor-pointer">Company News</li>
                <li className="hover:text-white transition cursor-pointer">Industry News</li>
                <li className="hover:text-white transition cursor-pointer">Events</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-white">Subscribe to our newsletter</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 px-4 py-2 rounded-l-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
                />
                <button className="bg-gradient-to-r from-[#2D8DFD] to-[#3DE15C] px-6 py-2 rounded-r-full hover:opacity-90 transition">
                  Subscribe
                </button>
              </div>
              <div className="mt-6">
                <h4 className="font-bold mb-2 text-white">Contact Us</h4>
                <p className="text-sm text-gray-400 hover:text-white transition cursor-pointer">Email@gmail.com</p>
                <p className="text-sm text-gray-400 hover:text-white transition cursor-pointer">03208889719</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>Copyright © 2025 Zibbo Energy Co. Ltd.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center border border-gray-100">
      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#2D8DFD] to-[#3DE15C] rounded-full flex items-center justify-center">
        <div className="w-8 h-8 bg-white rounded-full"></div>
      </div>
      <h3 className="font-bold mb-2 text-black text-lg">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between py-2 border-b border-gray-200">
      <span className="text-gray-600">{label}</span>
      <span className="font-semibold">{value}</span>
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
    <div className="flex items-center space-x-2">
      <Check className="w-4 h-4 text-[#3DE15C]" />
      <span className="text-sm">
        <span className="font-semibold">{label}:</span> {value}
      </span>
    </div>
  );
}