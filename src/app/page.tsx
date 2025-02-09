export default function Home() {
  return (
    <main className="flex-1 bg-[#FAF3E8]">
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#4A2512] mb-4">
            Welcome to Janaki&apos;s
          </h1>
          <p className="text-lg md:text-xl text-[#8B4513] mb-8">
            Your Culinary Destination for South Indian Delights
          </p>
          <div className="relative w-full max-w-3xl mx-auto aspect-video rounded-lg overflow-hidden">
            {/* Add your hero image here */}
            <div className="absolute inset-0 bg-[#4A2512]/10"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
