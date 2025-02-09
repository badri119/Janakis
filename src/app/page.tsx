export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF3E8]">
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#4A2512] mb-4">
            Welcome to Janaki&apos;s
          </h1>
          <p className="text-xl text-[#8B4513] mb-8">
            Your Culinary Destination for South Indian Delights
          </p>
          <div className="relative w-full max-w-3xl mx-auto aspect-video rounded-lg overflow-hidden">
            {/* Add your hero image here */}
            <div className="absolute inset-0 bg-[#4A2512]/10"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4A2512] text-[#FAF3E8] py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p>123 Dosa Street</p>
              <p>Chennai, Tamil Nadu</p>
              <p>Phone: (123) 456-7890</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Hours</h3>
              <p>Monday - Sunday</p>
              <p>7:00 AM - 10:00 PM</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {/* Add social media icons here */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
