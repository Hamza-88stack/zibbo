import React, { useState, useEffect } from 'react';
import { Users, FileText, Globe, Factory } from 'lucide-react';

const DynessAboutSection = () => {
  const [currentLocationIndex, setCurrentLocationIndex] = useState(0);

  const locations = [
    { id: 1, name: 'Taizhou, China', code: 'CN', company: 'Dyness Digital Energy Technology Co., Ltd.', x: 73.5, y: 36, isHQ: false },
    { id: 2, name: 'United States', code: 'US', x: 18, y: 38, isHQ: false },
    { id: 3, name: 'Canada', code: 'CA', x: 16, y: 25, isHQ: false },
    { id: 4, name: 'Mexico', code: 'MX', x: 17, y: 48, isHQ: false },
    { id: 5, name: 'Brazil', code: 'BR', x: 32, y: 68, isHQ: false },
    { id: 6, name: 'Europe', code: 'EU', x: 48, y: 30, isHQ: false },
    { id: 7, name: 'Russia', code: 'RU', x: 65, y: 24, isHQ: false },
    { id: 8, name: 'Kenya', code: 'KE', x: 55, y: 54, isHQ: false },
    { id: 9, name: 'South Africa', code: 'ZA', x: 53, y: 75, isHQ: false },
    { id: 10, name: 'Thailand', code: 'TH', x: 71, y: 47, isHQ: false },
    { id: 11, name: 'Singapore', code: 'SG', x: 72, y: 52, isHQ: false },
    { id: 12, name: 'Japan', code: 'JP', x: 80, y: 35, isHQ: false },
    { id: 13, name: 'Korea', code: 'KR', x: 77, y: 36, isHQ: false },
    { id: 14, name: 'Taiwan', code: 'TW', x: 75, y: 42, isHQ: false },
    { id: 15, name: 'Australia', code: 'AU', x: 81, y: 70, isHQ: false },
    { id: 16, name: 'New Zealand', code: 'NZ', x: 90, y: 78, isHQ: false },
  ];

  const stats = [
    { value: '3GWh', label: 'Annual Production Capacity', icon: <Factory className="w-6 h-6" /> },
    { value: '117', label: 'Patents', icon: <FileText className="w-6 h-6" /> },
    { value: '500,000+', label: 'Users', icon: <Users className="w-6 h-6" /> },
    { value: '90+', label: 'Global Partners', icon: <Globe className="w-6 h-6" /> },
  ];

  // Auto-cycle through locations every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLocationIndex((prev) => (prev + 1) % locations.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [locations.length]);

  const currentLocation = locations[currentLocationIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto flex justify-between">
        {/* Header Section */}
        <div className="">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">ABOUT DYNESS</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
About ZiBBO
Zibbo Power (ZB Power Technology Co., Ltd), established in 2012, is dedicated to shaping the future of energy storage. Through continuous innovation and expertise, Zibbo has earned global trust as a reliable leader in advanced lithium battery technology.

Now bringing our proven solutions to Pakistan, we aim to empower homes, businesses, and industries with safe, sustainable, and high-performance energy storage systems.

          </p>
          <button className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors shadow-lg">
            <span>Read More</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 mb-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white p-4 md:p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="text-green-500 mb-3">{stat.icon}</div>
              <div className="text-2xl md:text-4xl font-bold text-green-500 mb-2">{stat.value}</div>
              <div className="text-gray-600 text-xs md:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
</div>
        {/* Map Section */}
        <div className=" w-xl  ">
          
          
          <div className="relative w-full h-[500px] md:h-[600px] bg-slate-100 rounded-2xl overflow-hidden">
            {/* Real World Map Image */}
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/8/83/Equirectangular_projection_SW.jpg" 
              alt="World Map"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />

            {/* Location Markers */}
            {locations.map((location, index) => {
              const isActive = index === currentLocationIndex;
              const isPast = index < currentLocationIndex;
              
              return (
                <div
                  key={location.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
                  style={{ 
                    left: `${location.x}%`, 
                    top: `${location.y}%`,
                    zIndex: isActive ? 50 : isPast ? 30 : 20
                  }}
                >
                  <div className="relative">
                    {/* Marker Pin */}
                    <div 
                      className={`w-3 h-3 rounded-full transition-all duration-500 ${
                        location.isHQ 
                          ? 'bg-red-500 shadow-lg' 
                          : isActive
                          ? 'bg-green-500 shadow-xl scale-150'
                          : isPast
                          ? 'bg-green-400 shadow-md'
                          : 'bg-gray-400 shadow-sm'
                      }`}
                    >
                      {isActive && !location.isHQ && (
                        <>
                          <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                          <div className="absolute -inset-2 bg-green-300 rounded-full opacity-30 animate-pulse"></div>
                        </>
                      )}
                      {location.isHQ && (
                        <div className="absolute inset-0 w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                      )}
                    </div>

                    {/* Location Label - Always show for HQ, show for active location */}
                    {(isActive || location.isHQ) && (
                      <div 
                        className={`absolute whitespace-nowrap px-3 py-1.5 rounded-lg shadow-lg text-xs font-semibold transition-all duration-300 ${
                          location.isHQ
                            ? 'bg-red-500 text-white -top-8 left-1/2 -translate-x-1/2'
                            : 'bg-white text-gray-800 -top-8 left-1/2 -translate-x-1/2'
                        }`}
                      >
                        {location.name}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Current Location Info Card */}
            <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:top-6 md:bottom-auto bg-white rounded-2xl shadow-2xl p-6 max-w-sm animate-in fade-in slide-in-from-bottom md:slide-in-from-right">
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl flex-shrink-0 ${
                  currentLocation.isHQ ? 'bg-red-100' : 'bg-green-100'
                }`}>
                  {currentLocation.isHQ ? '🏢' : '📍'}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className={`font-bold text-xl truncate ${
                      currentLocation.isHQ ? 'text-red-600' : 'text-green-600'
                    }`}>
                      {currentLocation.name}
                    </h3>
                    {currentLocation.isHQ && (
                      <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full flex-shrink-0">HQ</span>
                    )}
                  </div>
                  {currentLocation.company && (
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {currentLocation.company}
                    </p>
                  )}
                  {!currentLocation.company && (
                    <p className="text-sm text-gray-500 italic">
                      Global partner location
                    </p>
                  )}
                  
                  {/* Progress indicator */}
                  <div className="mt-4">
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                      <span>Location {currentLocationIndex + 1} of {locations.length}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div 
                        className="bg-green-500 h-1.5 rounded-full transition-all duration-2000 ease-linear"
                        style={{ width: `${((currentLocationIndex + 1) / locations.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynessAboutSection;