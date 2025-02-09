import { MenuCard } from "@/components/MenuCard";

export default function Menu() {
  const menuItems = [
    {
      name: "Ghee Roast",
      description: "Crispy dosa made with ghee",
      price: "$10",
      category: "Dosas",
      image: "/masala-dosa.jpg",
    },
    {
      name: "Masala Dosa",
      description: "Dosa with spicy red chutney and potato filling",
      price: "$10",
      category: "Dosas",
      image: "/mysore-dosa.jpg",
    },
    {
      name: "Rava Dosa",
      description: "Crispy semolina dosa with onions and spices",
      price: "$10",
      category: "Dosas",
      image: "/rava-dosa.jpg",
    },
    // Add more items as needed
  ];

  return (
    <main className="min-h-screen bg-[#FAF3E8] pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#4A2512] text-center mb-8">
          Our Menu
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <MenuCard key={index} {...item} />
          ))}
        </div>
      </div>
    </main>
  );
}
