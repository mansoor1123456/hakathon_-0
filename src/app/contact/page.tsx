import React from 'react';
import Image from 'next/image'; // Import Next.js Image component

export const metadata = {
  title: "Contact",
};

const Page = () => {
  return (
    <div className="font-sans">
      {/* Header Section */}
      <header className="relative h-48 bg-gray-100 flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/shop.jpg"
            alt="Side Table"
            layout="fill" // Automatically adjusts the image to fill the container
            objectFit="cover" // Ensures the image covers the entire area
          />
        </div>
        <h1 className="text-3xl font-bold z-10 text-black">Contact</h1>
      </header>

      {/* Breadcrumb */}
      <div className="text-center mt-4">
        <p className="text-sm text-gray-600">
          Home {">"} <span className="text-black">Contact</span>
        </p>
      </div>

      {/* Main Content Section */}
      <section className="max-w-6xl mx-auto p-4 sm:p-8 lg:p-16 grid md:grid-cols-2 gap-12 mt-10">
        {/* Contact Information */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Get In Touch With Us</h2>
          <p className="text-gray-500">
            For more information about our product & services, please feel free
            to drop us an email. Our staff will always be there to help you out.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-xl text-gray-700 mr-3">📍</span>
              <p>236 5th SE Avenue, New York NY10000, United States</p>
            </div>
            <div className="flex items-center">
              <span className="text-xl text-gray-700 mr-3">📞</span>
              <p>Mobile: +1 (84) 546-6789</p>
            </div>
            <div className="flex items-center">
              <span className="text-xl text-gray-700 mr-3">⏰</span>
              <p>
                Monday-Friday: 9:00 - 22:00 <br />
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700">Your Name</label>
              <input
                type="text"
                placeholder="Abc"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                placeholder="abc@def.com"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700">Subject</label>
              <input
                type="text"
                placeholder="This is optional"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea
                placeholder="Hi! I’d like to ask about..."
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-100 mt-16 p-6 text-gray-600 text-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto text-center sm:text-left">
          <div>
            <p className="font-bold">Free Delivery</p>
            <p>For all orders over $50.</p>
          </div>
          <div>
            <p className="font-bold">90 Days Return</p>
            <p>If goods have problems.</p>
          </div>
          <div>
            <p className="font-bold">Secure Payment</p>
            <p>100% secure payment.</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>2022 Meubel House. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Page;