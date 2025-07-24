// app.js - ViMeal with proper food images, takeaway/delivery options, and purple-yellow-white theme

// ==========================
// Initial Data (Restaurants & Menu) - Updated with proper food images
// ==========================
const restaurants = [
  {
    id: 1,
    name: "Domino's Pizza",
    rating: 4.7,
    reviewCount: "1K+",
    category: "Pizza",
    deliveryFee: "8.000₫",
    originalDeliveryFee: "20.000₫",
    deliveryTime: "30 phút",
    discount: "Giảm 20.000₫",
    isAd: true,
    image: "https://pplx-res.cloudinary.com/image/upload/v1753346386/pplx_project_search_images/97adad2c7e2676eb22a4c9fe6fbeb1b3fcae8134.jpg",
    menuItems: [
      {
        name: "Pizza Phô Mai Núi Lửa",
        price: "299.000₫",
        description: "Pizza phô mai đặc biệt với núi lửa phô mai",
        image: "https://pplx-res.cloudinary.com/image/upload/v1753346386/pplx_project_search_images/97adad2c7e2676eb22a4c9fe6fbeb1b3fcae8134.jpg"
      },
      {
        name: "Pizza Margherita",  
        price: "249.000₫",
        description: "Pizza Margherita cổ điển",
        image: "https://pplx-res.cloudinary.com/image/upload/v1753346386/pplx_project_search_images/26b94fa19c5cdc01adeda48c0d89ad06e8649fcc.jpg"
      },
      {
        name: "Pizza Hải Sản",
        price: "179.000₫", 
        description: "Pizza với tôm, mực và nghêu",
        image: "https://pplx-res.cloudinary.com/image/upload/v1753346386/pplx_project_search_images/25a47cffa776c34048ae0858f6ef64b1e94f18fc.jpg"
      },
    ],
  },
  {
    id: 2,
    name: "Popeyes",
    rating: 4.3,
    reviewCount: "2K+",
    category: "Thức ăn nhanh",
    deliveryFee: "Miễn phí 9.000₫",
    deliveryTime: "20 phút",
    discount: "Giảm 44.000₫",
    discountCondition: "Đơn hàng từ 200.000₫",
    image: "https://pplx-res.cloudinary.com/image/upload/v1753346388/pplx_project_search_images/b1c646c601e3629e88de85fb5d41c08dbb896647.jpg",
    menuItems: [
      {
        name: "Gà Rán Giòn",
        price: "89.000₫",
        description: "2 miếng gà rán giòn đậm đà",
        image: "https://pplx-res.cloudinary.com/image/upload/v1753346386/pplx_project_search_images/b39f928a58d2be2d0fab9edcb8725e429ef4bd7a.jpg"
      },
      {
        name: "Combo Gà + Khoai",
        price: "129.000₫",
        description: "Gà rán + khoai tây + nước",
        image: "https://pplx-res.cloudinary.com/image/upload/v1753346388/pplx_project_search_images/b1c646c601e3629e88de85fb5d41c08dbb896647.jpg"
      },
      {
        name: "Gà Cay Louisiana",
        price: "79.000₫",
        description: "Gà rán cay đặc trưng Louisiana",
        image: "https://pplx-res.cloudinary.com/image/upload/v1753346386/pplx_project_search_images/b39f928a58d2be2d0fab9edcb8725e429ef4bd7a.jpg"
      },
    ],
  },
  {
    id: 3,
    name: "Tiệm Bánh Tacos Độc Lạ - Q10",
    rating: 4.7,
    reviewCount: "736",
    category: "Món quốc tế",
    deliveryFee: "Miễn phí 10.000₫",
    deliveryTime: "40 phút",
    discount: "50%",
    image: "https://pplx-res.cloudinary.com/image/upload/v1753346369/pplx_project_search_images/9bc4ecae261ab475d496fde80aec59405b627eae.jpg",
    menuItems: [
      {
        name: "Bánh Tráng Tacos",
        price: "45.000₫",
        description: "Tacos với bánh tráng nướng và thịt bò",
        image: "https://pplx-res.cloudinary.com/image/upload/v1753346369/pplx_project_search_images/9bc4ecae261ab475d496fde80aec59405b627eae.jpg"
      },
      {
        name: "Tacos Độc Lạ",
        price: "55.000₫",
        description: "Tacos đặc biệt với nhiều topping",
        image: "https://pplx-res.cloudinary.com/image/upload/v1753346369/pplx_project_search_images/9bc4ecae261ab475d496fde80aec59405b627eae.jpg"
      },
      {
        name: "Combo 3 Tacos",
        price: "119.000₫",
        description: "3 tacos mix với nước ngọt",
        image: "https://pplx-res.cloudinary.com/image/upload/v1753346369/pplx_project_search_images/9bc4ecae261ab475d496fde80aec59405b627eae.jpg"
      },
    ],
  },
  {
    id: 4,
    name: "Cơm Gà Chik Chik",
    rating: 4.7,
    reviewCount: "58",
    category: "Cơm",
    deliveryFee: "Miễn phí 9.000₫",
    deliveryTime: "25 phút",
    discount: "Giảm 20.000₫",
    discountCondition: "Đơn hàng từ 50.000₫",
    image: "https://pplx-res.cloudinary.com/image/upload/v1750003656/pplx_project_search_images/1ad55fdbca32a8ee37d07cf8ef1402aa41e93ba2.jpg",
    slogan: "GÀ NGON, SỐT ĐỈNH - ĂN LÀ DÍNH",
    menuItems: [
      {
        name: "Cơm Gà Nướng",
        price: "65.000₫",
        description: "Cơm với gà nướng BBQ và rau củ",
        image: "https://pplx-res.cloudinary.com/image/upload/v1750003656/pplx_project_search_images/1ad55fdbca32a8ee37d07cf8ef1402aa41e93ba2.jpg"
      },
      {
        name: "Cơm Gà Chiên Nước Mắm",
        price: "49.000₫",
        description: "Cơm với gà chiên nước mắm đậm đà",
        image: "https://pplx-res.cloudinary.com/image/upload/v1753333193/pplx_project_search_images/75006c3940bb7a811bc405014fd39caf4c8bdb62.jpg"
      },
      {
        name: "Cơm Gà Cà Ri",
        price: "59.000₫",
        description: "Cơm gà cà ri thơm ngon",
        image: "https://pplx-res.cloudinary.com/image/upload/v1750003860/pplx_project_search_images/3141e2ec2b66df78a60f0986179e3211e5e63e71.jpg"
      },
    ],
  },
  {
    id: 5,
    name: "Nem Nướng D'ran",
    rating: 4.8,
    reviewCount: "3K+",
    category: "Lẩu & Nướng",
    deliveryFee: "Miễn phí 9.000₫",
    deliveryTime: "20 phút",
    discount: "Giảm 15.000₫",
    discountCondition: "Đơn hàng từ 50.000₫",
    image: "https://pplx-res.cloudinary.com/image/upload/v1753346369/pplx_project_search_images/b55979db6e6b9f533156affca9ed639f8c19eebe.jpg",
    menuItems: [
      {
        name: "Nem Nướng",
        price: "85.000₫",
        description: "Nem nướng đặc sản Đà Lạt với bánh tráng",
        image: "https://pplx-res.cloudinary.com/image/upload/v1753346369/pplx_project_search_images/b55979db6e6b9f533156affca9ed639f8c19eebe.jpg"
      },
      {
        name: "Bún Nem Nướng",
        price: "95.000₫",
        description: "Bún nem nướng truyền thống",
        image: "https://pplx-res.cloudinary.com/image/upload/v1753346369/pplx_project_search_images/2c7823dde35b854e3b51f4ebe2d8af09a0c688c9.jpg"
      },
      {
        name: "Combo Nướng Mix",
        price: "149.000₫",
        description: "Combo đầy đủ các món nướng",
        image: "https://pplx-res.cloudinary.com/image/upload/v1753346369/pplx_project_search_images/b55979db6e6b9f533156affca9ed639f8c19eebe.jpg"
      },
    ],
  },
  {
    id: 6,
    name: "Tiệm Cơm Chú Đen",
    rating: 4.7,
    reviewCount: "416",
    category: "Cơm",
    deliveryFee: "Miễn phí 11.000₫",
    deliveryTime: "25 phút",
    discount: "Giảm 14.000₫",
    discountCondition: "Đơn hàng từ 40.000₫",
    image: "https://media.discordapp.net/attachments/948752044372676629/1397918283856085002/top-dia-chi-com-ga-xoi-mo-quan-10-lam-nuc-long-thuc-khach-13-min.png?ex=6883785a&is=688226da&hm=40adf7656ab2e71b6bf23f07ac1e33cece8acfcffef27cdf67fdebea76b25735&=&format=webp&quality=lossless",
    menuItems: [
      {
        name: "Cơm Tấm",
        price: "45.000₫",
        description: "Cơm tấm với sườn nướng BBQ",
        image: "https://pplx-res.cloudinary.com/image/upload/v1750003656/pplx_project_search_images/1ad55fdbca32a8ee37d07cf8ef1402aa41e93ba2.jpg"
      },
      {
        name: "Cơm Sườn",
        price: "55.000₫",
        description: "Cơm với sườn nướng và rau sống",
        image: "https://pplx-res.cloudinary.com/image/upload/v1750003656/pplx_project_search_images/1ad55fdbca32a8ee37d07cf8ef1402aa41e93ba2.jpg"
      },
      {
        name: "Cơm Bì Chả",
        price: "42.000₫",
        description: "Cơm tấm bì chả truyền thống",
        image: "https://pplx-res.cloudinary.com/image/upload/v1750003656/pplx_project_search_images/1ad55fdbca32a8ee37d07cf8ef1402aa41e93ba2.jpg"
      },
    ],
  },
  {
    id: 7,
    name: "Bún Đậu Mẹt Gánh",
    rating: 4.6,
    reviewCount: "2K+",
    category: "Bún - Phở",
    deliveryFee: "1.000₫ 13.000₫",
    deliveryTime: "30 phút",
    discount: "Lên đến 12.000₫",
    image: "https://pplx-res.cloudinary.com/image/upload/v1753346369/pplx_project_search_images/dedc96cfbf97c4be0ea4399ec38139286d7b8e61.jpg",
    menuItems: [
      {
        name: "Bún Đậu Hủ",
        price: "40.000₫",
        description: "Bún đậu với đậu hủ và rau thơm",
        image: "https://pplx-res.cloudinary.com/image/upload/v1753346369/pplx_project_search_images/dedc96cfbf97c4be0ea4399ec38139286d7b8e61.jpg"
      },
      {
        name: "Bún Đậu Mắm Tôm",
        price: "49.000₫",
        description: "Bún đậu với mắm tôm đậm đà",
        image: "https://pplx-res.cloudinary.com/image/upload/v1753346369/pplx_project_search_images/064f97539c03fd52b0e2b4068aeaafccdfb9760c.jpg"
      },
      {
        name: "Combo Bún Đậu Đầy Đủ",
        price: "75.000₫",
        description: "Bún đậu đầy đủ topping",
        image: "https://pplx-res.cloudinary.com/image/upload/v1753346369/pplx_project_search_images/064f97539c03fd52b0e2b4068aeaafccdfb9760c.jpg"
      },
    ],
  },
];

