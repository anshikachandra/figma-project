# Pixel-Perfect Responsive Landing Page

A fully responsive, accessible, and high-fidelity frontend layout built exactly to Figma design specifications. This project converts static design templates across desktop, tablet, and mobile views into a living, interactive browser experience using clean, modern standards.

## 🚀 Live Demo
🔗 **[Insert Your Netlify Live URL Here]**

---

## ✨ Features & Project Requirements

### 1. Hero Banner Slider (Exercise 1)
- Implements a seamless sliding banner utilizing **Swiper.js** for touch, drag, and desktop pagination navigation.
- Configured with custom pagination bullets matching the exact design widths and styling of the prototype.

### 2. Product Listing Grid (Exercise 1)
- Built completely mobile-first to adjust fluidly to different screen viewports:
  - **Desktop (>= 1024px):** Exactly 4 columns per row (`462x710` card layout ratios).
  - **Tablet (>= 768px):** 2 to 3 columns per row.
  - **Mobile (< 768px):** Exactly 2 columns per row (`173x276` card layout ratios).
- Semantically organizes the required product details: Image placeholder boxes, Brand Name, Title Heading, Current Price, and Original Strikethrough Price.

### 3. Accessible Tabs-to-Accordion Component (Exercise 2)
- A highly cohesive component that dynamically morphs its entire design footprint layout based on your screen size:
  - **Desktop viewports:** Displays horizontally organized interactive **Tabs**.
  - **Mobile viewports:** Automatically restructures into a stacked, collapsible vertical **Accordion** menu.
- Enforces proper user-experience states: Only one single accordion tab-panel is expanded at any given time.
- Implements modern DOM state syncing using native semantic buttons and accessible properties (`aria-selected`, `aria-expanded`, and `aria-controls`).

---

## 🛠️ Built With

- **HTML5:** Structured semantic markup (`<main>`, `<section>`, `<article>`, `role="tablist"`).
- **CSS3 / Tailwind CSS:** Used for fluid utility layouts, custom component tokens (Teal `#0d5c75` palette), and pixel-perfect spacing patterns.
- **Vanilla ES6 JavaScript:** Custom interactive toggle behavior logic for screen states and responsive component morphing without framework dependencies.
- **Swiper.js:** Lightweight engine for touch-friendly banner navigation slider loops.

---

## 📂 Project Structure

```text
├── index.html          # Main entry layout page with CDN dependencies
├── style.css           # Custom layout overrides and specific swiper design tuning
├── main.js             # Swiper loop initialization & structural layout toggling logic
└── README.md           # Documentation file
