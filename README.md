# Odin Recipes

[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PWA](https://img.shields.io/badge/PWA-Enabled-4BC51D.svg)](https://web.dev/progressive-web-apps/)

A collection of Nepali recipes built with HTML, CSS, and vanilla JavaScript. This project was created as part of The Odin Project curriculum to practice basic web development concepts.

## Features

- **Modern HTML5 Semantic Structure**
- **Progressive Web App**: Service worker with offline caching
- **Performance Optimized**: Minified CSS/JS, optimized images
- **SEO Enhanced**: Open Graph, Twitter Cards, structured data
- **Responsive Design**: Mobile-first approach
- **Accessibility**: ARIA labels, semantic markup
- **Image Optimization**: AVIF format with PNG fallbacks

## Performance Optimizations

- **Images**: AVIF format with PNG fallbacks using `<picture>` elements
- **CSS**: Minified using PostCSS + cssnano
- **JavaScript**: Minified using Terser
- **Service Worker**: Optimized caching strategy
- **Loading**: Lazy loading for images

## Recipes Included

- **Momo**: Traditional Nepali dumplings
- **Sel Roti**: Nepali rice doughnut
- **Chow Mein**: Stir-fried noodles with vegetables

## Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- (Optional) Local web server for development

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/asminbhattarai/odin-recipes.git
   cd odin-recipes
   ```

2. Open `index.html` in your browser or use a local server:

   ```bash
   # Using Python's built-in server
   python3 -m http.server 5500 --bind localhost
   ```

   Then visit `http://localhost:5500` in your browser.

## Project Structure

```
odin-recipes/
├── assets/
│   ├── css/
│   │   ├── index.css
│   │   ├── index.min.css
│   │   ├── recipes.css
│   │   ├── recipes.min.css
│   │   ├── reset.css
│   │   └── reset.min.css
│   ├── js/
│   │   ├── scripts.js
│   │   └── scripts.min.js
│   ├── images/
│   │   ├── sel-roti/
│   │   │   ├── sel-roti.avif
│   │   │   └── sel-roti.png
│   │   ├── momo/
│   │   │   ├── momo.avif
│   │   │   └── momo.png
│   │   ├── chow-mein/
│   │   │   ├── chow-mein.avif
│   │   │   └── chow-mein.png
│   │   └── social/
│   │       └── preview.png
│   └── favicon/
│       ├── favicon.ico
│       ├── apple-touch-icon.png
│       ├── favicon.svg
│       ├── site.webmanifest
│       ├── web-app-manifest-192x192.png
│       └── web-app-manifest-512x512.png
├── recipes/
│   ├── chow-mein.html
│   ├── momo.html
│   └── sel-roti.html
├── .gitattributes
├── index.html
├── README.md
├── robots.txt
├── sitemap.xml
├── sw.js
└── sw.min.js
```

## Technical Stack

- **HTML5**: Semantic markup with proper structure
- **CSS3**: Modern features with CSS variables
- **Vanilla JavaScript**: ES6+ features, no frameworks
- **Service Worker**: Offline-first caching strategy
- **Image Format**: AVIF with progressive enhancement

## SEO & Metadata

- **Open Graph**: Facebook/social sharing optimization
- **Twitter Cards**: Twitter sharing optimization
- **Structured Data**: Schema.org WebSite + Recipe markup
- **Meta Tags**: Proper description and keywords
- **Canonical URLs**: SEO-friendly linking

## Browser Support

- **Modern Browsers**: Full feature support
- **Mobile Responsive**: Optimized for all devices

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- The Odin Project for project inspiration and curriculum guidance
- Recipe content and images are used for educational purposes only
- Performance optimization techniques from modern web development best practices

---

Made by **Asmin Bhattarai**
