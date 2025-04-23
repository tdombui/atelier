import Image from "next/image"
import Navbar from "@/navbar"
import {
  Instagram,
  Youtube,
  Mail, Phone
} from 'lucide-react'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <Navbar />

{/* HERO VIDEO SECTION */}
      <main className="pt-0">
        <section className="relative h-screen w-full overflow-hidden" id="hero">
          <video
            autoPlay
            muted
            loop
            className="absolute inset-0 w-full h-full object-cover z-0"
          >          
          {/* Replace with your hero background video */}
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          {/* HERO TEXT DESCRIPTION */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
            {/* <h1 className="text-5xl font-bold">Welcome to Our Garage</h1>
            <p className="mt-4 text-xl max-w-xl">
              We build, tune, and drive excellence.
            </p> */}
            <a
  href="#services"
  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce z-50"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
</a>
          </div>
        </section>

{/* SERVICES SECTION*/}
<section
  id="services"
  className="scroll-mt-20 min-h-screen w-full bg-white text-black py-24 px-4 lg:px-12 xl:px-16 2xl:px-32"
>
  <div className="text-center mb-16">
    <h2 className="text-3xl font-bold">Our Services</h2>
    <p className="mt-2 text-gray-600">Crafted with precision for performance-driven builds.</p>
  </div>

  <div className="flex flex-col md:flex-row justify-center gap-12">
    {[
      {
        title: 'Customize',
        description: 'Paint correction, PPF, Tint, and more.',
        image: '/services/QtZGU0lQ.jpeg',
      },
      {
        title: 'Dealership',
        description: 'Buy, sell, or consign your vehicle with us.',
        image: '/services/EmnfEx5A.jpeg',
      },
      {
        title: 'Car Maintenance',
        description: 'Routine checks, service, and general inspections to keep your car running smoothly and reliably.', 
        image: '/services/DSC01161.jpg',
      }
    ].map((service, i) => (
      <div
        key={i}
        className="flex flex-col w-full md:w-[500px] lg:w-[550px] xl:w-[600px] bg-white rounded-lg shadow-md overflow-hidden transition hover:shadow-xl"
      >
        <div className="relative h-[350px] w-full">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6 flex flex-col justify-between flex-grow">
          <div>
            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
          <a
            href="/services"
            className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline"
          >
            Learn more →
          </a>
        </div>
      </div>
    ))}
  </div>
  <div className="mt-8 text-center">
  <a
    href="/services"
    className="inline-block text-blue-600 hover:underline text-sm font-medium"
  >
    View Our Services →
  </a>
</div>
</section>

{/* FEATURED CARS SECTION */}
<section id="projects" className="w-full bg-neutral-100 py-24 px-6">
  <div className="w-full  px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24">
    <h2 className="text-3xl text-black font-bold mb-8 text-center">Featured Cars</h2>
    
    <div className="flex overflow-x-auto space-x-6 snap-x snap-mandatory pb-4 scroll-smooth">
      {[
        {
          image: '/projects/DSC01211.jpg',
          title: 'Lamborghini Aventador SVJ',
          subtitle: 'Tint, PPF, ceramic coating, and jeweled black paint.',
        },
        {
          image: '/projects/sto-001.jpg',
          title: 'Lamborghini Huracan STO',
          subtitle: 'Tint, PPF, ceramic coating, and jeweled black paint.',
        },
        {
          image: '/projects/8NHaORhZ.jpeg',
          title: 'Audi RS6 Avant',
          subtitle: 'Tint, PPF, ceramic coating, with a stance sitting on airbags.',
        },
        {
          image: '/projects/PzsPS3cQ.jpeg',
          title: 'Porsche GT2RS',
          subtitle: 'Front splitter. Rear spoiler. Track-ready.',
        },
        {
          image: '/projects/991-GT3-0037.jpg',
          title: 'Porsche 991 GT3',
          subtitle: 'Widebody. BBS. Rear spoiler.', 
        },
        {
          image: '/projects/zoE6MwUl.jpeg',
          title: 'Honda NSX',
          subtitle: 'Imported. Consigned. Stance sitting on airbags',
        }
        ,
        {
          image: '/projects/CYdvbFB8.jpeg',
          title: 'Lamborghini Aventador SV',
          subtitle: 'Widebody, ITBs, and stripped interior.',
        }
      ].map((car, i) => (
        <div
          key={i}
          className="min-w-[300px] sm:min-w-[400px] flex-shrink-0 bg-white rounded-lg shadow-lg overflow-hidden snap-center"
        >
          <div className="relative h-60 w-full">
            <Image
              src={car.image}
              alt={car.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl text-black font-semibold">{car.title}</h3>
            <p className="text-gray-600 text-sm">{car.subtitle}</p>
            <a
              href="/projects"
              className="inline-block mt-2 text-blue-600 text-sm hover:underline"
            >
              View Project →
            </a>
          </div>
        </div>
      ))}
    </div>
    <div className="mt-8 text-center">
  <a
    href="/projects"
    className="inline-block text-blue-600 hover:underline text-sm font-medium"
  >
    View All Projects →
  </a>
</div>
  </div>
</section>

{/* SHOP SECTION */}
<section id="shop" className="w-full bg-white py-24 px-6">
  <div className="max-w-7xl mx-auto text-black">
    <h2 className="text-2xl text-black font-bold mb-8 text-center">Shop Our Store</h2>


    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          title: 'Team Hoodie',
          price: '$65',
          image: '/shop/hoodie.jpg',
          link: 'https://example.com/products/hoodie',
        },
        {
          title: 'Garage T-Shirt',
          price: '$35',
          image: '/shop/tshirt.jpg',
          link: 'https://example.com/products/tshirt',
        },
        {
          title: 'Track Sticker Pack',
          price: '$10',
          image: '/shop/stickers.jpg',
          link: 'https://example.com/products/stickers',
        },
        {
          title: 'Dad Hat',
          price: '$28',
          image: '/shop/hat.jpg',
          link: 'https://example.com/products/hat',
        },
        {
          title: 'Number Plate Frame',
          price: '$20',
          image: '/shop/frame.jpg',
          link: 'https://example.com/products/frame',
        },
        {
          title: 'Garage Banner',
          price: '$45',
          image: '/shop/banner.jpg',
          link: 'https://example.com/products/banner',
        },
        {
          title: 'Detail Spray',
          price: '$18',
          image: '/shop/spray.jpg',
          link: 'https://example.com/products/spray',
        },
        {
          title: 'Build Journal',
          price: '$25',
          image: '/shop/journal.jpg',
          link: 'https://example.com/products/journal',
        }
      ]
      .slice(0, 4) // show 4 by default
      .map((item, i) => (
        <a
          key={i}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-neutral-100 rounded-lg overflow-hidden shadow hover:shadow-lg transition-all"
        >
          <div className="relative h-64 w-full">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.price}</p>
          </div>
          
        </a>
      ))}
    </div>
    <div className="mt-8 text-center">
  <a
    href="/shop"
    className="inline-block text-blue-600 hover:underline text-sm font-medium"
  >
    View All Products →
  </a>
