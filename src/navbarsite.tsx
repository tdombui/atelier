'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Navbarsite() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
<header
  className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
    isHomePage && !scrolled ? 'bg-transparent' : 'bg-black shadow-md backdrop-blur'
  }`}
>
      <nav className="relative flex items-center justify-between px-6 py-6 md:py-8 max-w-screen-xl mx-auto">

        {/* Left nav links – DESKTOP ONLY */}
        <div className="hidden md:flex gap-8 flex-1">
          <a href="/about" className="text-white hover:underline">About</a>
          <a href="/services" className="text-white hover:underline">Services</a>
          <a href="/projects" className="text-white hover:underline">Projects</a>
          <a href="/shop" className="text-white hover:underline">Shop</a>
        </div>

        {/* Center logo – always centered */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
  {isHomePage ? (
    <a href="#hero" aria-label="Scroll to top">
      <Image
        src="/atelier-type-logo-white.png"
        alt="Brand Logo"
        width={144}
        height={40}
        className="object-contain cursor-pointer"
      />
    </a>
  ) : (
    <Link href="/" aria-label="Go to homepage">
      <Image
        src="/atelier-type-logo-white.png"
        alt="Brand Logo"
        width={144}
        height={40}
        className="object-contain cursor-pointer"
      />
    </Link>
  )}
</div>

        {/* Right side – CTA or Hamburger */}
        <div className="flex items-center justify-end flex-1">
          {/* DESKTOP CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition"
            >
              Contact Us
            </a>
          </div>

          {/* MOBILE Hamburger */}
          <div className="md:hidden ml-auto">
            <button
              className="text-white z-50"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="md:hidden absolute top-full left-0 w-full bg-black text-white flex flex-col items-center gap-6 py-6 z-40"
          >
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#shop" onClick={() => setMenuOpen(false)}>Shop</a>
            <a
              href="#contact"
              className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
