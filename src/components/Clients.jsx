import React from 'react';
import { ImageWithFallback } from "./figma/ImageWithFallback";

const Clients = () => {
  const testimonialData = [
    {
      type: "profile",
      name: "Marina Koeller",
      imageUrl: "https://images.unsplash.com/photo-1754298949882-216a1c92dbb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU4MjQ5MTA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bgColor: "bg-red-500"
    },
    {
      type: "brand",
      text: "7DEVS",
      bgColor: "bg-white",
      textColor: "text-black"
    },
    {
      type: "quote",
      quote: "7Devs transformed our online presence with a stunning website that perfectly captures our brand identity. Their digital expertise took our business to the next level.",
      author: "Alex Storm",
      role: "Founder of TechFusion, Top Tech Innovator",
      bgColor: "bg-black",
      textColor: "text-white"
    },
    {
      type: "brand",
      text: "DIGITAL HUB",
      bgColor: "bg-white",
      textColor: "text-black"
    },
    {
      type: "profile",
      name: "David Kane",
      imageUrl: "https://images.unsplash.com/photo-1548454782-15b189d129ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMG1hbiUyMHN1aXR8ZW58MXx8fHwxNzU4Mjc4MTk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bgColor: "bg-red-500"
    },
    {
      type: "brand",
      text: "WEBCRAFT",
      bgColor: "bg-white",
      textColor: "text-black"
    },
    {
      type: "profile",
      name: "Sarah Chen",
      imageUrl: "https://images.unsplash.com/photo-1652471949169-9c587e8898cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHdvbWFufGVufDF8fHx8MTc1ODI0NDMwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bgColor: "bg-black"
    },
    {
      type: "quote",
      quote: "7Devs built us a custom e-commerce platform that increased our conversion rates by 40%. Their team's technical expertise and creative approach to problem-solving made all the difference.",
      author: "Emma Rodriguez",
      role: "Director of E-Commerce, Global Retail Solutions",
      bgColor: "bg-red-500",
      textColor: "text-white"
    },
    {
      type: "profile",
      name: "James Wilson",
      imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bgColor: "bg-red-500"
    },
    {
      type: "brand",
      text: "PIXELBYTE",
      bgColor: "bg-white",
      textColor: "text-black"
    }
  ];

  function Card({ item, className = "" }) {
    // Set a consistent height for all cards with h-64 (adjust this value as needed)
    const baseClasses = "rounded-2xl p-6 transition-all duration-300 hover:shadow-xl cursor-pointer h-64 flex flex-col";

    if (item.type === "profile") {
      return (
        <div className={`${baseClasses} ${item.bgColor} relative overflow-hidden ${className}`}>
          <ImageWithFallback
            src={item.imageUrl}
            alt={item.name}
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 mt-auto">
            <div className="text-white">
              <p className="font-medium">{item.name}</p>
            </div>
          </div>
          <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 text-white"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </div>
        </div>
      );
    }

    if (item.type === "brand") {
      return (
        <div className={`${baseClasses} ${item.bgColor} border-2 border-black items-center justify-center ${className}`}>
          <p className={`font-bold text-xl ${item.textColor} m-auto`}>{item.text}</p>
        </div>
      );
    }

    if (item.type === "quote") {
      return (
        <div className={`${baseClasses} ${item.bgColor} ${className}`}>
          <div className="mb-3">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={`${item.textColor === 'text-white' ? 'text-white' : 'text-black'} opacity-60`}>
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" fill="currentColor" />
            </svg>
          </div>
          <p className={`text-sm leading-relaxed mb-auto ${item.textColor}`}>
            {item.quote}
          </p>
          <div className={`border-t ${item.textColor === 'text-white' ? 'border-white/20' : 'border-black/20'} pt-3 mt-3`}>
            <p className={`font-medium text-sm ${item.textColor}`}>{item.author}</p>
            <p className={`text-xs opacity-70 ${item.textColor}`}>{item.role}</p>
          </div>
        </div>
      );
    }

    return null;
  }

  return (
    <section id="clients" className="min-h-screen bg-gray-50 py-20 px-4 sm:px-8 relative overflow-hidden">
      {/* Central Content */}
      <div className="max-w-4xl mx-auto text-center mb-8 md:mb-16">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4 md:mb-6 leading-tight">
          <span className="text-red-500">Impactful</span> digital solutions,
          <br className="hidden sm:block" />
          built for <span className="text-red-500">You</span>
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
          Join our portfolio of successful clients and transform your digital presence.
        </p>
      </div>

      {/* Scattered Cards Grid */}
      <div className="relative max-w-7xl mx-auto">
        {/* Row 1 - Equal height container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-4 md:mb-6 grid-flow-row-dense">
          <Card
            item={testimonialData[0]}
            className="sm:col-span-1 h-full"
          />
          <Card
            item={testimonialData[1]}
            className="sm:col-span-1 h-full"
          />
          <Card
            item={testimonialData[2]}
            className="sm:col-span-2 h-full"
          />
        </div>

        {/* Row 2 - Equal height container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-4 md:mb-6 grid-flow-row-dense">
          <Card
            item={testimonialData[3]}
            className="sm:col-span-1 h-full"
          />
          <Card
            item={testimonialData[4]}
            className="sm:col-span-1 h-full"
          />
          <Card
            item={testimonialData[5]}
            className="sm:col-span-1 h-full"
          />
          <Card
            item={testimonialData[6]}
            className="sm:col-span-1 h-full"
          />
        </div>

        {/* Row 3 - Equal height container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 grid-flow-row-dense">
          <Card
            item={testimonialData[7]}
            className="sm:col-span-2 h-full"
          />
          <Card
            item={testimonialData[8]}
            className="sm:col-span-1 h-full"
          />


        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-red-500 rounded-full opacity-30"></div>
        <div className="absolute top-1/3 right-20 w-3 h-3 bg-black rounded-full opacity-20"></div>
        <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-red-500 rounded-full opacity-40"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-black rounded-full opacity-25"></div>
      </div>



    </section>
  );
};

export default Clients;