// ==========================
// Flash Sale Data - Updated with proper food images
// ==========================
const flashSaleItems = [
  {
    id: "tokbokki-1",
    restaurantId: 3,
    restaurantName: "Quán Ăn Vặt",
    name: "Tokbokki Cay Phô Mai",
    description: "Bánh gạo cay Hàn Quốc với phô mai tan chảy",
    originalPrice: 70000,
    salePrice: 35000,
    image: "https://pplx-res.cloudinary.com/image/upload/v1753346369/pplx_project_search_images/eb08ab3dce1a81696e9e226bb2d4145f71c42b89.jpg",
    endTime: Date.now() + 3600 * 1000, // 1h
  },
  {
    id: "com-ga-2",
    restaurantId: 4,
    restaurantName: "Cơm Gà Chik Chik",
    name: "Cơm Gà Nướng",
    description: "Cơm gà nướng BBQ với rau củ tươi ngon",
    originalPrice: 80000,
    salePrice: 50000,
    image: "https://pplx-res.cloudinary.com/image/upload/v1750003656/pplx_project_search_images/1ad55fdbca32a8ee37d07cf8ef1402aa41e93ba2.jpg",
    endTime: Date.now() + 3600 * 1000, // 1h
  },
  {
    id: "bun-dau-3",
    restaurantId: 7,
    restaurantName: "Bún Đậu Mẹt Gánh",
    name: "Bún Đậu Hủ",
    description: "Bún đậu hủ truyền thống với mắm tôm",
    originalPrice: 50000,
    salePrice: 30000,
    image: "https://pplx-res.cloudinary.com/image/upload/v1753346369/pplx_project_search_images/dedc96cfbf97c4be0ea4399ec38139286d7b8e61.jpg",
    endTime: Date.now() + 3600 * 1000, // 1h
  },
  {
    id: "nem-nuong-4",
    restaurantId: 5,
    restaurantName: "Nem Nướng D'ran",
    name: "Nem Nướng",
    description: "Nem nướng Đà Lạt thơm ngon với bánh tráng",
    originalPrice: 90000,
    salePrice: 60000,
    image: "https://pplx-res.cloudinary.com/image/upload/v1753346369/pplx_project_search_images/b55979db6e6b9f533156affca9ed639f8c19eebe.jpg",
    endTime: Date.now() + 3600 * 1000, // 1h
  },
];

