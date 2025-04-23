import Navbarsite from '@/navbarsite'
import Image from 'next/image'

const products = [
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
  },
]

export default function ShopPage() {
  return (
    <div className="relative min-h-screen bg-white text-black">
      <Navbarsite />
      <main className="pt-32 px-6 pb-24">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h1 className="text-6xl font-bold">Shop</h1>
          <p className="text-gray-600 mt-4">Shop our merch and car parts.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {products.map((item, i) => (
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
      </main>
    </div>
  )
}
