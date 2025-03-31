import { useState, useEffect } from 'react';
import Image from 'next/image';  // Assuming you're using Next.js Image component

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const banners = [
    { id: 2, imageUrl: '/banner1.jpeg', alt: 'Banner 2' },
    { id: 3, imageUrl: '/banner2.jpeg', alt: 'Banner 3' },
  ];

  // Automatically change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === banners.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full  overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {banners.map((banner) => (
          <div
            key={banner.id}
            className="w-full flex-shrink-0"
          >
            <Image
              src={banner.imageUrl}
              alt={banner.alt}
              className="w-full h-full object-cover"
              layout="responsive" // Make images responsive
              width={1920} // High resolution width
              height={1080} // High resolution height
              quality={100} // Maximize image quality for clarity
            />
          </div>
        ))}
      </div>

      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
      >
        &#10094;
      </button>

      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