// ==========================
// Categories with icons
// ==========================
const categories = [
  { name: "Cơm", icon: "🍚" },
  { name: "Món quốc tế", icon: "🌍" },
  { name: "Đồ ăn nhẹ", icon: "🍿" },
  { name: "Bún - Phở", icon: "🍜" },
  { name: "Cháo", icon: "🥣" },
  { name: "Cà Phê", icon: "☕" },
  { name: "Sinh Tố", icon: "🥤" }
];

// ==========================
// Helper functions
// ==========================
const parseCurrency = (str) => Number(str.replace(/[^0-9]/g, ""));
const formatCurrency = (num) => num.toLocaleString("vi-VN") + "₫";

const escapeRegExp = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const highlightText = (text, query) => {
  if (!query) return text;
  const safe = escapeRegExp(query);
  const regex = new RegExp(`(${safe})`, "gi");
  return text.replace(regex, '<span class="highlight">$1</span>');
};

const restaurantMatchesSearch = (restaurant, q) => {
  if (restaurant.name.toLowerCase().includes(q)) return true;
  if (restaurant.category && restaurant.category.toLowerCase().includes(q))
    return true;
  return restaurant.menuItems.some((m) => m.name.toLowerCase().includes(q));
};

const flashSaleMatchesSearch = (item, q) => {
  return (
    item.name.toLowerCase().includes(q) ||
    item.description.toLowerCase().includes(q) ||
    item.restaurantName.toLowerCase().includes(q)
  );
};

