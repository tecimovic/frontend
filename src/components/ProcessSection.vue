<template>
  <section id="process" class="process-section" ref="rootRef">
    <div class="container">
      <div class="section-header centered">
        <span class="section-badge">Our Process</span>
        <h2 class="section-title" :class="['animate-up', isInView ? 'in-view' : '']">
          How We <span class="gradient-text">Work</span>
        </h2>
        <p class="section-sub" :class="['animate-up d1', isInView ? 'in-view' : '']">
          Every engagement follows the same disciplined path — from honest discovery
          to production systems your team fully owns.
        </p>
      </div>

      <div class="steps-wrapper">
        <div class="connector-line" aria-hidden="true"/>
        <div class="steps">
          <div
            v-for="(step, i) in steps"
            :key="step.title"
            class="step"
            :class="['animate-up', isInView ? 'in-view' : '', `d${i + 1}`]"
          >
            <div class="step-number" :style="{ background: step.numBg }">
              <span>{{ String(i + 1).padStart(2, '0') }}</span>
            </div>
            <div class="step-icon" v-html="step.icon"/>
            <h3 class="step-title">{{ step.title }}</h3>
            <p class="step-desc">{{ step.desc }}</p>
            <div class="step-duration">{{ step.duration }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useInView } from '../composables/useInView.js'

const { rootRef, isInView } = useInView()

const steps = [
  {
    title: 'Discover',
    desc: 'We immerse in your organization: your data, your workflows, your constraints. In two weeks we deliver a clear-eyed AI opportunity map with prioritized impact and effort.',
    duration: '~2 weeks',
    numBg: 'linear-gradient(135deg, rgba(99,102,241,0.18), rgba(99,102,241,0.06))',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  },
  {
    title: 'Design',
    desc: 'We architect a system built for your reality: the right models, the right infrastructure, the right integration patterns. No over-engineering. No under-thinking.',
    duration: '2–4 weeks',
    numBg: 'linear-gradient(135deg, rgba(139,92,246,0.18), rgba(139,92,246,0.06))',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
  },
  {
    title: 'Deploy',
    desc: 'We ship — then we stay. Production deployment with monitoring, iteration cycles, and your team fully trained to own the system long after we\'ve left the room.',
    duration: '4–12 weeks',
    numBg: 'linear-gradient(135deg, rgba(236,72,153,0.18), rgba(236,72,153,0.06))',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2L11 13"/><path d="M22 2L15 22 11 13 2 9l20-7z"/></svg>`,
  },
]
</script>

<style scoped>
.process-section {
  padding: clamp(5rem, 10vw, 8rem) 0;
  position: relative;
}

.process-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 80% 60% at 50% 50%, rgba(99, 102, 241, 0.05) 0%, transparent 60%);
  pointer-events: none;
}

.section-header.centered {
  text-align: center;
  margin: 0 auto 4rem;
  max-width: 560px;
}

.section-header.centered .section-sub {
  margin: 0 auto;
}

.steps-wrapper {
  position: relative;
}

.connector-line {
  position: absolute;
  top: 42px;
  left: calc(50% - calc(var(--container) / 2) + calc(var(--container) / 6) + 26px);
  right: calc(50% - calc(var(--container) / 2) + calc(var(--container) / 6) + 26px);
  height: 1px;
  background: linear-gradient(90deg, rgba(99,102,241,0.4), rgba(236,72,153,0.4));
}

.steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;
  padding: 2rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  position: relative;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
}

.step:hover {
  border-color: var(--border-hover);
  box-shadow: 0 16px 48px rgba(99, 102, 241, 0.1);
}

.step-number {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
  border: 1px solid rgba(99, 102, 241, 0.2);
  flex-shrink: 0;
}

.step-number span {
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  background: linear-gradient(135deg, var(--purple-light), var(--pink-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.step-icon {
  color: var(--purple-light);
  margin-bottom: 1.25rem;
  opacity: 0.7;
}

.step-title {
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--text);
  margin-bottom: 0.75rem;
}

.step-desc {
  font-size: 0.88rem;
  color: var(--text-secondary);
  line-height: 1.7;
  flex: 1;
  margin-bottom: 1.25rem;
}

.step-duration {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-muted);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.07);
  padding: 0.25em 0.75em;
  border-radius: 999px;
  letter-spacing: 0.04em;
  margin-top: auto;
}

@media (max-width: 900px) {
  .connector-line { display: none; }
  .steps {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
}
</style>
