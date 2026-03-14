import React, { useState } from 'react';

const socials = [
  { icon: 'fa-facebook-f', href: '#' },
  { icon: 'fa-twitter', href: '#' },
  { icon: 'fa-instagram', href: '#' },
  { icon: 'fa-tiktok', href: '#' },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-white mx-auto" />
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Info side */}
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h3 className="text-2xl font-bold mb-6">Join Rotaract Chuka</h3>
            <p className="mb-8 text-blue-100">
              We welcome students from all faculties who are passionate about service, leadership, and making a difference.
              Fill out the form or contact us directly to learn more about membership.
            </p>

            <div className="space-y-4">
              {[
                { icon: 'fa-map-marker-alt', title: 'Location', text: 'Chuka University, Tharaka Nithi County' },
                { icon: 'fa-envelope', title: 'Email', text: 'racchukauni@gmail.com' },
                { icon: 'fa-phone-alt', title: 'Phone', text: '+254 712 345 678' },
              ].map(({ icon, title, text }) => (
                <div key={title} className="flex items-start">
                  <div className="text-blue-300 mr-4 mt-1">
                    <i className={`fas ${icon}`} />
                  </div>
                  <div>
                    <h4 className="font-bold">{title}</h4>
                    <p className="text-blue-100">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socials.map(({ icon, href }) => (
                  <a
                    key={icon}
                    href={href}
                    className="bg-blue-700 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition duration-300"
                  >
                    <i className={`fab ${icon}`} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form side */}
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="bg-white text-gray-800 p-8 rounded-lg shadow-lg">
              {[
                { id: 'name', label: 'Full Name', type: 'text' },
                { id: 'email', label: 'Email Address', type: 'email' },
                { id: 'phone', label: 'Phone Number', type: 'tel' },
              ].map(({ id, label, type }) => (
                <div key={id} className="mb-6">
                  <label htmlFor={id} className="block text-gray-700 font-medium mb-2">{label}</label>
                  <input
                    type={type}
                    id={id}
                    name={id}
                    value={formData[id]}
                    onChange={handleChange}
                    required={id !== 'phone'}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              ))}

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 disabled:opacity-60"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="mt-4 text-green-600 font-medium text-center">Message sent! We'll get back to you soon.</p>
              )}
              {status === 'error' && (
                <p className="mt-4 text-red-500 font-medium text-center">Something went wrong. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
