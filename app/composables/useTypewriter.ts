import { onBeforeUnmount, onMounted, ref } from 'vue'

export function useTypewriter(
  text: string,
  speed = 60,
  delay = 750
) {
  const displayed = ref('')

  let timeoutId: ReturnType<typeof setTimeout> | undefined
  let intervalId: ReturnType<typeof setInterval> | undefined

  onMounted(() => {
    timeoutId = setTimeout(() => {
      let index = 0

      intervalId = setInterval(() => {
        displayed.value += text.charAt(index)
        index++

        if (index >= text.length && intervalId !== undefined) {
          clearInterval(intervalId)
          intervalId = undefined
        }
      }, speed)
    }, delay)
  })

  onBeforeUnmount(() => {
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId)
    }

    if (intervalId !== undefined) {
      clearInterval(intervalId)
    }
  })

  return displayed
}