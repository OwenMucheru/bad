import React from 'react';

const projects = [
  {
    image: 'rac/IMG_5728.JPG',
    title: 'Mental Health Walk',
    description:
      'Together with other clubs around campus we engaged in a walk to sensitize the surrounding community on the importance of mental health.',
    date: '10th Oct 2024',
    dateColor: 'text-blue-600',
  },
  {
    image: 'rac/IMG_5813.jpg',
    title: 'A Day of Charity',
    description:
      'We organised to visit Ntumbara Secondary School where we helped the students with dignity kits, donated a water tank and helped in the building of a school kitchen in partnership with Waza Dada Foundation.',
    date: '14th Feb 2025',
    dateColor: 'text-green-600',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white rounded-lg overflow-hidden shadow-md card-hover">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className={`text-sm font-medium ${project.dateColor}`}>{project.date}</span>
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
