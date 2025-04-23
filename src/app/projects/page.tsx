'use client'

import Navbarsite from '@/navbarsite'
import Image from 'next/image'

const projects = [
  {
    title: 'Audi RS6 Avant',
    description: 'Full PPF, ceramic coating, lowered on KW V3s',
    image: '/projects/rs6.jpg',
  },
  {
    title: 'Nissan GT-R R35',
    description: 'Stage 2 build with track alignment and custom aero',
    image: '/projects/gtr.jpg',
  },
  {
    title: 'Porsche Cayman GT4',
    description: 'PPF, alignment, and roll bar install for track days',
    image: '/projects/gt4.jpg',
  },
  {
    title: 'Ferrari F430',
    description: 'Concours-level detail and paint restoration',
    image: '/projects/f430.jpg',
  },
  {
    title: 'Toyota Supra A90',
    description: 'Full bolt-ons, titanium exhaust, forged wheels',
    image: '/projects/supra.jpg',
  },
  {
    title: 'BMW E92 M3',
    description: 'Track prep, tune, cage, and interior strip-down',
    image: '/projects/e92.jpg',
  },
]

export default function ProjectsPage() {
  return (
    <div className="relative bg-white text-black min-h-screen">
      <Navbarsite />

      <main className="pt-32 px-6 pb-24">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h1 className="text-6xl font-bold tracking-tight">Projects</h1>
          <p className="text-gray-600 mt-4">Explore some of work with our clients.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((car, i) => (
            <div
              key={i}
              className="group relative w-full h-[450px] overflow-hidden"
            >
              <Image
                src={car.image}
                alt={car.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 p-6 z-10">
                <h3 className="text-2xl font-semibold">{car.title}</h3>
                <p className="text-sm text-gray-300">{car.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
