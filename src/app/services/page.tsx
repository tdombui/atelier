'use client'

import Navbarsite from '@/navbarsite'
import Footer from '@/footer'
import Image from 'next/image'

const services = [
  {
    title: 'Paint Protection Film',
    image: '/services/QtZGU0lQ.jpeg',
  },
  {
    title: 'Ceramic Coating',
    image: '/services/defender-0019.jpg',
  },
  {
    title: 'Window Tinting',
    image: '/services/rs6-0019.jpg',
  },
  {
    title: 'Detailing',
    image: '/services/DSC01171.jpg',
  },
  {
    title: 'Exotic Car Sales',
    image: '/services/EmnfEx5A.jpeg',
  },
  {
    title: 'Vehicle Consignment',
    image: '/services/nsx-0025.jpg',
  },
  {
    title: 'Track Prep',
    image: '/services/991-GT3-008.jpg',
  },
  {
    title: 'Performance Upgrades',
    image: '/services/DSC01169.jpg',
  },
  {
    title: 'Maintenance',
    image: '/services/nsx-007.jpg',
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
              <div className="absolute inset-0  bg-opacity-30 group-hover:bg-opacity-50 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-4 z-10">
                <h3 className="text-white text-lg font-semibold">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />

    </div>
  )
}
