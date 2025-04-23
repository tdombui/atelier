'use client'

import Navbarsite from '@/navbarsite'
import Footer from '@/footer'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-white text-black">
      <Navbarsite />

      <main className="pt-32 px-6 pb-24">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold tracking-tight">About Us</h1>
          <p className="text-gray-600 mt-4">
            Atelier Motors is more than just a shop—it&#39;s a space built by enthusiasts, for enthusiasts.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Philosophy</h2>
            <p className="text-gray-700 leading-relaxed">
              We believe in clean work, high craftsmanship, and doing right by every build that rolls through our doors.
              Whether it&#39;s a full PPF wrap, a track-prepped suspension install, or a deep-dive detail—we treat every project
              with the same care and intention we&#39;d give our own cars.
            </p>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Founded by drivers, built by builders. Every bolt, every panel, every mod—with purpose.
            </p>
          </div>

          <div className="relative w-full h-96 rounded-lg overflow-hidden shadow">
            <Image
              src="/about/garage-shot.jpg"
              alt="Inside Atelier Garage"
              fill
              className="object-cover"
            />
          </div>
        </div>
        {/* Contact / Location Section */}
<section className="mt-24 max-w-5xl mx-auto px-4 text-center">
            {/* Contact Form */}
            <section id="contact" className="max-w-3xl mx-auto text-center mb-24">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-8">
            Book a service, request a quote, or just say hey.
          </p>

          <form className="grid grid-cols-1 gap-6 text-left">
            
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              required
              className="border border-gray-300 rounded px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-black/40"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              required
              className="border border-gray-300 rounded px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-black/40"
            />
              {/* Car Model */}
  <input
    type="text"
    name="carModel"
    placeholder="Car Make/Model (e.g. Lamborghini Urus, 991.2 GT3)"
    className="border border-gray-300 rounded px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-black/40"
  />
             {/* Inquiry Type Dropdown */}
             <select
  name="inquiryType"
  required
  className="border border-gray-300 text-gray-500 rounded px-4 py-3 w-full bg-white focus:outline-none focus:ring-2 focus:ring-black/40"
>
  <option value="" disabled selected hidden>
    Select Inquiry Type *
  </option>
    <option value="ppf">Paint Protection Film (PPF)</option>
    <option value="ceramic">Ceramic Coating</option>
    <option value="detailing">Detailing</option>
    <option value="tint">Window Tinting</option>
    <option value="track-prep">Track Prep</option>
    <option value="sales">Exotic Car Sales</option>
    <option value="consignment">Vehicle Consignment</option>
    <option value="general">General Inquiry</option>
  </select>
            <textarea
              name="message"
              placeholder="Your Message *"
              required
              className="border border-gray-300 rounded px-4 py-3 w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-black/40"
            />    {/* Required note */}
            <p className="text-xs text-gray-500 italic">
              * Required fields
            </p>
            <button
              type="submit"
              className="bg-black text-white py-3 px-6 rounded hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
        </section>

  <h2 className="text-3xl font-bold mb-4">Visit Us</h2>
  <p className="text-gray-600 mb-8">
    Come by the shop, talk cars, or book an appointment.
  </p>

  <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46861.03450834531!2d-117.91714765028078!3d33.70158755759402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd8b23c0d73a9%3A0x738311e8d538f5db!2s3122%20W%20Alpine%20St%2C%20Santa%20Ana%2C%20CA%2092704!5e0!3m2!1sen!2sus!4v1745374787304!5m2!1sen!2sus"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</section>
      </main>
      <Footer />

    </div>
  )
}