// ==========================
// Application State
// ==========================
let activeCategory = "all";
let searchQuery = "";
let cart = [];
let selectedRestaurant = null;
let deliveryType = "delivery"; // "delivery" or "takeaway"

// Auth state
let users = [];
let currentUser = null;
let pendingAction = null;

// ==========================
// DOM references
// ==========================
const restaurantsGrid = document.getElementById("restaurantsGrid");
const categoriesList = document.getElementById("categoriesList");
const searchInput = document.getElementById("searchInput");
const brandLink = document.getElementById("brandLink");
const cartBtn = document.getElementById("cartBtn");
const cartCountEl = document.getElementById("cartCount");
const userIconBtn = document.getElementById("userIconBtn");
const userDropdown = document.getElementById("userDropdown");
const logoutBtn = document.getElementById("logoutBtn");
const authModal = document.getElementById("authModal");
const authModalOverlay = document.getElementById("authModalOverlay");
const authModalClose = document.getElementById("authModalClose");
const authTabs = document.querySelectorAll(".auth-tab");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const loginError = document.getElementById("loginError");
const signupError = document.getElementById("signupError");
const restaurantModal = document.getElementById("restaurantModal");
const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");
const modalRestaurantName = document.getElementById("modalRestaurantName");
const modalRating = document.getElementById("modalRating");
const modalReviewCount = document.getElementById("modalReviewCount");
const modalDeliveryFee = document.getElementById("modalDeliveryFee");
const modalDeliveryTime = document.getElementById("modalDeliveryTime");
const menuItemsContainer = document.getElementById("menuItems");
const cartModal = document.getElementById("cartModal");
const cartModalOverlay = document.getElementById("cartModalOverlay");
const cartModalClose = document.getElementById("cartModalClose");
const cartItemsContainer = document.getElementById("cartItems");
const cartSubtotalEl = document.getElementById("cartSubtotal");
const cartDeliveryFeeEl = document.getElementById("cartDeliveryFee");
const cartTotalEl = document.getElementById("cartTotal");
const proceedToOrderBtn = document.getElementById("proceedToOrder");
const orderModal = document.getElementById("orderModal");
const orderModalOverlay = document.getElementById("orderModalOverlay");
const orderModalClose = document.getElementById("orderModalClose");
const orderForm = document.getElementById("orderForm");
const orderItemsContainer = document.getElementById("orderItems");
const orderSubtotalEl = document.getElementById("orderSubtotal");
const orderDeliveryFeeEl = document.getElementById("orderDeliveryFee");
const orderDeliveryLabelEl = document.getElementById("orderDeliveryLabel");
const orderTotalEl = document.getElementById("orderTotal");
const addressGroup = document.getElementById("addressGroup");
const pickupTimeGroup = document.getElementById("pickupTimeGroup");
const deliveryAddress = document.getElementById("deliveryAddress");
const pickupTime = document.getElementById("pickupTime");
const flashSaleGrid = document.getElementById("flashSaleGrid");
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toastMessage");

// ==========================
// Brand link scroll to top
// ==========================
brandLink.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ==========================
// Authentication UI & Logic
// ==========================
function renderAuthState() {
  const greetingClass = "user-greeting";
  let greetingEl = document.querySelector("." + greetingClass);
  
  if (currentUser) {
    const firstName = currentUser.fullName.split(" ").slice(-1)[0];
    if (!greetingEl) {
      greetingEl = document.createElement("span");
      greetingEl.className = greetingClass;
      userIconBtn.parentElement.insertBefore(greetingEl, userIconBtn);
    }
    greetingEl.textContent = `Xin chào, ${firstName}`;
    userDropdown.style.display = "block";
  } else {
    if (greetingEl) greetingEl.remove();
    userDropdown.classList.add("hidden");
  }
}

function openAuthModal(defaultTab = "login") {
  authModal.classList.remove("hidden");
  setAuthTab(defaultTab);
}

