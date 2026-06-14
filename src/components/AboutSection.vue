<template>
  <section id="about" class="about-section" ref="rootRef">
    <div class="container">
      <div class="about-grid">
        <!-- Left: copy -->
        <div class="about-copy">
          <span class="section-badge">About</span>
          <h2 class="section-title" :class="['animate-up', isInView ? 'in-view' : '']">
            The Force<br>
            <span class="gradient-text">Below the Surface</span>
          </h2>
          <p class="section-sub" :class="['animate-up d1', isInView ? 'in-view' : '']">
            Most AI projects fail not because the technology doesn't exist — but because
            the gap between research and reality is never bridged. Digital Geyser
            was founded to close that gap.
          </p>
          <p class="section-sub about-p2" :class="['animate-up d2', isInView ? 'in-view' : '']">
            We're a team of ML researchers, systems engineers, and strategic advisors
            who have lived on both sides: the cutting edge of academic research and the
            messy reality of production systems. Just as a geyser channels underground
            heat into a surface eruption, we channel deep expertise into results
            organizations can actually see and feel.
          </p>
        </div>

        <!-- Right: stats -->
        <div class="stats-grid" :class="['animate-up d2', isInView ? 'in-view' : '']">
          <div class="stat-card card" v-for="stat in stats" :key="stat.label">
            <div class="stat-value">
              <span class="gradient-text-accent">{{ stat.value }}</span>
            </div>
            <div class="stat-label">{{ stat.label }}</div>
            <div class="stat-desc">{{ stat.desc }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useInView } from '../composables/useInView.js'

const { rootRef, isInView } = useInView()

const stats = [
  { value: '12+', label: 'Years of Research', desc: 'Combined expertise across NLP, CV, and RL' },
  { value: '200+', label: 'Models Deployed', desc: 'Production AI systems across industries' },
  { value: '40+', label: 'Enterprise Partners', desc: 'From seed-stage startups to Fortune 500' },
  { value: '$2B+', label: 'Client Value Created', desc: 'Measurable impact attributed to our work' },
]
</script>

<style scoped>
.about-section {
  padding: clamp(5rem, 10vw, 8rem) 0;
  position: relative;
}

.about-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.25), transparent);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
}

.about-copy {
  max-width: 520px;
}

.about-p2 {
  margin-top: 1rem;
  transition-delay: 0.25s;
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}

.stat-card {
  padding: 1.75rem;
  position: relative;
  overflow: hidden;
}

.stat-card::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--purple), var(--pink));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.stat-card:hover::after {
  opacity: 1;
}

.stat-value {
  font-size: 2.2rem;
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 0.35rem;
}

.stat-desc {
  font-size: 0.78rem;
  color: var(--text-muted);
  line-height: 1.5;
}

@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  .about-copy {
    max-width: none;
  }
}

@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>
