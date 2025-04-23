'use client'

import { Instagram, Youtube, Mail, Phone } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
        
        {/* Brand Info */}
        <div>
          <Image
            src="/atelier-type-logo-white-footer.png"
            alt="Brand Logo"
            width={144}
            height={40}
            className="object-contain cursor-pointer mb-4"
          />
          <p className="text-gray-400">
            SoCal-based shop specializing in PPF, detailing, and exotic car sales.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <a href="/services" className="hover:underline">Services</a>
          <a href="/projects" className="hover:underline">Projects</a>
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
            @ateliermotorsoc
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
            href="mailto:info@ateliergarage.com"
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
  )
}