function closeAuthModal() {
  authModal.classList.add("hidden");
  loginError.classList.add("hidden");
  signupError.classList.add("hidden");
  loginForm.reset();
  signupForm.reset();
}

function setAuthTab(tab) {
  authTabs.forEach((t) => t.classList.remove("active"));
  loginForm.classList.add("hidden");
  signupForm.classList.add("hidden");
  
  if (tab === "login") {
    document.querySelector('[data-tab="login"]').classList.add("active");
    loginForm.classList.remove("hidden");
  } else {
    document.querySelector('[data-tab="signup"]').classList.add("active");
    signupForm.classList.remove("hidden");
  }
}

authTabs.forEach((tabBtn) => {
  tabBtn.addEventListener("click", () => {
    const chosen = tabBtn.dataset.tab;
    setAuthTab(chosen);
  });
});

userIconBtn.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  
  if (currentUser) {
    userDropdown.classList.toggle("hidden");
  } else {
    openAuthModal("login");
  }
});

authModalOverlay.addEventListener("click", closeAuthModal);
authModalClose.addEventListener("click", closeAuthModal);

logoutBtn.addEventListener("click", () => {
  currentUser = null;
  renderAuthState();
  showToast("Đã đăng xuất");
});

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const fullName = document.getElementById("signupFullName").value.trim();
  const email = document.getElementById("signupEmail").value.trim().toLowerCase();
  const password = document.getElementById("signupPassword").value;
  const confirmPassword = document.getElementById("signupConfirmPassword").value;
  
  signupError.classList.add("hidden");
  
  if (password.length < 6) {
    signupError.textContent = "Mật khẩu tối thiểu 6 ký tự";
    signupError.classList.remove("hidden");
    return;
  }
  
  if (password !== confirmPassword) {
    signupError.textContent = "Mật khẩu không khớp";
    signupError.classList.remove("hidden");
    return;
  }
  
  const exists = users.some((u) => u.email === email);
  if (exists) {
    signupError.textContent = "Email đã tồn tại";
    signupError.classList.remove("hidden");
    return;
  }
  
  const newUser = { fullName, email, password };
  users.push(newUser);
  currentUser = newUser;
  closeAuthModal();
  renderAuthState();
  showToast("Đăng ký thành công!");
  
  if (pendingAction) {
    pendingAction();
    pendingAction = null;
  }
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value.trim().toLowerCase();
  const password = document.getElementById("loginPassword").value;
  
  loginError.classList.add("hidden");
  
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) {
    loginError.textContent = "Email hoặc mật khẩu không đúng";
    loginError.classList.remove("hidden");
    return;
  }
  
  currentUser = user;
  closeAuthModal();
  renderAuthState();
  showToast("Đăng nhập thành công!");
  
  if (pendingAction) {
    pendingAction();
    pendingAction = null;
  }
});

document.addEventListener("click", (e) => {
  if (!userIconBtn.contains(e.target) && !userDropdown.contains(e.target)) {
    userDropdown.classList.add("hidden");
  }
});

// ==========================
// UI Rendering Helpers
// ==========================
function renderCategories() {
  categoriesList.innerHTML = "";
  const unique = new Set(restaurants.map((r) => r.category));
  const categoryItems = ["Tất cả", ...Array.from(unique)];
  categoryItems.forEach((cat) => {
    const btn = document.createElement("button");
    btn.className = "category-btn";
    const value = cat === "Tất cả" ? "all" : cat;
    btn.dataset.category = value;
    
    // Add icon if available
    const categoryData = categories.find(c => c.name === cat);
    const icon = categoryData ? categoryData.icon + " " : "";
    btn.innerHTML = icon + cat;
    
    if (value === activeCategory) btn.classList.add("active");
    categoriesList.appendChild(btn);
  });
}

function renderRestaurants(list) {
  restaurantsGrid.innerHTML = "";
  if (list.length === 0) {
    restaurantsGrid.innerHTML =
      '<div class="empty-state"><div class="empty-state-icon">😔</div>Không tìm thấy nhà hàng phù hợp</div>';
    return;
  }

  list.forEach((r) => {
    const card = document.createElement("div");
    card.className = "restaurant-card";
    card.dataset.id = r.id;
    const nameHtml = highlightText(r.name, searchQuery);
    const catHtml = highlightText(r.category || "", searchQuery);
    card.innerHTML = `
      <div class="restaurant-image">
        <img src="${r.image}" alt="${r.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
        <div style="display:none;width:100%;height:100%;align-items:center;justify-content:center;font-size:2rem;">🍽️</div>
        <span class="discount-badge">${r.discount ?? ""}</span>
      </div>
      <div class="restaurant-info">
        <div class="restaurant-header">
          <h3 class="restaurant-name">${nameHtml}</h3>
        </div>
        <div class="restaurant-rating">
          <span class="rating">⭐ ${r.rating}</span>
          <span class="review-count">(${r.reviewCount})</span>
        </div>
        <div class="restaurant-category">${catHtml}</div>
        <div class="delivery-info">
          <span class="delivery-fee">${r.deliveryFee}</span>
          <span class="delivery-time">${r.deliveryTime}</span>
        </div>
        ${r.slogan ? `<div class="slogan">${r.slogan}</div>` : ""}
        <div class="restaurant-actions">
          <button class="order-btn" data-id="${r.id}">Đặt Ngay</button>
        </div>
      </div>`;
    restaurantsGrid.appendChild(card);
  });
}

