import Link from 'next/link';
import Image from 'next/image'; // Import Next.js Image component
import React from 'react';

export const metadata = {
  title: "About",
};

const page = () => {
  return (
    <div>
      {/* Top Picks Section */}
      <section className="py-16 px-4 sm:px-8 lg:px-16">
        <h2 className="text-3xl font-bold mb-8 text-center lg:text-left">
          Top Picks For You
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="border rounded-lg p-4 text-center">
            <Image
              src="/h-2.png"
              alt="Side Table"
              width={400} // Add width
              height={400} // Add height
              className="h-40 w-full object-cover mb-4 rounded"
            />
            <h3 className="text-lg font-medium">Side Table</h3>
            <p className="text-gray-600">Rs. 25,000.00</p>
          </div>
          <div className="border rounded-lg p-4 text-center">
            <Image
              src="/h-8.png"
              alt="Sofa"
              width={400} // Add width
              height={400} // Add height
              className="h-40 w-full object-cover mb-4 rounded"
            />
            <h3 className="text-lg font-medium">Asgaard Sofa</h3>
            <p className="text-gray-600">Rs. 250,000.00</p>
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section className="py-16 px-4 sm:px-8 lg:px-16 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Blogs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="border rounded-lg p-4">
            <Image
              src="/h-9.jpg"
              alt="Blog 1"
              width={400} // Add width
              height={400} // Add height
              className="h-40 w-full object-cover mb-4 rounded"
            />
            <h3 className="text-lg font-medium">
              Going all-in with millennial design
            </h3>
            <p className="text-gray-500 text-sm">12th Oct 2022</p>
            <Link
              href="#"
              className="text-blue-600 underline mt-2 block hover:text-blue-800"
            >
              Read More
            </Link>
          </div>
          <div className="border rounded-lg p-4">
            <Image
              src="/h-10.jpg"
              alt="Blog 2"
              width={400} // Add width
              height={400} // Add height
              className="h-40 w-full object-cover mb-4 rounded"
            />
            <h3 className="text-lg font-medium">
              Modern furniture trends 2023
            </h3>
            <p className="text-gray-500 text-sm">15th Oct 2022</p>
            <Link
              href="#"
              className="text-blue-600 underline mt-2 block hover:text-blue-800"
            >
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Instagram</h2>
        <p className="text-gray-600 mb-6">Follow our store on Instagram</p>
        <button className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800">
          Follow Us
        </button>
      </section>
    </div>
  );
};

export default page;