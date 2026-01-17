import React from 'react';
import { GitHub, Linkedin, Mail, MapPin } from 'lucide-react'; // Easy icons

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 flex justify-center items-center">
      
      {/* THE GRID CONTAINER */}
      {/* mobile: 1 column | tablet: 2 cols | desktop: 4 cols */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl w-full">

        {/* 1. PROFILE CARD (Big Square - 2x2) */}
        <div className="col-span-1 md:col-span-2 row-span-2 bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col justify-between">
          <div>
            <img src="/vikas.jpg" alt="Vikas" className="w-16 h-16 rounded-full mb-4" />
            <h1 className="text-3xl font-bold text-gray-800">Vikas</h1>
            <p className="text-gray-500">MERN Stack Developer</p>
            <p className="mt-4 text-gray-600">
              Based in Kota. Building tools that solve real problems.
            </p>
          </div>
          <div className="mt-4 inline-flex items-center text-sm font-medium text-blue-600">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            Open to Work
          </div>
        </div>

        {/* 2. SOCIALS (Tall Strip - 1x2) */}
        <div className="col-span-1 row-span-2 bg-black text-white p-6 rounded-3xl shadow-sm flex flex-col justify-between">
          <div className="space-y-4">
             <a href="#" className="flex items-center gap-3 hover:text-gray-300"><GitHub size={20}/> GitHub</a>
             <a href="#" className="flex items-center gap-3 hover:text-gray-300"><Linkedin size={20}/> LinkedIn</a>
             <a href="#" className="flex items-center gap-3 hover:text-gray-300"><Mail size={20}/> Email</a>
          </div>
          <div className="text-4xl font-bold text-gray-800 opacity-20 rotate-90 origin-bottom-left">
            CONNECT
          </div>
        </div>

        {/* 3. PROJECT CARD 1 (Wide Rectangle - 2x1) */}
        {/* Notice 'col-span-2' makes it wide */}
        <div className="col-span-1 md:col-span-2 bg-blue-50 p-6 rounded-3xl border border-blue-100 hover:scale-[1.02] transition-transform cursor-pointer relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-blue-900">HostelFinder</h3>
            <p className="text-blue-700 text-sm mt-1">Full Stack MERN Platform</p>
          </div>
          {/* Decorative Circle */}
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-200 rounded-full blur-2xl"></div>
        </div>

        {/* 4. TECH STACK (Small Square - 1x1) */}
        <div className="col-span-1 bg-white p-6 rounded-3xl border border-gray-100 flex flex-wrap content-center gap-2">
           <span className="px-3 py-1 bg-gray-100 rounded-full text-xs">React</span>
           <span className="px-3 py-1 bg-gray-100 rounded-full text-xs">Node</span>
           <span className="px-3 py-1 bg-gray-100 rounded-full text-xs">Mongo</span>
           <span className="px-3 py-1 bg-gray-100 rounded-full text-xs">Express</span>
        </div>

        {/* 5. LOCATION / MAP (Small Square - 1x1) */}
        <div className="col-span-1 bg-orange-50 p-6 rounded-3xl border border-orange-100 flex flex-col items-center justify-center text-center">
           <MapPin className="text-orange-500 mb-2" />
           <span className="font-bold text-orange-900">Kota, RJ</span>
        </div>

      </div>
    </div>
  );
};

export default Portfolio;