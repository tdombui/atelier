'use client'

import Navbarsite from '@/navbarsite'
import Footer from '@/footer'
import Image from 'next/image'

const projects = [
  {
    title: 'Audi RS6 Avant',
    description: 'Full PPF, ceramic coating, lowered on KW V3s',
    image: '/projects/8NHaORhZ.jpeg',
  },
  {
    title: 'Porsche 991 GT3',
    description: 'Full bolt-ons, titanium exhaust, forged wheels',
    image: '/projects/991-GT3-0037.jpg',
  },
  {
    title: 'Porsche GT2RS',
    description: 'Full bolt-ons, titanium exhaust, forged wheels',
    image: '/projects/gt2rs-0039.jpg',
  },

  {
    title: 'Honda NSX',
    description: 'PPF, alignment, and roll bar install for track days',
    image: '/projects/zoE6MwUl.jpeg',
  },
  {
    title: 'Lamborghini Aventador SVJ',
    description: 'Stage 2 build with track alignment and custom aero',
    image: '/projects/DSC01211.jpg',
  },

  {
    title: 'Lamborghini Huracan STO',
    description: 'Concours-level detail and paint restoration',
    image: '/projects/sto-009.jpg',
  },

  {
    title: 'Rolls Royce Ghost',
    description: 'Full bolt-ons, titanium exhaust, forged wheels',
    image: '/projects/ghost-33.jpg',
  },

  {
    title: 'Porsche 992 Carrera T',
    description: 'Track prep, tune, cage, and interior strip-down',
    image: '/projects/porsche-992-carrera-t-2.jpg',
  },
  {
    title: 'Land Rover Defender',
    description: 'Track prep, tune, cage, and interior strip-down',
    image: '/projects/defender-0031.jpg',
  },
  {
    title: 'Porsche Cayenne',
    description: 'Track prep, tune, cage, and interior strip-down',
    image: '/projects/cayenne-0017.jpg',
  },
]

export default function ProjectsPage() {
  return (
    <div className="relative bg-white text-black min-h-screen">
      <Navbarsite />

      <main className="pt-32 px-6 pb-24">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h1 className="text-6xl font-bold tracking-tight">Projects</h1>
          <p className="text-gray-600 mt-4">Explore some of our work for our clients.</p>
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
              <div className="absolute inset-0 bg-gray-200 bg-opacity-40 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 p-6 z-10">
                <h3 className="text-2xl font-semibold">{car.title}</h3>
                <p className="text-sm text-gray-600">{car.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />

    </div>
  )
}
