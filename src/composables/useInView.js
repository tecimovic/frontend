import { ref, onMounted } from 'vue'

export function useInView(threshold = 0.12) {
  const rootRef = ref(null)
  const isInView = ref(false)

  onMounted(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isInView.value = true
          observer.disconnect()
        }
      },
      { threshold }
    )
    if (rootRef.value) observer.observe(rootRef.value)
  })

  return { rootRef, isInView }
}
