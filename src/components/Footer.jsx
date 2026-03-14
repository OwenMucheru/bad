import React, { useState } from 'react';

const quickLinks = ['home', 'about', 'projects', 'gallery', 'contact'];
const projectLinks = ['Community Health', 'Environmental Care', 'Youth Empowerment', 'Literacy Programs'];
const socials = ['fa-facebook-f', 'fa-twitter', 'fa-instagram', 'fa-linkedin-in'];

export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Rotaract Chuka</h3>
            <p className="text-gray-400">Service Above Self. Making a difference in our community and beyond.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link}`} className="text-gray-400 hover:text-white transition duration-300 capitalize">
                    {link === 'home' ? 'Home' : link.charAt(0).toUpperCase() + link.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Our Projects</h4>
            <ul className="space-y-2">
              {projectLinks.map((p) => (
                <li key={p}>
                  <a href="#" className="text-gray-400 hover:text-white transition duration-300">{p}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates on our activities.</p>
            <form
              className="flex"
              onSubmit={(e) => { e.preventDefault(); alert('Subscribed! Thank you.'); setEmail(''); }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="px-4 py-2 w-full rounded-l-lg focus:outline-none text-gray-800"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg transition duration-300"
              >
                <i className="fas fa-paper-plane" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Rotaract Club of Chuka University. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {socials.map((icon) => (
              <a key={icon} href="#" className="text-gray-400 hover:text-white transition duration-300">
                <i className={`fab ${icon}`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
