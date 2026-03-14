import React, { useState } from 'react';

const images = [
  { src: 'rac/DSC_0049.jpg', alt: 'Gallery 1' },
  { src: 'rac/DSC_0052.JPG', alt: 'Gallery 2' },
  { src: 'rac/DSC_0079.JPG', alt: 'Gallery 3' },
  { src: 'rac/DSC_0045.jpg', alt: 'Gallery 4' },
  { src: 'rac/DSC_0385.jpg', alt: 'Gallery 5' },
  { src: 'rac/DSC_0268.jpg', alt: 'Gallery 6' },
  { src: 'rac/DSCN0460.jpg', alt: 'Gallery 7' },
  { src: 'rac/DSCN0608.jpg', alt: 'Gallery 8' },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Gallery</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-lg shadow-md cursor-pointer"
              onClick={() => setLightbox(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-48 object-cover hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
          >
            View More Photos
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-4xl w-full">
            <img src={lightbox.src} alt={lightbox.alt} className="w-full rounded-lg shadow-2xl" />
            <button
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center text-xl hover:bg-opacity-80"
              onClick={() => setLightbox(null)}
            >
              <i className="fas fa-times" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
