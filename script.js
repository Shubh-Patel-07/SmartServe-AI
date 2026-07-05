const menuItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    category: "Pizza",
    description: "Cheesy pizza with tomato sauce, basil, and a crisp golden base.",
    price: 249,
    type: "Veg",
    spice: "Mild",
    ingredients: "Cheese, basil, tomato, oregano",
    time: "18 min",
    calories: 780,
    bestSeller: true,
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 2,
    name: "Tandoori Paneer Pizza",
    category: "Pizza",
    description: "Indian-style pizza topped with paneer tikka and spicy sauce.",
    price: 299,
    type: "Veg",
    spice: "Hot",
    ingredients: "Paneer, capsicum, onion, cheese",
    time: "22 min",
    calories: 860,
    bestSeller: true,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 3,
    name: "Chicken Supreme Pizza",
    category: "Pizza",
    description: "Loaded pizza with grilled chicken, olives, peppers, and cheese.",
    price: 349,
    type: "Non-Veg",
    spice: "Medium",
    ingredients: "Chicken, olives, onion, mozzarella",
    time: "24 min",
    calories: 910,
    bestSeller: false,
    image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 4,
    name: "Classic Veg Burger",
    category: "Burger",
    description: "Crispy vegetable patty with lettuce, tomato, cheese, and sauce.",
    price: 149,
    type: "Veg",
    spice: "Mild",
    ingredients: "Veg patty, lettuce, tomato, cheese",
    time: "12 min",
    calories: 520,
    bestSeller: false,
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 5,
    name: "Smoky Cheese Burger",
    category: "Burger",
    description: "Juicy burger with smoky sauce, cheese slice, and fresh salad.",
    price: 199,
    type: "Veg",
    spice: "Medium",
    ingredients: "Patty, cheese, lettuce, smoky sauce",
    time: "15 min",
    calories: 650,
    bestSeller: true,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 6,
    name: "Chicken Crunch Burger",
    category: "Burger",
    description: "Crunchy chicken fillet with mayo, lettuce, and soft burger buns.",
    price: 229,
    type: "Non-Veg",
    spice: "Medium",
    ingredients: "Chicken, lettuce, mayo, cheese",
    time: "16 min",
    calories: 700,
    bestSeller: false,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 7,
    name: "Gujarati Thali",
    category: "Gujarati Food",
    description: "Complete meal with dal, sabzi, roti, rice, farsan, pickle, and sweet.",
    price: 229,
    type: "Veg",
    spice: "Mild",
    ingredients: "Dal, roti, rice, sabzi, farsan",
    time: "20 min",
    calories: 820,
    bestSeller: true,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 8,
    name: "Dhokla Plate",
    category: "Gujarati Food",
    description: "Soft steamed dhokla served with green chutney and fried chilies.",
    price: 99,
    type: "Veg",
    spice: "Mild",
    ingredients: "Gram flour, mustard, curry leaves",
    time: "8 min",
    calories: 240,
    bestSeller: false,
    image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 9,
    name: "Thepla with Chunda",
    category: "Gujarati Food",
    description: "Soft methi thepla served with sweet mango chunda and curd.",
    price: 129,
    type: "Veg",
    spice: "Mild",
    ingredients: "Wheat flour, methi, curd, chunda",
    time: "10 min",
    calories: 410,
    bestSeller: false,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 10,
    name: "Masala Chaas",
    category: "Drinks",
    description: "Refreshing spiced buttermilk with roasted cumin and mint.",
    price: 59,
    type: "Veg",
    spice: "Mild",
    ingredients: "Curd, cumin, mint, salt",
    time: "5 min",
    calories: 90,
    bestSeller: true,
    image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 11,
    name: "Fresh Lime Soda",
    category: "Drinks",
    description: "Chilled lime soda with sweet, salty, or mixed flavor.",
    price: 79,
    type: "Veg",
    spice: "None",
    ingredients: "Lime, soda, sugar, salt",
    time: "5 min",
    calories: 120,
    bestSeller: false,
    image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 12,
    name: "Cold Coffee",
    category: "Drinks",
    description: "Creamy cold coffee blended with milk, ice, and chocolate.",
    price: 129,
    type: "Veg",
    spice: "None",
    ingredients: "Coffee, milk, chocolate, ice",
    time: "7 min",
    calories: 260,
    bestSeller: false,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 13,
    name: "Gulab Jamun",
    category: "Desserts",
    description: "Warm soft gulab jamun served with fragrant sugar syrup.",
    price: 89,
    type: "Veg",
    spice: "None",
    ingredients: "Khoya, sugar syrup, cardamom",
    time: "6 min",
    calories: 310,
    bestSeller: true,
    image: "https://images.unsplash.com/photo-1605197183305-6d3e037c9576?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 14,
    name: "Chocolate Brownie",
    category: "Desserts",
    description: "Rich chocolate brownie with a soft center and cocoa finish.",
    price: 149,
    type: "Veg",
    spice: "None",
    ingredients: "Chocolate, flour, butter, cocoa",
    time: "8 min",
    calories: 420,
    bestSeller: false,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 15,
    name: "Fruit Custard",
    category: "Desserts",
    description: "Chilled custard with seasonal fruits and light sweetness.",
    price: 119,
    type: "Veg",
    spice: "None",
    ingredients: "Milk, custard, apple, banana, grapes",
    time: "6 min",
    calories: 250,
    bestSeller: false,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80"
  }
];

