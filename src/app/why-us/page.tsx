import { Coffee, Leaf, UtensilsCrossed, Soup } from "lucide-react";

export default function WhyUsPage() {
  const uniquePoints = [
    {
      title: "Authentic South Indian Recipe",
      description:
        "Our dosas are crafted using traditional family recipes passed down through generations, maintaining the true essence of South Indian cuisine.",
      icon: <UtensilsCrossed className="w-8 h-8 text-amber-700" />,
    },
    {
      title: "Artisanal Fermentation Process",
      description:
        "We follow a meticulous 24-hour fermentation process, creating that perfect balance of tanginess and crispiness that defines an authentic dosa.",
      icon: <Coffee className="w-8 h-8 text-amber-700" />,
    },
    {
      title: "Premium Local Ingredients",
      description:
        "We combine locally sourced Canadian ingredients with carefully selected Indian spices to create a unique fusion while maintaining authenticity.",
      icon: <Leaf className="w-8 h-8 text-amber-700" />,
    },
    {
      title: "Diverse Menu Selection",
      description:
        "From classic masala dosa to innovative contemporary variations, we offer a range that caters to both traditional taste buds and modern palates.",
      icon: <Soup className="w-8 h-8 text-amber-700" />,
    },
  ];

  return (
    <main className="relative min-h-screen bg-[#FDF6E9] pt-24 pb-12 px-4 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#4A2512] mb-4 font-serif">
            Why Choose Our Dosas?
          </h1>
          <div className="w-24 h-1 bg-amber-700 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {uniquePoints.map((point, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-amber-100"
            >
              <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110">
                {point.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#4A2512] mb-4 font-serif">
                {point.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {point.description}
              </p>
              <div className="w-12 h-0.5 bg-amber-700/30 mt-6 transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
