'use client'

import Navbarsite from '@/navbarsite'
import Image from 'next/image'

const services = [
  {
    title: 'Paint Protection Film',
    image: '/services/ppf.jpg',
  },
  {
    title: 'Ceramic Coating',
    image: '/services/ceramic.jpg',
  },
  {
    title: 'Window Tinting',
    image: '/services/tint.jpg',
  },
  {
    title: 'Detailing',
    image: '/services/detailing.jpg',
  },
  {
    title: 'Exotic Car Sales',
    image: '/services/sales.jpg',
  },
  {
    title: 'Vehicle Consignment',
    image: '/services/consign.jpg',
  },
  {
    title: 'Track Prep',
    image: '/services/track.jpg',
  },
  {
    title: 'Performance Upgrades',
    image: '/services/performance.jpg',
  },
  {
    title: 'Maintenance',
    image: '/services/performance.jpg',
  },
]

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-white text-black">
      <Navbarsite />

      <main className="pt-32 px-6 pb-24">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h1 className="text-6xl font-bold tracking-tight">Services</h1>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            From protection to performance — explore our core services offered at Atelier.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 max-w-7xl mx-auto">
          {services.map((service, i) => (
            <div key={i} className="group relative aspect-square overflow-hidden bg-neutral-100 hover:shadow-xl transition-all duration-300">
            <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-4 z-10">
                <h3 className="text-white text-lg font-semibold">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
