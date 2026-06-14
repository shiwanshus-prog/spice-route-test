# 🌶️ Spice Route — Indian Food Website

A single-page website showcasing a menu of authentic Indian dishes. Built with plain
HTML, CSS, and JavaScript — no frameworks, no build step. Just open `index.html` in a
browser and it works.

---

## 1. What We Are Building

A restaurant-style website for an Indian eatery called **Spice Route**. The site
presents the brand, lets visitors browse a categorized food menu, learn about the
restaurant, and find contact details.

### Goals
- Show a clean, appetizing menu of Indian dishes.
- Let users **filter dishes by category** (Starters, Mains, Breads, etc.).
- Be fully **responsive** (looks good on phone, tablet, and desktop).
- Require **zero setup** — runs by double-clicking a single file.

---

## 2. Project Structure

```
Claude Code folder/
├── index.html     → Page structure & content
├── styles.css     → All styling, layout, animations, responsiveness
├── script.js      → Menu data + category filtering logic
└── PROJECT.md     → This document
```

---

## 3. Page Sections

| Section      | Purpose                                                            |
|--------------|--------------------------------------------------------------------|
| **Navbar**   | Sticky top bar with brand logo and links to each section.          |
| **Hero**     | Full-width banner with headline and "Explore the Menu" button.     |
| **Menu**     | Filterable grid of dish cards — the heart of the site.             |
| **About**    | Restaurant story with stat highlights (years, dishes, guests).     |
| **Contact**  | Location, opening hours, and reservation details.                  |
| **Footer**   | Copyright line.                                                    |

---

## 4. The Menu

Dishes are grouped into **6 categories**, with a total of **23 dishes**.
The menu is **100% non-vegetarian**.

| Category            | Example Dishes                                            |
|---------------------|-----------------------------------------------------------|
| Kebabs & Starters   | Chicken Tikka, Tandoori Chicken, Seekh Kebab, Chicken 65  |
| Chicken             | Butter Chicken, Chicken Tikka Masala, Kadai Chicken       |
| Mutton & Lamb       | Mutton Rogan Josh, Mutton Curry, Lamb Vindaloo            |
| Seafood             | Goan Fish Curry, Prawn Masala, Tandoori Prawns, Fish Tikka|
| Rice & Biryani      | Chicken Biryani, Mutton Biryani, Egg Biryani, Prawn Pulao |
| Egg Specials        | Egg Curry, Egg Bhurji, Anda Masala                        |

Each dish card displays:
- A **real food photo** (with an emoji shown automatically if the image can't load)
- The **dish name**
- A short **description**
- The **price** (in ₹)
- **Tags** — `Non-Veg` 🔴 and/or `Spicy` 🌶

---

## 5. How It Works

- **`script.js`** holds the menu as an array of dish objects.
- On page load, the script renders every dish into the grid.
- Clicking a **filter button** re-renders the grid with only that category's dishes.
- New dishes are added simply by appending an object to the `dishes` array — no HTML
  editing needed.

Example dish object:

```js
{
  name: "Butter Chicken",
  emoji: "🍛",
  price: "₹340",
  cat: "chicken",
  desc: "Tandoori chicken in a silky tomato-butter gravy.",
  tags: ["nonveg"]
}
```

---

## 6. Design

- **Theme:** warm, dark "spice" palette — deep browns with saffron-orange accents.
- **Fonts:** Playfair Display (headings) + Poppins (body), loaded from Google Fonts.
- **Effects:** hover lift on cards, smooth scrolling, fade-in animation, glassy navbar.

---

## 7. How to Run

1. Open the project folder.
2. **Double-click `index.html`** — it opens in your default browser.

No installation, server, or internet connection required (an internet connection only
improves the fonts and hero image).

---

## 8. Possible Next Steps

- [ ] **Search box** to find a dish by name.
- [ ] **Cart / order** feature with a running total.
- [x] Replace emoji with **real food photos**.
- [ ] A **reservation form** that submits.
- [ ] Split menu data into a separate JSON file.
- [ ] Deploy to a free host (GitHub Pages / Netlify).