const cartKey = "smartserveCart";

function getCart() {
  return JSON.parse(localStorage.getItem(cartKey)) || [];
}

function saveCart(cart) {
  localStorage.setItem(cartKey, JSON.stringify(cart));
  updateCartCount();
}

function formatPrice(price) {
  return `&#8377;${price}`;
}

function updateCartCount() {
  const count = getCart().reduce((total, item) => total + item.quantity, 0);
  document.querySelectorAll(".cart-count").forEach((badge) => {
    badge.textContent = count;
  });
}

function addToCart(id) {
  const item = menuItems.find((dish) => dish.id === Number(id));
  if (!item) return;

  const cart = getCart();
  const existing = cart.find((cartItem) => cartItem.id === item.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }

  saveCart(cart);
  showToast(`${item.name} added to cart`);
}

function showToast(message) {
  const oldToast = document.querySelector(".toast");
  if (oldToast) oldToast.remove();

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add("show"));
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 250);
  }, 1800);
}

function renderMenu() {
  const grid = document.getElementById("menuGrid");
  if (!grid) return;

  const searchInput = document.getElementById("searchInput");
  const emptyMenu = document.getElementById("emptyMenu");
  const activeFilter = document.querySelector(".filter-btn.active");
  const searchText = (searchInput?.value || "").toLowerCase();
  const category = activeFilter?.dataset.category || "All";

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = category === "All" || item.category === category;
    const combinedText = `${item.name} ${item.description} ${item.ingredients}`.toLowerCase();
    return matchesCategory && combinedText.includes(searchText);
  });

  grid.innerHTML = filteredItems.map((item) => `
    <article class="menu-card reveal visible">
      <img src="${item.image}" alt="${item.name}">
      <div class="menu-card-body">
        ${item.bestSeller ? '<span class="badge">Best Seller</span>' : `<span class="badge badge-dark">${item.category}</span>`}
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <div class="menu-meta">
          <span class="${item.type === "Veg" ? "veg" : "non-veg"}">${item.type}</span>
          <span>Spice: ${item.spice}</span>
          <span>Time: ${item.time}</span>
          <span>${item.calories} cal</span>
        </div>
        <p><strong>Ingredients:</strong> ${item.ingredients}</p>
        <div class="menu-card-footer">
          <strong>${formatPrice(item.price)}</strong>
          <button class="btn btn-primary add-cart-btn" type="button" data-id="${item.id}">Add to Cart</button>
        </div>
      </div>
    </article>
  `).join("");

  emptyMenu.style.display = filteredItems.length ? "none" : "block";

  document.querySelectorAll(".add-cart-btn").forEach((button) => {
    button.addEventListener("click", () => addToCart(button.dataset.id));
  });
}

