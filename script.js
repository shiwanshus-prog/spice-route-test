// ---- Indian dishes menu data (100% non-vegetarian) ----
// img = keyword(s) used to pull a real food photo; lock keeps the same photo each load.
const dishes = [
  // Kebabs & Starters
  { name: "Chicken Tikka", emoji: "🍢", price: "₹260", cat: "starters", desc: "Char-grilled boneless chicken marinated in yogurt and spices.", tags: ["nonveg", "spicy"], img: "chicken,tikka", lock: 11 },
  { name: "Tandoori Chicken", emoji: "🍗", price: "₹320", cat: "starters", desc: "Half chicken marinated overnight, roasted in the clay tandoor.", tags: ["nonveg", "spicy"], img: "tandoori,chicken", lock: 12 },
  { name: "Mutton Seekh Kebab", emoji: "🥩", price: "₹340", cat: "starters", desc: "Minced mutton skewers grilled with onions and herbs.", tags: ["nonveg"], img: "kebab,meat", lock: 13 },
  { name: "Fish Amritsari", emoji: "🐟", price: "₹300", cat: "starters", desc: "Crisp gram-flour battered fish fried with carom seeds.", tags: ["nonveg"], img: "fried,fish", lock: 14 },
  { name: "Chicken 65", emoji: "🌶️", price: "₹260", cat: "starters", desc: "Fiery deep-fried chicken bites from South India.", tags: ["nonveg", "spicy"], img: "fried,chicken", lock: 15 },

  // Chicken Mains
  { name: "Butter Chicken", emoji: "🍛", price: "₹340", cat: "chicken", desc: "Tandoori chicken in a silky tomato-butter gravy.", tags: ["nonveg"], img: "butter,chicken", lock: 21 },
  { name: "Chicken Tikka Masala", emoji: "🍲", price: "₹330", cat: "chicken", desc: "Grilled chicken simmered in a spiced creamy tomato sauce.", tags: ["nonveg"], img: "chicken,curry", lock: 22 },
  { name: "Kadai Chicken", emoji: "🥘", price: "₹320", cat: "chicken", desc: "Chicken tossed with bell peppers and crushed spices in a wok.", tags: ["nonveg", "spicy"], img: "chicken,masala", lock: 23 },
  { name: "Chicken Chettinad", emoji: "🌶️", price: "₹330", cat: "chicken", desc: "Bold South Indian chicken curry with roasted spices.", tags: ["nonveg", "spicy"], img: "chicken,curry", lock: 24 },
  { name: "Chicken Korma", emoji: "🍛", price: "₹340", cat: "chicken", desc: "Mild, rich chicken curry in a cashew-and-cream gravy.", tags: ["nonveg"], img: "korma,curry", lock: 25 },

  // Mutton & Lamb
  { name: "Mutton Rogan Josh", emoji: "🥩", price: "₹420", cat: "mutton", desc: "Aromatic Kashmiri lamb curry with warm spices.", tags: ["nonveg", "spicy"], img: "mutton,curry", lock: 31 },
  { name: "Mutton Curry", emoji: "🍲", price: "₹400", cat: "mutton", desc: "Slow-cooked mutton in a hearty onion-tomato masala.", tags: ["nonveg", "spicy"], img: "lamb,curry", lock: 32 },
  { name: "Lamb Vindaloo", emoji: "🌶️", price: "₹430", cat: "mutton", desc: "Fiery Goan lamb curry with vinegar and red chillies.", tags: ["nonveg", "spicy"], img: "vindaloo,curry", lock: 33 },
  { name: "Mutton Korma", emoji: "🍛", price: "₹440", cat: "mutton", desc: "Royal mutton braised in a fragrant cashew-yogurt gravy.", tags: ["nonveg"], img: "meat,curry", lock: 34 },

  // Seafood
  { name: "Goan Fish Curry", emoji: "🐟", price: "₹380", cat: "seafood", desc: "Coastal fish in a tangy coconut and tamarind curry.", tags: ["nonveg", "spicy"], img: "fish,curry", lock: 41 },
  { name: "Prawn Masala", emoji: "🦐", price: "₹420", cat: "seafood", desc: "Juicy prawns cooked in a spicy onion-tomato masala.", tags: ["nonveg", "spicy"], img: "prawn,curry", lock: 42 },
  { name: "Tandoori Prawns", emoji: "🍤", price: "₹450", cat: "seafood", desc: "Jumbo prawns marinated and char-grilled in the tandoor.", tags: ["nonveg"], img: "grilled,prawns", lock: 43 },
  { name: "Fish Tikka", emoji: "🐠", price: "₹360", cat: "seafood", desc: "Boneless fish chunks marinated and grilled on skewers.", tags: ["nonveg"], img: "fish,grilled", lock: 44 },

  // Rice & Biryani
  { name: "Chicken Biryani", emoji: "🍚", price: "₹320", cat: "biryani", desc: "Fragrant basmati layered with spiced chicken and saffron.", tags: ["nonveg", "spicy"], img: "chicken,biryani", lock: 51 },
  { name: "Mutton Biryani", emoji: "🥘", price: "₹380", cat: "biryani", desc: "Hyderabadi dum biryani with tender mutton and whole spices.", tags: ["nonveg", "spicy"], img: "mutton,biryani", lock: 52 },
  { name: "Egg Biryani", emoji: "🥚", price: "₹260", cat: "biryani", desc: "Spiced basmati layered with boiled eggs and fried onions.", tags: ["nonveg"], img: "egg,rice", lock: 53 },
  { name: "Prawn Pulao", emoji: "🦐", price: "₹340", cat: "biryani", desc: "Delicate basmati cooked with prawns and gentle spices.", tags: ["nonveg"], img: "prawn,rice", lock: 54 },

  // Egg Specials
  { name: "Egg Curry", emoji: "🍳", price: "₹220", cat: "eggs", desc: "Boiled eggs simmered in a spiced onion-tomato gravy.", tags: ["nonveg", "spicy"], img: "egg,curry", lock: 61 },
  { name: "Egg Bhurji", emoji: "🍳", price: "₹180", cat: "eggs", desc: "Indian-style spiced scrambled eggs with onions and chillies.", tags: ["nonveg", "spicy"], img: "scrambled,eggs", lock: 62 },
  { name: "Anda Masala", emoji: "🥚", price: "₹210", cat: "eggs", desc: "Fried eggs tossed in a thick, robust masala.", tags: ["nonveg", "spicy"], img: "egg,masala", lock: 63 },
];

const grid = document.getElementById("menuGrid");
const filters = document.getElementById("filters");

function tagLabel(tag) {
  if (tag === "nonveg") return '<span class="tag nonveg">● Non-Veg</span>';
  if (tag === "spicy") return '<span class="tag spicy">🌶 Spicy</span>';
  return "";
}

function imageUrl(d) {
  return `https://loremflickr.com/600/400/${d.img}?lock=${d.lock}`;
}

function render(filter = "all") {
  const list = filter === "all" ? dishes : dishes.filter(d => d.cat === filter);
  grid.innerHTML = list.map(d => `
    <article class="card">
      <div class="card-media">
        <img src="${imageUrl(d)}" alt="${d.name}" loading="lazy"
             onerror="this.parentElement.classList.add('no-img'); this.parentElement.dataset.emoji='${d.emoji}'; this.remove();" />
      </div>
      <div class="card-body">
        <div class="card-top">
          <h3>${d.name}</h3>
          <span class="price">${d.price}</span>
        </div>
        <p>${d.desc}</p>
        <div class="tags">${d.tags.map(tagLabel).join("")}</div>
      </div>
    </article>
  `).join("");
}

filters.addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  render(btn.dataset.filter);
});

render();
