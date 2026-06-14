<template>
  <section id="hero" class="hero">
    <!-- Background glow layers -->
    <div class="bg-glow" aria-hidden="true">
      <div class="glow glow-left"/>
      <div class="glow glow-right"/>
    </div>

    <!-- Canvas particle geyser -->
    <canvas ref="canvasRef" class="geyser-canvas" aria-hidden="true"/>

    <!-- Content -->
    <div class="container hero-content">
      <div class="badge-row">
        <span class="section-badge">AI Research &amp; Consulting</span>
      </div>
      <h1 class="hero-title">
        <span class="gradient-text">Intelligence Erupts.</span><br>
        Strategies Flow.
      </h1>
      <p class="hero-sub">
        Digital Geyser channels deep machine learning research into AI systems
        and strategies that transform how organizations operate, compete, and grow.
      </p>
      <div class="hero-ctas">
        <a href="#services" class="btn-primary" @click.prevent="scrollTo('services')">
          Explore Our Services
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M1 7h12M8 3l5 4-5 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
        <a href="#contact" class="btn-secondary" @click.prevent="scrollTo('contact')">Work With Us</a>
      </div>

      <div class="scroll-hint" aria-hidden="true">
        <span class="scroll-line"/>
        <span class="scroll-label">Scroll</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref(null)
let animId = null

const COLORS = [
  [99, 102, 241],
  [139, 92, 246],
  [236, 72, 153],
  [165, 180, 252],
  [244, 114, 182],
]

class Particle {
  constructor(w, h) {
    this.w = w
    this.h = h
    this.reset()
  }

  reset() {
    const cx = this.w / 2
    const sourceY = this.h * 0.82
    this.x = cx + (Math.random() - 0.5) * 44
    this.y = sourceY + (Math.random() - 0.5) * 10
    const speed = 1.8 + Math.random() * 4.2
    const spread = Math.PI / 5.5
    const angle = -Math.PI / 2 + (Math.random() - 0.5) * spread
    this.vx = Math.cos(angle) * speed
    this.vy = Math.sin(angle) * speed
    this.color = COLORS[Math.floor(Math.random() * COLORS.length)]
    this.life = 1.0
    this.decay = 0.005 + Math.random() * 0.012
    this.size = 1 + Math.random() * 2.8
  }

  update() {
    this.x += this.vx
    this.y += this.vy
    this.vy += 0.032
    this.life -= this.decay
    return this.life > 0
  }

  draw(ctx) {
    const [r, g, b] = this.color
    const a = Math.max(0, this.life) * 0.85
    const grd = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 2.8)
    grd.addColorStop(0, `rgba(${r},${g},${b},${a})`)
    grd.addColorStop(1, `rgba(${r},${g},${b},0)`)
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size * 2.8, 0, Math.PI * 2)
    ctx.fillStyle = grd
    ctx.fill()
  }
}

function drawSource(ctx, w, h, t) {
  const cx = w / 2
  const cy = h * 0.82
  const pulse = 0.72 + Math.sin(t * 2.4) * 0.28

  const g1 = ctx.createRadialGradient(cx, cy, 0, cx, cy, 110 * pulse)
  g1.addColorStop(0, `rgba(99,102,241,${0.22 * pulse})`)
  g1.addColorStop(0.45, `rgba(139,92,246,${0.07 * pulse})`)
  g1.addColorStop(1, 'rgba(99,102,241,0)')
  ctx.beginPath()
  ctx.arc(cx, cy, 110 * pulse, 0, Math.PI * 2)
  ctx.fillStyle = g1
  ctx.fill()

  const g2 = ctx.createRadialGradient(cx, cy, 0, cx, cy, 22)
  g2.addColorStop(0, `rgba(210,220,255,${0.95 * pulse})`)
  g2.addColorStop(0.4, `rgba(99,102,241,${0.65 * pulse})`)
  g2.addColorStop(1, 'rgba(99,102,241,0)')
  ctx.beginPath()
  ctx.arc(cx, cy, 22, 0, Math.PI * 2)
  ctx.fillStyle = g2
  ctx.fill()

  // secondary pink pulse
  const g3 = ctx.createRadialGradient(cx, cy, 0, cx, cy, 55 * pulse)
  g3.addColorStop(0, `rgba(236,72,153,${0.08 * pulse})`)
  g3.addColorStop(1, 'rgba(236,72,153,0)')
  ctx.beginPath()
  ctx.arc(cx, cy, 55 * pulse, 0, Math.PI * 2)
  ctx.fillStyle = g3
  ctx.fill()
}

onMounted(() => {
  const canvas = canvasRef.value
  const ctx = canvas.getContext('2d')
  let w = 0
  let h = 0
  let particles = []

  function resize() {
    w = canvas.offsetWidth
    h = canvas.offsetHeight
    canvas.width = w * window.devicePixelRatio
    canvas.height = h * window.devicePixelRatio
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    particles = []
    for (let i = 0; i < 65; i++) {
      const p = new Particle(w, h)
      p.life = Math.random()
      particles.push(p)
    }
  }

  resize()
  window.addEventListener('resize', resize, { passive: true })

  function animate() {
    ctx.clearRect(0, 0, w, h)
    const t = Date.now() / 1000
    drawSource(ctx, w, h, t)

    for (const p of particles) {
      p.draw(ctx)
      if (!p.update()) p.reset()
    }

    animId = requestAnimationFrame(animate)
  }

  animate()

  onUnmounted(() => {
    window.removeEventListener('resize', resize)
    cancelAnimationFrame(animId)
  })
})

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.bg-glow {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.8;
}

.glow-left {
  width: 55vw;
  height: 55vw;
  top: -10%;
  left: -15%;
  background: radial-gradient(ellipse, rgba(99, 102, 241, 0.18) 0%, transparent 65%);
}

.glow-right {
  width: 45vw;
  height: 45vw;
  bottom: 5%;
  right: -10%;
  background: radial-gradient(ellipse, rgba(236, 72, 153, 0.12) 0%, transparent 65%);
}

.geyser-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 8rem 0 6rem;
}

.badge-row {
  margin-bottom: 1.5rem;
}

.hero-title {
  font-size: clamp(2.8rem, 7vw, 5.2rem);
  font-weight: 900;
  letter-spacing: -0.03em;
  line-height: 1.08;
  margin-bottom: 1.5rem;
}

.hero-sub {
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: var(--text-secondary);
  max-width: 50ch;
  margin: 0 auto 2.5rem;
  line-height: 1.75;
}

.hero-ctas {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.scroll-hint {
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  opacity: 0.4;
  animation: fadeInScroll 1s 1.5s ease both;
}

.scroll-line {
  display: block;
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, transparent, var(--text-secondary));
  animation: scrollPulse 2s ease-in-out infinite;
}

.scroll-label {
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--text-muted);
}

@keyframes fadeInScroll {
  from { opacity: 0; transform: translateX(-50%) translateY(10px); }
  to { opacity: 0.4; transform: translateX(-50%) translateY(0); }
}

@keyframes scrollPulse {
  0%, 100% { opacity: 0.4; transform: scaleY(1); }
  50% { opacity: 0.9; transform: scaleY(1.15); }
}

@media (max-width: 768px) {
  .hero-content {
    padding: 7rem 0 5rem;
  }
}
</style>
