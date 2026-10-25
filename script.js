const CAFE_CONFIG = {
  name: "BREWZA Café",
  address: "Demo Address, City, Country",
  phone: "Demo Phone Number",
  whatsapp: "Demo WhatsApp Number",
  googleMapsUrl: "Demo Google Maps URL",
  openingHours: "Demo Opening Hours",
  instagramUrl: "Demo Instagram URL",
  facebookUrl: "Demo Facebook URL"
};

const MENU_ITEMS = [
  { id: 1,  name_en: "Espresso",                  name_ar: "إسبريسو",                    desc_en: "Rich, bold single shot of our signature blend.",                   desc_ar: "شوت واحد غني وقوي من خلطتنا المميزة.",                       price: 55,  category: "hot",       image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=600&q=80", badge: "" },
  { id: 2,  name_en: "Cappuccino",                name_ar: "كابتشينو",                    desc_en: "Espresso with steamed milk and a velvety foam crown.",              desc_ar: "إسبريسو مع حليب مبخّر ورغوة مخملية.",                         price: 75,  category: "hot",       image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=600&q=80", badge: "Popular" },
  { id: 3,  name_en: "Latte",                     name_ar: "لاتيه",                       desc_en: "Smooth espresso with silky steamed milk.",                             desc_ar: "إسبريسو ناعم مع حليب مبخّر حريري.",                          price: 80,  category: "hot",       image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80", badge: "" },
  { id: 4,  name_en: "Mocha",                     name_ar: "موكا",                        desc_en: "Espresso, chocolate and steamed milk, finished with cocoa.",           desc_ar: "إسبريسو وشوكولاتة وحليب مبخّر، مع لمسة كاكاو.",                price: 90,  category: "hot",       image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=600&q=80", badge: "" },
  { id: 5,  name_en: "Flat White",                name_ar: "فلات وايت",                   desc_en: "Double espresso with micro-foamed milk.",                            desc_ar: "إسبريسو مزدوج مع حليب برغوة دقيقة.",                          price: 85,  category: "hot",       image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=600&q=80", badge: "" },
  { id: 6,  name_en: "Iced Latte",                name_ar: "آيس لاتيه",                   desc_en: "Chilled espresso with cold milk over ice.",                            desc_ar: "إسبريسو بارد مع حليب مثلّج.",                                  price: 85,  category: "iced",      image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80", badge: "Popular" },
  { id: 7,  name_en: "Iced Americano",            name_ar: "آيس أمريكانو",                desc_en: "Bold espresso poured over ice and cold water.",                         desc_ar: "إسبريسو قوي على الثلج مع ماء بارد.",                          price: 65,  category: "iced",      image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80", badge: "" },
  { id: 8,  name_en: "Iced Caramel Macchiato",    name_ar: "آيس كراميل ماكياتو",          desc_en: "Vanilla, cold milk, espresso and caramel drizzle.",                   desc_ar: "فانيليا وحليب بارد وإسبريسو مع صوص الكراميل.",                 price: 95,  category: "iced",      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80", badge: "New" },
  { id: 9,  name_en: "Cold Brew",                 name_ar: "كولد برو",                    desc_en: "Slow-steeped for 18 hours, smooth and refreshing.",                    desc_ar: "منقوع ببطء 18 ساعة، ناعم ومنعش.",                             price: 90,  category: "iced",      image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80", badge: "" },
  { id: 10, name_en: "Matcha Latte",              name_ar: "ماتشا لاتيه",                  desc_en: "Stone-ground matcha whisked with steamed milk.",                      desc_ar: "ماتشا مطحونة تُخفق مع حليب مبخّر.",                           price: 95,  category: "noncoffee", image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=600&q=80", badge: "" },
  { id: 11, name_en: "Hot Chocolate",             name_ar: "شوكولاتة ساخنة",              desc_en: "Rich melted chocolate with steamed milk and cream.",                  desc_ar: "شوكولاتة ذائبة غنية مع حليب مبخّر وكريمة.",                   price: 85,  category: "noncoffee", image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=600&q=80", badge: "Popular" },
  { id: 12, name_en: "Chai Latte",                name_ar: "شاي لاتيه",                   desc_en: "Spiced black tea blended with steamed milk.",                         desc_ar: "شاي أسود بالتوابل ممزوج بحليب مبخّر.",                        price: 80,  category: "noncoffee", image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=600&q=80", badge: "" },
  { id: 13, name_en: "Cheesecake",                name_ar: "تشيز كيك",                    desc_en: "Creamy New York style cheesecake with berry coulis.",                  desc_ar: "تشيز كيك نيويورك كريمي مع صوص التوت.",                       price: 110, category: "dessert",   image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80", badge: "Popular" },
  { id: 14, name_en: "Chocolate Brownie",         name_ar: "براوني شوكولاتة",             desc_en: "Warm fudgy brownie served with a scoop of vanilla.",                  desc_ar: "براوني دافئ وطري مع كرة آيس كريم فانيليا.",                   price: 95,  category: "dessert",   image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80", badge: "" },
  { id: 15, name_en: "Butter Croissant",          name_ar: "كرواسون بالزبدة",             desc_en: "Flaky, golden croissant baked fresh every morning.",                  desc_ar: "كرواسون ذهبي مقرمش يُخبز طازجًا كل صباح.",                    price: 70,  category: "dessert",   image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80", badge: "New" }
];

const I18N = {
  en: {
    nav_home: "Home", nav_menu: "Menu", nav_about: "About", nav_location: "Location", nav_contact: "Contact",
    hero_eyebrow: "WELCOME TO BREWZA CAFÉ",
    hero_title: "Your Daily Coffee Ritual.",
    hero_sub: "Great coffee. Cozy moments. Made for you.",
    hero_cta: "Explore Our Menu",
    menu_eyebrow: "OUR DIGITAL MENU",
    menu_title: "Something for Every Mood",
    menu_desc: "A sample selection of what we love to brew. Prices and items are placeholder examples and can be updated anytime.",
    filter_all: "All", filter_hot: "Hot Coffee", filter_iced: "Iced Coffee", filter_noncoffee: "Non-Coffee", filter_dessert: "Desserts",
    search_label: "Search menu items by name",
    search_placeholder: "Search menu…",
    menu_empty: "No items match your search right now. Try another name or category.",
    about_eyebrow: "OUR STORY",
    about_title: "More Than Just Coffee.",
    about_desc: "BREWZA Café was born from a simple idea: a great cup of coffee should feel like a moment of calm in a busy day. We source carefully, brew patiently, and serve with warmth — in a space designed for slow mornings, good conversations, and quiet focus alike.",
    feat1_title: "Quality Coffee", feat1_desc: "Thoughtfully sourced beans, roasted and brewed with care.",
    feat2_title: "Cozy Atmosphere", feat2_desc: "Warm lighting, soft seating, and a space that feels like home.",
    feat3_title: "Freshly Made", feat3_desc: "Desserts and drinks prepared fresh throughout the day.",
    loc_eyebrow: "VISIT US", loc_title: "Find Us",
    loc_address: "Address", loc_phone: "Phone", loc_hours: "Opening Hours",
    loc_directions: "Get Directions", loc_hint: "Location not configured yet.",
    contact_eyebrow: "GET IN TOUCH", contact_title: "Contact",
    contact_call: "Call Us", contact_call_btn: "Call Now",
    contact_wa: "WhatsApp", contact_wa_desc: "Message us directly for quick questions.", contact_wa_btn: "Chat on WhatsApp", contact_wa_hint: "WhatsApp number not configured yet.",
    contact_social: "Social", contact_social_desc: "Follow our daily brews and updates.", contact_social_hint: "Social links not configured yet.",
    footer_tag: "Your daily coffee ritual.", footer_explore: "Explore", footer_visit: "Visit",
    footer_rights: "All rights reserved.", footer_note: "Sample menu — content is placeholder and editable.",
    not_configured: "Not configured yet.",
    badge_popular: "Popular", badge_new: "New",
    currency: "EGP"
  },
  ar: {
    nav_home: "الرئيسية", nav_menu: "المنيو", nav_about: "من نحن", nav_location: "الموقع", nav_contact: "تواصل",
    hero_eyebrow: "أهلًا بك في بروزا كافيه",
    hero_title: "طقس قهوتك اليومي.",
    hero_sub: "قهوة رائعة. لحظات دافئة. صُنعت من أجلك.",
    hero_cta: "تصفح المنيو",
    menu_eyebrow: "المنيو الرقمي",
    menu_title: "شيء يناسب كل مزاج",
    menu_desc: "مجموعة تجريبية مما نحب تحضيره. الأسعار والأصناف أمثلة قابلة للتعديل في أي وقت.",
    filter_all: "الكل", filter_hot: "قهوة ساخنة", filter_iced: "قهوة مثلجة", filter_noncoffee: "مشروبات أخرى", filter_dessert: "حلويات",
    search_label: "ابحث في المنيو بالاسم",
    search_placeholder: "ابحث في المنيو…",
    menu_empty: "لا توجد أصناف مطابقة حاليًا. جرّب اسمًا أو تصنيفًا آخر.",
    about_eyebrow: "قصتنا",
    about_title: "أكثر من مجرد قهوة.",
    about_desc: "وُلد بروزا كافيه من فكرة بسيطة: فنجان القهوة الرائع يجب أن يمنحك لحظة هدوء في يوم مزدحم. نختار بعناية، ونحضّر بصبر، ونقدّم بدفء — في مساحة صُممت للصباحات الهادئة والأحاديث الجميلة.",
    feat1_title: "قهوة عالية الجودة", feat1_desc: "حبوب مختارة بعناية ومحمصة ومحضّرة باهتمام.",
    feat2_title: "أجواء دافئة", feat2_desc: "إضاءة هادئة وجلسات مريحة ومساحة تشبه البيت.",
    feat3_title: "طازج دائمًا", feat3_desc: "حلويات ومشروبات تُحضّر طازجة على مدار اليوم.",
    loc_eyebrow: "زورونا", loc_title: "موقعنا",
    loc_address: "العنوان", loc_phone: "الهاتف", loc_hours: "ساعات العمل",
    loc_directions: "احصل على الاتجاهات", loc_hint: "الموقع غير مُعد بعد.",
    contact_eyebrow: "تواصل معنا", contact_title: "اتصل بنا",
    contact_call: "اتصل بنا", contact_call_btn: "اتصل الآن",
    contact_wa: "واتساب", contact_wa_desc: "راسلنا مباشرة لأي استفسار سريع.", contact_wa_btn: "تحدث على واتساب", contact_wa_hint: "رقم واتساب غير مُعد بعد.",
    contact_social: "السوشيال", contact_social_desc: "تابعنا لمشاهدة كل جديد.", contact_social_hint: "روابط السوشيال غير مُعدة بعد.",
    footer_tag: "طقس قهوتك اليومي.", footer_explore: "تصفح", footer_visit: "زورونا",
    footer_rights: "جميع الحقوق محفوظة.", footer_note: "منيو تجريبي — المحتوى قابل للتعديل.",
    not_configured: "غير مُعد بعد.",
    badge_popular: "مميز", badge_new: "جديد",
    currency: "جنيه"
  }
};

const state = {
  category: "all",
  search: "",
  lang: "en",
  theme: "light"
};

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

function t(key) {
  return (I18N[state.lang] && I18N[state.lang][key]) || I18N.en[key] || key;
}

function isConfigured(value) {
  if (typeof value !== "string") return false;
  const v = value.trim();
  if (!v) return false;
  if (v.startsWith("[") && v.endsWith("]")) return false;
  return true;
}

function formatPrice(n) {
  return state.lang === "ar" ? `${n} ${t("currency")}` : `${n} ${t("currency")}`;
}

function attachImageFallback(mediaEl) {
  const img = mediaEl.querySelector("img");
  if (!img) return;
  const fail = () => mediaEl.classList.add("is-broken");
  img.addEventListener("error", fail, { once: true });
  if (img.complete && img.naturalWidth === 0) fail();
}

function buildCard(item) {
  const card = document.createElement("article");
  card.className = "menu-card";

  const media = document.createElement("div");
  media.className = "menu-card-media";

  if (item.badge) {
    const badge = document.createElement("span");
    badge.className = "menu-badge" + (item.badge.toLowerCase() === "new" ? " new" : "");
    badge.textContent = item.badge.toLowerCase() === "new" ? t("badge_new") : t("badge_popular");
    media.appendChild(badge);
  }

  const img = document.createElement("img");
  img.src = item.image;
  img.alt = state.lang === "ar" ? item.name_ar : item.name_en;
  img.loading = "lazy";
  img.width = 600;
  img.height = 450;
  media.appendChild(img);

  const fallback = document.createElement("span");
  fallback.className = "img-fallback";
  fallback.setAttribute("aria-hidden", "true");
  fallback.textContent = "☕";
  media.appendChild(fallback);

  attachImageFallback(media);

  const body = document.createElement("div");
  body.className = "menu-card-body";

  const top = document.createElement("div");
  top.className = "menu-card-top";

  const title = document.createElement("h3");
  title.textContent = state.lang === "ar" ? item.name_ar : item.name_en;

  const price = document.createElement("span");
  price.className = "menu-price";
  price.textContent = formatPrice(item.price);

  top.appendChild(title);
  top.appendChild(price);

  const desc = document.createElement("p");
  desc.textContent = state.lang === "ar" ? item.desc_ar : item.desc_en;

  body.appendChild(top);
  body.appendChild(desc);

  card.appendChild(media);
  card.appendChild(body);
  return card;
}

function renderMenu() {
  const grid = $("#menuGrid");
  const empty = $("#menuEmpty");
  if (!grid || !empty) return;

  const term = state.search.trim().toLowerCase();
  const filtered = MENU_ITEMS.filter((item) => {
    const name = state.lang === "ar" ? item.name_ar : item.name_en;
    const matchCat = state.category === "all" || item.category === state.category;
    const matchSearch = !term || name.toLowerCase().includes(term) ||
                        item.name_en.toLowerCase().includes(term);
    return matchCat && matchSearch;
  });

  grid.replaceChildren();

  if (filtered.length === 0) {
    empty.hidden = false;
    return;
  }
  empty.hidden = true;

  const frag = document.createDocumentFragment();
  filtered.forEach((item) => frag.appendChild(buildCard(item)));
  grid.appendChild(frag);
}

function applyTranslations() {
  $$("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    el.textContent = t(key);
  });
  $$("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === "ar" ? "rtl" : "ltr";
  const langLabel = $("#langLabel");
  if (langLabel) langLabel.textContent = state.lang === "ar" ? "EN" : "AR";
  const langBtn = $("#langToggle");
  if (langBtn) langBtn.setAttribute("aria-label", state.lang === "ar" ? "Switch to English" : "التبديل إلى العربية");
  renderMenu();
  setupLocation();
  setupContact();
}

function applyTheme() {
  document.documentElement.setAttribute("data-theme", state.theme);
  const themeBtn = $("#themeToggle");
  if (themeBtn) {
    themeBtn.setAttribute("aria-label", state.theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
  }
}

function setupLangToggle() {
  const btn = $("#langToggle");
  if (!btn) return;
  btn.addEventListener("click", () => {
    state.lang = state.lang === "ar" ? "en" : "ar";
    try { localStorage.setItem("brewza_lang", state.lang); } catch (e) {}
    applyTranslations();
  });
}

function setupThemeToggle() {
  const btn = $("#themeToggle");
  if (!btn) return;
  btn.addEventListener("click", () => {
    state.theme = state.theme === "dark" ? "light" : "dark";
    try { localStorage.setItem("brewza_theme", state.theme); } catch (e) {}
    applyTheme();
  });
}

function setupFilters() {
  const wrap = $("#categoryFilters");
  const search = $("#menuSearch");
  if (!wrap) return;

  wrap.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    $$(".filter-btn", wrap).forEach((b) => {
      b.classList.remove("is-active");
      b.setAttribute("aria-pressed", "false");
    });
    btn.classList.add("is-active");
    btn.setAttribute("aria-pressed", "true");
    state.category = btn.dataset.category || "all";
    renderMenu();
  });

  if (search) {
    let timer;
    search.addEventListener("input", (e) => {
      clearTimeout(timer);
      const val = e.target.value;
      timer = setTimeout(() => {
        state.search = val;
        renderMenu();
      }, 180);
    });
  }
}

function setupHeader() {
  const header = $("#siteHeader");
  const toggle = $("#navToggle");
  const nav = $("#mainNav");

  if (header) {
    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.addEventListener("click", (e) => {
      if (e.target.closest("a")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }
}

function setupLogoFallback() {
  const imgs = [$("#brandLogo"), $("#footerLogo")].filter(Boolean);
  imgs.forEach((img) => {
    const fail = () => img.classList.add("is-broken");
    img.addEventListener("error", fail, { once: true });
    if (img.complete && img.naturalWidth === 0) fail();
  });
}

function getMapsLink() {
  const cfg = CAFE_CONFIG;
  if (isConfigured(cfg.googleMapsUrl)) return cfg.googleMapsUrl.trim();
  if (isConfigured(cfg.address)) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cfg.address.trim())}`;
  }
  return "";
}

function sanitizePhoneForTel(phone) {
  return phone.replace(/[^\d+]/g, "");
}

function sanitizeWhatsApp(phone) {
  return phone.replace(/[^\d]/g, "");
}

function setupLocation() {
  const addrEl = $("#locAddress");
  const phoneEl = $("#locPhone");
  const hoursEl = $("#locHours");
  const dirBtn = $("#directionsBtn");
  const dirHint = $("#directionsHint");

  const notSet = t("not_configured");

  if (addrEl) addrEl.textContent = isConfigured(CAFE_CONFIG.address) ? CAFE_CONFIG.address : notSet;
  if (phoneEl) phoneEl.textContent = isConfigured(CAFE_CONFIG.phone) ? CAFE_CONFIG.phone : notSet;
  if (hoursEl) hoursEl.textContent = isConfigured(CAFE_CONFIG.openingHours) ? CAFE_CONFIG.openingHours : notSet;

  const mapsLink = getMapsLink();
  if (dirBtn && dirHint) {
    if (mapsLink) {
      dirBtn.href = mapsLink;
      dirBtn.hidden = false;
      dirHint.hidden = true;
    } else {
      dirBtn.hidden = true;
      dirHint.hidden = false;
    }
  }
}

function setupContact() {
  const phoneEl = $("#contactPhone");
  const callBtn = $("#callBtn");
  const waBtn = $("#whatsappBtn");
  const waHint = $("#whatsappHint");
  const igBtn = $("#instagramBtn");
  const fbBtn = $("#facebookBtn");
  const socialHint = $("#socialHint");

  const notSet = t("not_configured");

  if (phoneEl) {
    phoneEl.textContent = isConfigured(CAFE_CONFIG.phone) ? CAFE_CONFIG.phone : notSet;
  }

  if (callBtn) {
    if (isConfigured(CAFE_CONFIG.phone)) {
      const clean = sanitizePhoneForTel(CAFE_CONFIG.phone);
      if (clean) {
        callBtn.href = `tel:${clean}`;
        callBtn.hidden = false;
      } else {
        callBtn.hidden = true;
      }
    } else {
      callBtn.hidden = true;
    }
  }

  if (waBtn && waHint) {
    if (isConfigured(CAFE_CONFIG.whatsapp)) {
      const num = sanitizeWhatsApp(CAFE_CONFIG.whatsapp);
      if (num.length >= 8) {
        waBtn.href = `https://wa.me/${num}`;
        waBtn.hidden = false;
        waHint.hidden = true;
      } else {
        waBtn.hidden = true;
        waHint.hidden = false;
      }
    } else {
      waBtn.hidden = true;
      waHint.hidden = false;
    }
  }

  let socialVisible = false;
  if (igBtn) {
    if (isConfigured(CAFE_CONFIG.instagramUrl)) {
      igBtn.href = CAFE_CONFIG.instagramUrl;
      igBtn.hidden = false;
      socialVisible = true;
    } else {
      igBtn.hidden = true;
    }
  }
  if (fbBtn) {
    if (isConfigured(CAFE_CONFIG.facebookUrl)) {
      fbBtn.href = CAFE_CONFIG.facebookUrl;
      fbBtn.hidden = false;
      socialVisible = true;
    } else {
      fbBtn.hidden = true;
    }
  }
  if (socialHint) socialHint.hidden = socialVisible;
}

function setupFooter() {
  const addr = $("#footerAddress");
  const phone = $("#footerPhone");
  if (addr && isConfigured(CAFE_CONFIG.address)) {
    addr.textContent = CAFE_CONFIG.address;
    addr.hidden = false;
  }
  if (phone && isConfigured(CAFE_CONFIG.phone)) {
    phone.textContent = CAFE_CONFIG.phone;
    phone.hidden = false;
  }
  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear();
}

function loadPreferences() {
  try {
    const lang = localStorage.getItem("brewza_lang");
    if (lang === "ar" || lang === "en") state.lang = lang;

    const theme = localStorage.getItem("brewza_theme");
    if (theme === "dark" || theme === "light") {
      state.theme = theme;
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      state.theme = prefersDark ? "dark" : "light";
    }
  } catch (e) {
    state.theme = "light";
  }
}

function init() {
  loadPreferences();
  applyTheme();
  setupLogoFallback();
  setupHeader();
  setupFilters();
  setupLangToggle();
  setupThemeToggle();
  applyTranslations();
  setupFooter();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
