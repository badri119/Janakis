import { TeamMember } from "@/components/TeamMember";

export default function Team() {
  const teamMembers = [
    {
      name: "Janaki Kannan",
      role: "Owner & Head Chef",
      description: "She loves to cook and eat",
      image: "/janaki.jpg",
    },
  ];

  return (
    <main className="flex-1 bg-[#FAF3E8] pt-24 pb-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4A2512] text-center mb-8">
          Our Team
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </main>
  );
}
