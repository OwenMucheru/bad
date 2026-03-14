# Rotaract Club of Chuka University

Official website for the Rotaract Club of Chuka University — built with React and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/rotaract-chuka.git
cd rotaract-chuka

# Install dependencies
npm install

# Start the development server
npm start
```

The app will run at `http://localhost:3000`.

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## 📁 Project Structure

```
src/
  components/
    Navbar.jsx        – Sticky navigation with mobile menu
    Hero.jsx          – Landing hero section
    About.jsx         – Club information & mission
    Projects.jsx      – Completed and ongoing projects
    Gallery.jsx       – Photo gallery with lightbox
    Events.jsx        – Upcoming events
    Testimonials.jsx  – Member testimonials
    Contact.jsx       – Contact form & details
    Footer.jsx        – Footer with newsletter
    BackToTop.jsx     – Scroll-to-top button
  App.jsx             – Root component
  index.js            – Entry point
  index.css           – Global styles & animations
public/
  index.html
```

## 📸 Images

Place all images from the `rac/` folder into `public/rac/` so they load correctly.

## 📬 Contact Form Setup

Replace `YOUR_FORM_ID` in `Contact.jsx` with your actual [Formspree](https://formspree.io) form ID.

## 🌐 Deployment

You can deploy this to GitHub Pages, Netlify, or Vercel easily.

### GitHub Pages

```bash
npm install --save gh-pages
# Add to package.json: "homepage": "https://YOUR_USERNAME.github.io/rotaract-chuka"
# Add scripts: "predeploy": "npm run build", "deploy": "gh-pages -d build"
npm run deploy
```

## Built with ❤️ by Rotaract Club of Chuka University