function renderCart() {
  const cartItems = document.getElementById("cartItems");
  if (!cartItems) return;

  const cart = getCart();
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  if (!cart.length) {
    cartItems.innerHTML = `
      <div class="empty-state" style="display:block">
        Your cart is empty. Visit the menu to add delicious dishes.
      </div>
    `;
  } else {
    cartItems.innerHTML = cart.map((item) => `
      <article class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div>
          <h3>${item.name}</h3>
          <p>${item.category} | ${item.type} | ${item.time}</p>
          <div class="qty-control">
            <button class="icon-btn qty-btn" type="button" data-action="decrease" data-id="${item.id}">-</button>
            <strong>${item.quantity}</strong>
            <button class="icon-btn qty-btn" type="button" data-action="increase" data-id="${item.id}">+</button>
          </div>
        </div>
        <div class="cart-item-actions">
          <strong>${formatPrice(item.price * item.quantity)}</strong>
          <button class="icon-btn remove-btn qty-btn" type="button" data-action="remove" data-id="${item.id}">X</button>
        </div>
      </article>
    `).join("");
  }

  document.getElementById("subtotal").innerHTML = formatPrice(subtotal);
  document.getElementById("cartTotal").innerHTML = formatPrice(subtotal);

  document.querySelectorAll(".qty-btn").forEach((button) => {
    button.addEventListener("click", () => updateQuantity(button.dataset.id, button.dataset.action));
  });
}

function updateQuantity(id, action) {
  let cart = getCart();
  const item = cart.find((cartItem) => cartItem.id === Number(id));
  if (!item) return;

  if (action === "increase") item.quantity += 1;
  if (action === "decrease") item.quantity -= 1;
  if (action === "remove" || item.quantity <= 0) {
    cart = cart.filter((cartItem) => cartItem.id !== Number(id));
  }

  saveCart(cart);
  renderCart();
  renderCheckout();
}

function renderCheckout() {
  const checkoutItems = document.getElementById("checkoutItems");
  if (!checkoutItems) return;

  const cart = getCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  checkoutItems.innerHTML = cart.length
    ? cart.map((item) => `
      <div class="checkout-line">
        <span>${item.name} x ${item.quantity}</span>
        <strong>${formatPrice(item.price * item.quantity)}</strong>
      </div>
    `).join("")
    : `<p class="empty-state" style="display:block">No items selected.</p>`;

  document.getElementById("checkoutTotal").innerHTML = formatPrice(total);
}

function setupCheckout() {
  const form = document.getElementById("checkoutForm");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!getCart().length) {
      showToast("Please add items to cart before placing order");
      return;
    }

    const totalTime = estimateTime();
    localStorage.setItem("smartserveEstimate", totalTime);
    localStorage.removeItem(cartKey);
    window.location.href = "success.html";
  });
}

function estimateTime() {
  const cart = getCart();
  if (!cart.length) return "20 - 25 minutes";

  const maxTime = cart.reduce((max, item) => {
    const minutes = Number.parseInt(item.time, 10) || 20;
    return Math.max(max, minutes);
  }, 15);

  return `${maxTime} - ${maxTime + 8} minutes`;
}

function renderSuccess() {
  const successTime = document.getElementById("successTime");
  if (!successTime) return;

  successTime.textContent = localStorage.getItem("smartserveEstimate") || "20 - 25 minutes";
  updateCartCount();
}

function setupNavigation() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");

  function updateHeaderShadow() {
    header?.classList.toggle("scrolled", window.scrollY > 12);
  }

  updateHeaderShadow();
  window.addEventListener("scroll", updateHeaderShadow, { passive: true });

  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setupMenuTools() {
  const searchInput = document.getElementById("searchInput");
  const filters = document.querySelectorAll(".filter-btn");

  searchInput?.addEventListener("input", renderMenu);

  filters.forEach((button) => {
    button.addEventListener("click", () => {
      filters.forEach((filter) => filter.classList.remove("active"));
      button.classList.add("active");
      renderMenu();
    });
  });
}

function setupRevealAnimations() {
  const elements = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  elements.forEach((element, index) => {
    element.style.setProperty("--reveal-delay", `${Math.min(index * 45, 280)}ms`);
    observer.observe(element);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  setupNavigation();
  setupMenuTools();
  setupRevealAnimations();
  renderMenu();
  renderCart();
  renderCheckout();
  renderSuccess();
  setupCheckout();
});
