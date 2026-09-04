/**
 * LE DAT (ledatvipp) - PORTFOLIO INTERACTIVE LOGIC
 * High performance, zero external dependencies, clean architecture.
 */

// --- DATASET: FEATURED PROJECTS ---
const projectsData = [
  {
    id: 'minerua',
    title: 'MineRua Web Platform',
    category: 'web',
    categoryName: 'Gaming Websites',
    icon: '🌐',
    visualClass: 'visual-minerua',
    description:
      'Official web ecosystem for the MineRua gaming server featuring a modern dark gaming aesthetic, SEO optimization, and sub-second load times.',
    highlights: [
      'Bespoke brand visual identity, 100% responsive across all screen sizes',
      'Integrated real-time online status monitoring and server news',
      'Protected and cached globally via Cloudflare CDN network',
    ],
    tags: ['HTML5/CSS3', 'Modern JS', 'Cloudflare CDN', 'Gaming UI'],
  },
  {
    id: 'is7mc',
    title: 'is7mc Community Hub',
    category: 'web',
    categoryName: 'Gaming Websites',
    icon: '⚔️',
    visualClass: 'visual-is7mc',
    description:
      'Community portal for the is7mc player base, focusing on a clean mobile-first reading experience and instant server status telemetry.',
    highlights: [
      'Scientific card-based layout optimized for mobile smartphones',
      'Real-time online player count and server status synchronization',
      'Ultra-lightweight vanilla front-end architecture',
    ],
    tags: ['Mobile-First', 'REST API', 'Realtime Sync', 'Performance'],
  },
  {
    id: 'starmine',
    title: 'Starmine Network Portal',
    category: 'web',
    categoryName: 'Gaming Websites',
    icon: '🚀',
    visualClass: 'visual-starmine',
    description:
      'Brand-centric homepage and navigation portal for Starmine, reinforcing server identity and streamlining new player onboarding.',
    highlights: [
      'Intuitive player onboarding flow with rules and installation guides',
      'Modular layout prepared for web store top-ups and wiki articles',
      'Blazing-fast response times backed by optimized asset delivery',
    ],
    tags: ['Brand Identity', 'Onboarding UX', 'Fast CDN', 'Web Portal'],
  },
  {
    id: 'minecraft-core',
    title: 'Custom Plugins & Core Engine',
    category: 'minecraft',
    categoryName: 'Minecraft & Plugins',
    icon: '🧩',
    visualClass: 'visual-plugin',
    description:
      'High-performance proprietary plugin suite for Paper / Purpur servers, utilizing asynchronous execution to sustain rock-solid 20.0 TPS.',
    highlights: [
      'Interactive custom GUI system with structured lore formatting',
      'Asynchronous task scheduling preventing main thread latency',
      'Standard Gradle build structure with secure SQL synchronization',
    ],
    tags: ['Java 17/21', 'PaperMC', 'Gradle', 'High TPS', 'Async Tasks'],
  },
  {
    id: 'discord-bot',
    title: 'Discord Ops & Automation Bot',
    category: 'automation',
    categoryName: 'Automation & IoT',
    icon: '🤖',
    visualClass: 'visual-discord',
    description:
      'Full-featured Discord management bot automating player support tickets, role synchronizations, incident alerts, and payment webhooks.',
    highlights: [
      '24/7 support ticket system with interactive buttons and modals',
      'Automated sync between in-game ranks and Discord roles',
      'Instant payment webhook validation and transaction processing',
    ],
    tags: ['Discord API', 'Node.js', 'Webhook Pipeline', 'Automation'],
  },
  {
    id: 'iot-gps',
    title: 'IoT ESP32 Realtime GPS Tracker',
    category: 'automation',
    categoryName: 'Automation & IoT',
    icon: '📡',
    visualClass: 'visual-iot',
    description:
      'Real-time geolocation telemetry pipeline: gathering satellite fixes from an ESP32 hardware unit, parsing via Cloudflare, and visualizing on live web maps.',
    highlights: [
      'Embedded ESP32 firmware communicating with GPS hardware sensors',
      'Serverless Cloudflare Workers backend processing location payloads',
      'Interactive web dashboard rendering real-time route tracing',
    ],
    tags: ['ESP32 (C++)', 'Cloudflare Workers', 'Realtime Map', 'IoT'],
  },
];

// --- CORE APPLICATION INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  initProjectsRender();
  initMouseSpotlight();
  initCopyButtons();
  initNavigation();
  initQuickForm();
  initBackToTop();
});

