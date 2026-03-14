import React from 'react';

const pillars = [
  { icon: 'fa-hands-helping', label: 'Community Service' },
  { icon: 'fa-globe', label: 'International Focus' },
  { icon: 'fa-graduation-cap', label: 'Leadership Development' },
  { icon: 'fa-users', label: 'Networking' },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">About Rotaract Club of Chuka University</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto" />
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <img
              src="rac/WhatsApp Image 2024-10-15 at 21.40.18.jpeg"
              alt="About Rotaract"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Who We Are</h3>
            <p className="text-gray-600 mb-6">
              The Rotaract Club of Chuka University is a community of young leaders who are passionate about creating positive
              change through service projects, professional development, and international understanding.
            </p>

            <div className="mb-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Our Mission</h4>
              <p className="text-gray-600">
                To provide opportunities for young adults to enhance their knowledge and skills that will assist them in personal
                development, to address the physical and social needs of their communities, and to promote better relations
                between all people worldwide through a framework of friendship and service.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {pillars.map(({ icon, label }) => (
                <div key={label} className="bg-white p-4 rounded-lg shadow-sm card-hover">
                  <div className="text-blue-600 mb-2">
                    <i className={`fas ${icon} text-3xl`} />
                  </div>
                  <h5 className="font-semibold">{label}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
