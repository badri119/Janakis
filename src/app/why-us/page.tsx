import React from "react";

export default function WhyUsPage() {
  const uniquePoints = [
    {
      title: "Authentic South Indian Recipe",
      description:
        "Our dosas are crafted using traditional family recipes passed down through generations, maintaining the true essence of South Indian cuisine.",
    },
    {
      title: "Artisanal Fermentation Process",
      description:
        "We follow a meticulous 24-hour fermentation process, creating that perfect balance of tanginess and crispiness that defines an authentic dosa.",
    },
    {
      title: "Premium Local Ingredients",
      description:
        "We combine locally sourced Canadian ingredients with carefully selected Indian spices to create a unique fusion while maintaining authenticity.",
    },
    {
      title: "Diverse Menu Selection",
      description:
        "From classic masala dosa to innovative contemporary variations, we offer a range that caters to both traditional taste buds and modern palates.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#FAF3E8] pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#4A2512] text-center mb-8">
          Why Choose Our Dosas?
        </h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {uniquePoints.map((point, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 transition-transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-[#4A2512] mb-4">
                {point.title}
              </h3>
              <p className="text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
