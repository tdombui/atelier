'use client'

import Navbarsite from '@/navbarsite'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-white text-black">
      <Navbarsite />

      <main className="pt-32 px-6 pb-24">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold tracking-tight">About Atelier</h1>
          <p className="text-gray-600 mt-4">
            Atelier Motors is more than just a shop — it&#39;s a space built by enthusiasts, for enthusiasts.
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
      </main>
    </div>
  )
}
