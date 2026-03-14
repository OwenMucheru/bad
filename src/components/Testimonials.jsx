import React from 'react';

const testimonials = [
  {
    name: 'Victor Omwamii',
    role: 'President 2024–2025',
    image: 'rac/Pasted image.png',
    quote:
      'Being part of Rotaract Chuka has transformed my leadership skills and allowed me to make a real impact in our community. The friendships and experiences are invaluable.',
    stars: 5,
  },
  {
    name: 'Lucy',
    role: 'Member',
    image: 'rac/Pasted image (2).png',
    quote:
      'The projects we\'ve implemented have not only helped others but have helped me grow as a person. Rotaract provides the perfect platform for service and personal development.',
    stars: 5,
  },
  {
    name: 'Rich Uncle',
    role: 'Club Service Director',
    image: 'rac/Pasted image (3).png',
    quote:
      'Joining Rotaract was the best decision I made at Chuka University. The mentorship, networking opportunities, and chance to serve have enriched my university experience.',
    stars: 4.5,
  },
];

function Stars({ count }) {
  return (
    <div className="mt-4 text-yellow-400">
      {[1, 2, 3, 4, 5].map((n) => (
        <i
          key={n}
          className={`fas ${n <= Math.floor(count) ? 'fa-star' : count % 1 && n === Math.ceil(count) ? 'fa-star-half-alt' : 'fa-star text-gray-200'}`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">What Members Say</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-gray-50 p-8 rounded-lg shadow-sm card-hover">
              <div className="flex items-center mb-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover mr-4" />
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <p className="text-gray-600 text-sm">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{t.quote}"</p>
              <Stars count={t.stars} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
