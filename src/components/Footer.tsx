export function Footer() {
  return (
    <footer className="bg-[#4A2512] text-[#FAF3E8] py-8 mt-auto">
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
  );
}