function renderFlashSale(list) {
  flashSaleGrid.innerHTML = "";
  list.forEach((item) => {
    const saleCard = document.createElement("div");
    saleCard.className = "flash-sale-item";
    saleCard.dataset.id = item.id;
    const nameHtml = highlightText(item.name, searchQuery);
    const descHtml = highlightText(item.description, searchQuery);
    saleCard.innerHTML = `
      <span class="flash-sale-badge">-${Math.round(100 - (item.salePrice / item.originalPrice) * 100)}%</span>
      <img src="${item.image}" alt="${item.name}" class="flash-sale-image" onerror="this.style.display='none';" />
      <div class="flash-sale-info">
        <div class="flash-sale-name">${nameHtml}</div>
        <div class="flash-sale-description">${descHtml}</div>
        <div class="flash-sale-price">
          <span class="current-price">${formatCurrency(item.salePrice)}</span>
          <span class="original-price">${formatCurrency(item.originalPrice)}</span>
        </div>
        <div class="countdown-timer" data-id="${item.id}">
          <span class="hh">01</span>:<span class="mm">00</span>:<span class="ss">00</span>
        </div>
      </div>`;
    flashSaleGrid.appendChild(saleCard);
  });
  updateCountdown();
}

function renderAdBanner() {
  const banner = document.getElementById("adBanner");
  banner.innerHTML = `
    <div class="container">
      <div class="ad-card">
        <img src="https://pplx-res.cloudinary.com/image/upload/v1753346386/pplx_project_search_images/97adad2c7e2676eb22a4c9fe6fbeb1b3fcae8134.jpg" alt="Domino's Pizza" class="ad-img" />
        <div class="ad-content">
          <h2>Giảm 50% Pizza Phô Mai Núi Lửa hôm nay!</h2>
          <button class="btn btn--primary" id="adCtaBtn">Đặt ngay</button>
        </div>
      </div>
    </div>`;
  document.getElementById("adCtaBtn").addEventListener("click", () => {
    const dominosCard = document.querySelector('.restaurant-card[data-id="1"]');
    if (dominosCard) dominosCard.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

// ==========================
// Filtering Logic
// ==========================
function applyFilters() {
  let filteredRestaurants = restaurants.slice();
  let filteredFlash = flashSaleItems.slice();

  if (activeCategory !== "all") {
    filteredRestaurants = filteredRestaurants.filter(
      (r) => r.category && r.category.toLowerCase() === activeCategory.toLowerCase()
    );
    filteredFlash = filteredFlash.filter((it) => {
      const rest = restaurants.find((r) => r.id === it.restaurantId);
      return rest && rest.category.toLowerCase() === activeCategory.toLowerCase();
    });
  }

  if (searchQuery.trim() !== "") {
    const q = searchQuery.toLowerCase();
    filteredRestaurants = filteredRestaurants.filter((r) => restaurantMatchesSearch(r, q));
    filteredFlash = filteredFlash.filter((it) => flashSaleMatchesSearch(it, q));
  }

  renderRestaurants(filteredRestaurants);
  renderFlashSale(filteredFlash);
}

// ==========================
// Category & Search Event Listeners
// ==========================
categoriesList.addEventListener("click", (e) => {
  const btn = e.target.closest(".category-btn");
  if (!btn) return;
  activeCategory = btn.dataset.category;
  categoriesList.querySelectorAll(".category-btn").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  applyFilters();
});

searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value.trim();
  applyFilters();
});

// ==========================
// Restaurant Modal & Menu logic
// ==========================
restaurantsGrid.addEventListener("click", (e) => {
  const btn = e.target.closest(".order-btn");
  if (btn) {
    e.preventDefault();
    e.stopPropagation();
    const id = Number(btn.dataset.id);
    const restaurant = restaurants.find((r) => r.id === id);
    if (restaurant) {
      openRestaurantModal(restaurant);
    }
  }
});

modalOverlay.addEventListener("click", closeRestaurantModal);
modalClose.addEventListener("click", closeRestaurantModal);

function openRestaurantModal(restaurant) {
  selectedRestaurant = restaurant;
  modalRestaurantName.textContent = restaurant.name;
  modalRating.textContent = `⭐ ${restaurant.rating}`;
  modalReviewCount.textContent = `(${restaurant.reviewCount})`;
  modalDeliveryFee.textContent = restaurant.deliveryFee;
  modalDeliveryTime.textContent = restaurant.deliveryTime;
  renderMenuItems(restaurant);
  restaurantModal.classList.remove("hidden");
}

function closeRestaurantModal() {
  restaurantModal.classList.add("hidden");
  menuItemsContainer.innerHTML = "";
  selectedRestaurant = null;
}

function renderMenuItems(restaurant) {
  menuItemsContainer.innerHTML = "";
  restaurant.menuItems.forEach((item) => {
    const qtyInCart = getItemQuantityInCart(restaurant.id, item.name);
    const menuDiv = document.createElement("div");
    menuDiv.className = "menu-item";
    menuDiv.innerHTML = `
      <div class="menu-item-info">
        <h4>${item.name}</h4>
        <p>${item.description}</p>
        <div class="menu-item-price">${item.price}</div>
      </div>
      <div class="quantity-controls" data-restaurant="${restaurant.id}" data-item="${item.name}" data-price="${parseCurrency(item.price)}">
        <button class="quantity-btn minus">-</button>
        <span class="quantity-display">${qtyInCart}</span>
        <button class="quantity-btn plus">+</button>
      </div>
    `;
    menuItemsContainer.appendChild(menuDiv);
  });
}

menuItemsContainer.addEventListener("click", (e) => {
  const btn = e.target.closest(".quantity-btn");
  if (!btn) return;
  const control = btn.parentElement;
  const restaurantId = Number(control.dataset.restaurant);
  const itemName = control.dataset.item;
  const price = Number(control.dataset.price);
  if (btn.classList.contains("plus")) {
    addToCart(restaurantId, itemName, selectedRestaurant.name, price);
  } else if (btn.classList.contains("minus")) {
    removeFromCart(restaurantId, itemName);
  }
  const newQuantity = getItemQuantityInCart(restaurantId, itemName);
  control.querySelector(".quantity-display").textContent = newQuantity;
});

// ==========================
// Flash Sale click handler
// ==========================
flashSaleGrid.addEventListener("click", (e) => {
  const card = e.target.closest(".flash-sale-item");
  if (!card) return;
  const id = card.dataset.id;
  const item = flashSaleItems.find((it) => it.id === id);
  if (!item) return;
  addToCart(item.restaurantId, item.name, item.restaurantName, item.salePrice);
});

// ==========================
// Cart Functions
// ==========================
function addToCart(restaurantId, itemName, restaurantName, price) {
  const existing = cart.find(
    (i) => i.restaurantId === restaurantId && i.itemName === itemName
  );
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ restaurantId, restaurantName, itemName, price, quantity: 1 });
  }
  showToast("Đã thêm vào giỏ hàng");
  updateCartUI();
}

