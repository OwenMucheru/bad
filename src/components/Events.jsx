import React from 'react';

const events = [
  {
    title: 'Sunshine Rally',
    description: 'Details coming soon...',
    date: '21st Mar 2026',
  },
];

export default function Events() {
  return (
    <section id="events" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Upcoming Events</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.title}
              className="bg-white rounded-lg shadow-md p-6 card-hover border-l-4 border-blue-600"
            >
              <div className="text-blue-600 text-sm font-semibold mb-2">
                <i className="fas fa-calendar-alt mr-2" />
                {event.date}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
              <p className="text-gray-600">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
