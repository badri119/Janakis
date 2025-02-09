import Image from "next/image";

interface MenuCardProps {
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
}

export function MenuCard({
  name,
  description,
  price,
  category,
  image,
}: MenuCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-[#4A2512]">{name}</h3>
        <p className="text-[#8B4513] text-sm mt-1">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-[#4A2512] font-bold">{price}</span>
          <span className="text-sm text-[#8B4513]">{category}</span>
        </div>
      </div>
    </div>
  );
}
