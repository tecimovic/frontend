<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-brand">
        <a href="#hero" class="logo" @click.prevent="scrollTo('hero')">
          <svg width="26" height="26" viewBox="0 0 30 30" fill="none" aria-hidden="true">
            <circle cx="15" cy="22" r="5" stroke="url(#fg)" stroke-width="1.5" fill="none"/>
            <line x1="15" y1="17" x2="15" y2="4" stroke="url(#fg)" stroke-width="2" stroke-linecap="round"/>
            <line x1="13.5" y1="11" x2="8" y2="5" stroke="#a5b4fc" stroke-width="1.5" stroke-linecap="round" opacity="0.7"/>
            <line x1="16.5" y1="11" x2="22" y2="5" stroke="#f472b6" stroke-width="1.5" stroke-linecap="round" opacity="0.7"/>
            <circle cx="15" cy="3" r="1.8" fill="url(#fg)"/>
            <defs>
              <linearGradient id="fg" x1="0" y1="1" x2="0" y2="0" gradientUnits="objectBoundingBox">
                <stop offset="0%" stop-color="#6366f1"/>
                <stop offset="100%" stop-color="#ec4899"/>
              </linearGradient>
            </defs>
          </svg>
          <span class="logo-text">Digital <span class="logo-accent">Geyser</span></span>
        </a>
        <p class="brand-sub">AI Research &amp; Consulting.<br>Where intelligence erupts.</p>
      </div>

      <div class="footer-links">
        <div class="link-group">
          <h4>Company</h4>
          <a href="#about" @click.prevent="scrollTo('about')">About Us</a>
          <a href="#services" @click.prevent="scrollTo('services')">Services</a>
          <a href="#process" @click.prevent="scrollTo('process')">Our Process</a>
          <a href="#contact" @click.prevent="scrollTo('contact')">Contact</a>
        </div>
        <div class="link-group">
          <h4>Connect</h4>
          <a href="https://linkedin.com" target="_blank" rel="noopener">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noopener">GitHub</a>
          <a href="https://twitter.com" target="_blank" rel="noopener">X / Twitter</a>
        </div>
      </div>
    </div>

    <div class="container footer-bottom">
      <p class="copyright">© {{ new Date().getFullYear() }} Digital Geyser. All rights reserved.</p>
      <div class="footer-legal">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.footer {
  border-top: 1px solid rgba(99, 102, 241, 0.12);
  padding: 4rem 0 2rem;
  background: #0c0c10;
}

.footer-inner {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 4rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.footer-brand {
  max-width: 260px;
}

.logo {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 1rem;
}

.logo-text {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text);
  letter-spacing: -0.01em;
}

.logo-accent {
  background: linear-gradient(135deg, #a5b4fc, #f472b6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.brand-sub {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.6;
}

.footer-links {
  display: flex;
  gap: 3.5rem;
}

.link-group {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  min-width: 100px;
}

.link-group h4 {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 0.25rem;
}

.link-group a {
  font-size: 0.87rem;
  color: var(--text-secondary);
  transition: color 0.2s;
}

.link-group a:hover {
  color: var(--text);
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.75rem;
}

.copyright {
  font-size: 0.82rem;
  color: var(--text-muted);
}

.footer-legal {
  display: flex;
  gap: 1.5rem;
}

.footer-legal a {
  font-size: 0.82rem;
  color: var(--text-muted);
  transition: color 0.2s;
}

.footer-legal a:hover {
  color: var(--text-secondary);
}

@media (max-width: 768px) {
  .footer-inner {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  .footer-brand {
    max-width: none;
  }
  .footer-links {
    flex-wrap: wrap;
    gap: 2rem;
  }
  .footer-bottom {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}
</style>