function removeFromCart(restaurantId, itemName) {
  const idx = cart.findIndex(
    (i) => i.restaurantId === restaurantId && i.itemName === itemName
  );
  if (idx > -1) {
    cart[idx].quantity -= 1;
    if (cart[idx].quantity <= 0) {
      cart.splice(idx, 1);
    }
    updateCartUI();
  }
}

function getItemQuantityInCart(restaurantId, itemName) {
  const existing = cart.find(
    (i) => i.restaurantId === restaurantId && i.itemName === itemName
  );
  return existing ? existing.quantity : 0;
}

function calculateCartSubtotal() {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function calculateDeliveryFee() {
  return deliveryType === "delivery" ? 15000 : 0;
}

function calculateCartTotal() {
  return calculateCartSubtotal() + calculateDeliveryFee();
}

function updateCartUI() {
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCountEl.textContent = totalCount;

  cartItemsContainer.innerHTML = "";
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<div class="empty-state">Giỏ hàng trống</div>';
  } else {
    cart.forEach((item) => {
      const div = document.createElement("div");
      div.className = "cart-item";
      div.innerHTML = `
        <div class="cart-item-info">
          <div class="cart-item-name">${item.itemName}</div>
          <div class="cart-item-restaurant">${item.restaurantName}</div>
        </div>
        <div class="cart-item-controls" data-restaurant="${item.restaurantId}" data-item="${item.itemName}">
          <button class="quantity-btn minus">-</button>
          <span class="quantity-display">${item.quantity}</span>
          <button class="quantity-btn plus">+</button>
        </div>
      `;
      cartItemsContainer.appendChild(div);
    });
  }
  
  // Update cart totals
  cartSubtotalEl.textContent = formatCurrency(calculateCartSubtotal());
  cartDeliveryFeeEl.textContent = formatCurrency(calculateDeliveryFee());
  cartTotalEl.textContent = formatCurrency(calculateCartTotal());
}

