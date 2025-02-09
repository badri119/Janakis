import Image from "next/image";

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  image: string;
}

export function TeamMember({
  name,
  role,
  description,
  image,
}: TeamMemberProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-64">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-[#4A2512]">{name}</h3>
        <p className="text-[#8B4513] font-medium">{role}</p>
        <p className="text-gray-600 mt-2 text-sm">{description}</p>
      </div>
    </div>
  );
}
