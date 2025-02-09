import { TeamMember } from "@/components/TeamMember";
import Navbar from "@/components/Navbar";

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
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FAF3E8] pt-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#4A2512] text-center mb-8">
            Our Team
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