cartItemsContainer.addEventListener("click", (e) => {
  const btn = e.target.closest(".quantity-btn");
  if (!btn) return;
  const control = btn.parentElement;
  const restaurantId = Number(control.dataset.restaurant);
  const itemName = control.dataset.item;
  if (btn.classList.contains("plus")) {
    const item = cart.find(
      (i) => i.restaurantId === restaurantId && i.itemName === itemName
    );
    if (item)
      addToCart(restaurantId, itemName, item.restaurantName, item.price);
  } else if (btn.classList.contains("minus")) {
    removeFromCart(restaurantId, itemName);
  }
});

// ==========================
// Delivery Type Selection
// ==========================
document.addEventListener("change", (e) => {
  if (e.target.name === "deliveryType") {
    deliveryType = e.target.value;
    updateCartUI();
    updateOrderUI();
  }
});

// ==========================
// Cart Modal
// ==========================
cartBtn.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  cartModal.classList.remove("hidden");
});

cartModalOverlay.addEventListener("click", () => cartModal.classList.add("hidden"));
cartModalClose.addEventListener("click", () => cartModal.classList.add("hidden"));

proceedToOrderBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    showToast("Giỏ hàng trống!");
    return;
  }
  if (!currentUser) {
    pendingAction = openOrderModal;
    cartModal.classList.add("hidden");
    openAuthModal("login");
    return;
  }
  openOrderModal();
});

// ==========================
// Order Modal Functions
// ==========================
function openOrderModal() {
  updateOrderUI();
  cartModal.classList.add("hidden");
  orderModal.classList.remove("hidden");
}

function updateOrderUI() {
  // Update order items display
  orderItemsContainer.innerHTML = "";
  cart.forEach((item) => {
    const div = document.createElement("div");
    div.className = "order-item";
    div.innerHTML = `
      <div>
        <div class="order-item-name">${item.itemName}</div>
        <div class="order-item-quantity">x${item.quantity}</div>
      </div>
      <div class="order-item-price">${formatCurrency(
        item.price * item.quantity
      )}</div>
    `;
    orderItemsContainer.appendChild(div);
  });
  
  // Update pricing
  orderSubtotalEl.textContent = formatCurrency(calculateCartSubtotal());
  orderDeliveryFeeEl.textContent = formatCurrency(calculateDeliveryFee());
  orderTotalEl.textContent = formatCurrency(calculateCartTotal());
  
  // Update labels and form fields based on delivery type
  if (deliveryType === "delivery") {
    orderDeliveryLabelEl.textContent = "Phí giao hàng:";
    addressGroup.classList.remove("hidden");
    pickupTimeGroup.classList.add("hidden");
    deliveryAddress.required = true;
    pickupTime.required = false;
  } else {
    orderDeliveryLabelEl.textContent = "Phí đến lấy:";
    addressGroup.classList.add("hidden");
    pickupTimeGroup.classList.remove("hidden");
    deliveryAddress.required = false;
    pickupTime.required = true;
  }
}

orderForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const orderNumber = Math.floor(Math.random() * 1000000);
  const deliveryTypeText = deliveryType === "delivery" ? "giao hàng" : "đến lấy";
  showToast(`Đặt hàng thành công! Mã đơn hàng: #${orderNumber}. Hình thức: ${deliveryTypeText}`);
  orderModal.classList.add("hidden");
  cart = [];
  updateCartUI();
  orderForm.reset();
  
  // Reset delivery type to default
  deliveryType = "delivery";
  document.querySelector('input[name="deliveryType"][value="delivery"]').checked = true;
});

orderModalOverlay.addEventListener("click", () => orderModal.classList.add("hidden"));
orderModalClose.addEventListener("click", () => orderModal.classList.add("hidden"));

// ==========================
// Countdown Timer
// ==========================
function updateCountdown() {
  const now = Date.now();
  flashSaleItems.forEach((item) => {
    const remaining = Math.max(0, item.endTime - now);
    const hh = Math.floor(remaining / 3600000);
    const mm = Math.floor((remaining % 3600000) / 60000);
    const ss = Math.floor((remaining % 60000) / 1000);
    const timerEl = document.querySelector(`.countdown-timer[data-id="${item.id}"]`);
    if (timerEl) {
      timerEl.querySelector(".hh").textContent = String(hh).padStart(2, "0");
      timerEl.querySelector(".mm").textContent = String(mm).padStart(2, "0");
      timerEl.querySelector(".ss").textContent = String(ss).padStart(2, "0");
    }
  });
}
setInterval(updateCountdown, 1000);

// ==========================
// Toast Function
// ==========================
function showToast(message) {
  toastMessage.textContent = message;
  toast.classList.remove("hidden");
  setTimeout(() => {
    toast.classList.add("hidden");
  }, 3000);
}

// ==========================
// Initialize
// ==========================
renderAuthState();
renderCategories();
renderAdBanner();
applyFilters();
updateCartUI();
