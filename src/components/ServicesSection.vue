<template>
  <section id="services" class="services-section" ref="rootRef">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">Services</span>
        <h2 class="section-title" :class="['animate-up', isInView ? 'in-view' : '']">
          What We <span class="gradient-text">Do Best</span>
        </h2>
        <p class="section-sub" :class="['animate-up d1', isInView ? 'in-view' : '']">
          From frontier research to production deployment — we cover the full spectrum
          of what it takes to build AI that actually works in the real world.
        </p>
      </div>

      <div class="services-grid">
        <div
          v-for="(service, i) in services"
          :key="service.title"
          class="service-card card"
          :class="['animate-up', isInView ? 'in-view' : '', `d${i + 1}`]"
        >
          <div class="service-icon" :style="{ background: service.iconBg }">
            <span v-html="service.icon"/>
          </div>
          <h3 class="service-title">{{ service.title }}</h3>
          <p class="service-desc">{{ service.desc }}</p>
          <div class="service-tags">
            <span v-for="tag in service.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useInView } from '../composables/useInView.js'

const { rootRef, isInView } = useInView()

const services = [
  {
    title: 'AI Research & Development',
    desc: 'We conduct and publish original research across large language models, multimodal AI, and reinforcement learning. Our findings are peer-reviewed and built to be production-ready.',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18"/></svg>`,
    iconBg: 'rgba(99, 102, 241, 0.12)',
    tags: ['NLP', 'Computer Vision', 'RL', 'LLMs'],
  },
  {
    title: 'Strategic AI Consulting',
    desc: 'We embed inside your organization to map where AI creates the most leverage, build a phased roadmap, and guide implementation from proof-of-concept to full deployment.',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
    iconBg: 'rgba(139, 92, 246, 0.12)',
    tags: ['Roadmapping', 'ROI Analysis', 'Risk Assessment'],
  },
  {
    title: 'Custom Model Development',
    desc: 'Off-the-shelf models rarely fit complex domains. We design, fine-tune, and train models purpose-built for your data, your domain, and your operational constraints.',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>`,
    iconBg: 'rgba(236, 72, 153, 0.12)',
    tags: ['Fine-tuning', 'RAG', 'Custom Architectures'],
  },
  {
    title: 'Training & Enablement',
    desc: 'We run executive workshops, technical bootcamps, and ongoing team programs that make AI fluency a core organizational capability — not just a one-off project.',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    iconBg: 'rgba(244, 114, 182, 0.12)',
    tags: ['Workshops', 'Team Training', 'Executive Programs'],
  },
]
</script>

<style scoped>
.services-section {
  padding: clamp(5rem, 10vw, 8rem) 0;
  position: relative;
}

.section-header {
  max-width: 560px;
  margin-bottom: 3.5rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.service-card {
  padding: 2.25rem;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.service-icon {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
  color: var(--purple-light);
  flex-shrink: 0;
  border: 1px solid rgba(99, 102, 241, 0.18);
}

.service-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 0.75rem;
  letter-spacing: -0.01em;
}

.service-desc {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.7;
  flex: 1;
  margin-bottom: 1.5rem;
}

.service-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: auto;
}

.tag {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  padding: 0.25em 0.75em;
  background: rgba(99, 102, 241, 0.08);
  border: 1px solid rgba(99, 102, 241, 0.18);
  border-radius: 999px;
  color: var(--purple-light);
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>