// --- RENDER PROJECTS & FILTERING ---
function initProjectsRender() {
  const container = document.getElementById('projects-container');
  const filterButtons = document.querySelectorAll('.filter-btn');

  if (!container) return;

  function render(category = 'all') {
    const filtered = category === 'all' 
      ? projectsData 
      : projectsData.filter((item) => item.category === category);

    container.innerHTML = filtered
      .map(
        (p) => `
      <article class="glass-card project-card" data-category="${p.category}">
        <div class="project-visual ${p.visualClass}">
          <span class="project-category-badge">${p.categoryName}</span>
          <div class="project-icon-badge">${p.icon}</div>
          <div class="project-visual-overlay"></div>
        </div>
        <div class="project-body">
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${p.description}</p>
          <ul class="project-highlights">
            ${p.highlights.map((h) => `<li>${h}</li>`).join('')}
          </ul>
          <div class="project-tags-list">
            ${p.tags.map((t) => `<span class="p-tag">${t}</span>`).join('')}
          </div>
        </div>
      </article>
    `
      )
      .join('');
  }

  // Initial render
  render('all');

  // Filter click handlers
  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const filterValue = btn.getAttribute('data-filter') || 'all';
      render(filterValue);
    });
  });
}

// --- MOUSE SPOTLIGHT GLOW EFFECT ---
function initMouseSpotlight() {
  const spotlight = document.getElementById('mouse-spotlight');
  if (!spotlight) return;

  // Track cursor with smooth requestAnimationFrame throttle
  let ticking = false;
  window.addEventListener('mousemove', (e) => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        spotlight.style.left = `${e.clientX}px`;
        spotlight.style.top = `${e.clientY}px`;
        ticking = false;
      });
      ticking = true;
    }
  });

  document.addEventListener('mouseleave', () => {
    spotlight.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
    spotlight.style.opacity = '1';
  });
}

// --- COPY TO CLIPBOARD WITH TOAST ---
function initCopyButtons() {
  const copyButtons = document.querySelectorAll('.copy-btn');
  copyButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const text = btn.getAttribute('data-copy');
      const label = btn.getAttribute('data-label') || 'Content';
      if (text) {
        copyText(text, `Copied ${label}: ${text}`);
      }
    });
  });

  // Terminal copy button
  const copyCodeBtn = document.getElementById('copy-code-btn');
  if (copyCodeBtn) {
    copyCodeBtn.addEventListener('click', () => {
      const profileCode = `{
  "name": "Le Dat",
  "alias": "ledatvipp",
  "roles": ["Full-stack Web Developer", "Minecraft Systems Architect", "Automation Specialist"],
  "contact": "dnxnd35@gmail.com",
  "discord": "_dpreaent1"
}`;
      copyText(profileCode, 'Copied Le Dat profile JSON configuration!');
    });
  }
}

function copyText(text, message) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard
      .writeText(text)
      .then(() => showToast(message))
      .catch(() => fallbackCopy(text, message));
  } else {
    fallbackCopy(text, message);
  }
}

function fallbackCopy(text, message) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.left = '-9999px';
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    showToast(message);
  } catch (err) {
    showToast('Failed to copy automatically. Please copy manually!');
  }
  document.body.removeChild(textarea);
}

// --- TOAST NOTIFICATION ---
function showToast(message, duration = 3200) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="toast-icon">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
    </span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'toast-out 0.3s forwards';
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }, duration);
}

// --- NAVIGATION & MOBILE MENU ---
function initNavigation() {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('open');
      navMenu.classList.toggle('open');
    });

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('open');
        navMenu.classList.remove('open');
      });
    });
  }
}

// --- QUICK CONTACT FORM ---
function initQuickForm() {
  const form = document.getElementById('quick-contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('sender-name')?.value.trim();
    const contact = document.getElementById('sender-contact')?.value.trim();
    const message = document.getElementById('sender-message')?.value.trim();

    if (!name || !contact || !message) {
      showToast('Please fill in all required fields!');
      return;
    }

    const subject = encodeURIComponent(`[Project Inquiry] Request from ${name}`);
    const body = encodeURIComponent(
      `Name / Server: ${name}\nContact (Discord/Email): ${contact}\n\nProject Scope & Message:\n${message}`
    );

    const mailtoUrl = `mailto:dnxnd35@gmail.com?subject=${subject}&body=${body}`;

    showToast('Opening your email application...', 4000);
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 600);

    form.reset();
  });
}

// --- BACK TO TOP BUTTON ---
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}
