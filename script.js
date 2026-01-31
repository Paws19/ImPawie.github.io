// ================================
// SCROLL TO SECTION FUNCTIONALITY
// ================================
function scrollToSection(event) {
  event.preventDefault();
  const targetId = event.target.getAttribute("href");
  const targetSection = document.querySelector(targetId);

  if (targetSection) {
    const offsetTop = targetSection.offsetTop - 80;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
}

// ================================
// SCROLL TO TOP BUTTON
// ================================
const scrollBtn = document.getElementById("scrollBtn");

function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
}

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

window.addEventListener("scroll", scrollFunction);

// ================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all sections
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    observer.observe(section);
  });
});

// ================================
// NAVBAR BACKGROUND ON SCROLL
// ================================
let lastScroll = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    navbar.style.boxShadow = "0 4px 20px rgba(173, 193, 120, 0.15)";
  } else {
    navbar.style.boxShadow = "none";
  }

  lastScroll = currentScroll;
});

// ================================
// SMOOTH REVEAL ON PAGE LOAD
// ================================
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});

// ================================
// CURSOR EFFECT (OPTIONAL ENHANCEMENT)
// ================================
const createCursorTrail = () => {
  const cursor = document.createElement("div");
  cursor.classList.add("cursor-trail");
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });
};

// Uncomment to enable cursor trail
// createCursorTrail();

// ================================
// PARALLAX EFFECT FOR BACKGROUND DECORATIONS
// ================================
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const decoration1 = document.querySelector(".bg-decoration");
  const decoration2 = document.querySelector(".bg-decoration-2");

  if (decoration1 && decoration2) {
    decoration1.style.transform = `translate(0, ${scrolled * 0.3}px)`;
    decoration2.style.transform = `translate(0, ${-scrolled * 0.2}px)`;
  }
});

// ================================
// FADE IN ELEMENTS ON SCROLL
// ================================
const fadeElements = document.querySelectorAll(".project-card, .skill-tag");

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }, index * 100);
      }
    });
  },
  {
    threshold: 0.1,
  },
);

fadeElements.forEach((element) => {
  element.style.opacity = "0";
  element.style.transform = "translateY(20px)";
  element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  fadeObserver.observe(element);
});

// ================================
// ACTIVE NAV LINK HIGHLIGHTING
// ================================
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// ================================
// PREVENT DEFAULT ON DISABLED BUTTONS
// ================================
document.querySelectorAll("button[disabled]").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

// ================================
// CONSOLE MESSAGE
// ================================
console.log(
  "%c🌿 Portfolio by Paw",
  "font-size: 20px; color: #adc178; font-weight: bold;",
);
console.log(
  "%cDesigned with passion and attention to detail",
  "font-size: 12px; color: #8da35e;",
);