</div>
  </div>
</section>
<section id="contact" className="w-full bg-neutral-100 text-black py-24 px-6">
  <div className="max-w-2xl mx-auto text-center mb-12">
    <h2 className="text-4xl font-bold">Contact Us</h2>
    <p className="text-gray-600 mt-2">      Get in touch about paint protection, PPF, detailing, or exotic car sales.</p>
  </div>

  <form className="max-w-xl mx-auto grid grid-cols-1 gap-6">
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      className="border border-gray-300 rounded px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-black/40"
      required
    />
    <input
      type="email"
      name="email"
      placeholder="Your Email"
      className="border border-gray-300 rounded px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-black/40"
      required
    />
    <textarea
      name="message"
      placeholder="Your Message"
      className="border border-gray-300 rounded px-4 py-3 w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-black/40"
      required
    />
    <button
      type="submit"
      className="bg-black text-white py-3 px-6 rounded hover:bg-gray-800 transition"
    >
      Send Message
    </button>
  </form>
</section>
<footer className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
        
        {/* Brand Info */}
        <div>
                      <Image
                        src="/atelier-type-logo-white-footer.png"
                        alt="Brand Logo"
                        width={144}
                        height={40}
                        className="object-contain mb-4"
                      />
          <p className="text-gray-400">
            SoCal-based shop specializing in PPF, detailing, and exotic car sales.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <a href="/services" className="hover:underline">Services</a>
          <a href="/featured" className="hover:underline">Projects</a>
          <a href="/shop" className="hover:underline">Shop</a>
          <a href="/about" className="hover:underline">About</a> 

        </div>

        {/* Socials with Icons */}
        <div className="flex flex-col gap-3">
          <a
            href="https://instagram.com/ateliermotorsoc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <Instagram size={18} />
            Instagram
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <Youtube size={18} />
            YouTube
          </a>
          <a
            href="mailto:info@ateliergarage.com"
            className="flex items-center gap-2 hover:underline"
          >
            <Mail size={18} />
            info@ateliergarage.com
          </a>
          <a
            className="flex items-center gap-2 hover:underline"
          >
            <Phone size={18} />
            +1 (949) 000-0000
          </a>
        </div>
      </div>

      {/* Legal */}
      <div className="mt-12 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Atelier. All rights reserved. | Terms | Privacy
      </div>
    </footer>


      </main>
    </div>
  )
}
