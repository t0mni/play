import { ref } from 'vue'

export function useTypewriter(text: string, speed = 60, delay = 0.7) {
  const displayed = ref('')

  setTimeout(() => {
    let i = 0
    const interval = setInterval(() => {
      displayed.value += text[i]
      i++
      if (i >= text.length) clearInterval(interval)
    }, speed)
  }, delay)

  return displayed
}