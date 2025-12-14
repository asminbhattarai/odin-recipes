# Odin Recipes

[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PWA](https://img.shields.io/badge/PWA-Enabled-4BC51D.svg)](https://web.dev/progressive-web-apps/)

A collection of Nepali recipes built with HTML, CSS, and vanilla JavaScript. This project was created as part of The Odin Project curriculum to practice basic web development concepts.

## Features

- **Simple & Clean UI**
- **Progressive Web App**: Basic offline support using service workers

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
│   │   ├── recipes.css
│   │   └── reset.css
│   ├── js/
│   │   └── scripts.js
│   ├── images/
│   └── favicon/
├── recipes/
│   ├── chow-mein.html
│   ├── momo.html
│   └── sel-roti.html
├── .gitattributes
├── index.html
├── README.md
├── robots.txt
├── sitemap.xml
└── sw.js
```

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- The Odin Project for project inspiration
- Recipe text and images were sourced from various websites and are used for educational purposes only

---

Made by **Asmin Bhattarai**
