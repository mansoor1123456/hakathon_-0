import Image from 'next/image'; // Import the Image component from Next.js

export const metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <div className="bg-[#fbebb5] py-16 px-4 lg:px-16 flex flex-col lg:flex-row items-center">
      {/* Text Section */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Rocket Single Seater
        </h1>
        <a
          href="#"
          className="text-black underline text-lg hover:text-gray-700 transition"
        >
          Shop Now
        </a>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
        <Image
          src="/h-1.png" // Path to the image
          alt="Rocket Chair" // Alt text for accessibility
          width={400} // Set image width
          height={400} // Set image height
          className="rounded-lg object-contain"
          priority // Optimizes the image to load faster
        />
      </div>
    </div>
  );
}