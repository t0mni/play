<template>
    <div class="fixed inset-x-0 top-0 z-50 pointer-events-none">
        <div class="mx-auto px-0">
            <div class="grid grid-cols-12 gap-x-1 h-full">
                <div v-for="(n, i) in 12" :key="n" class="h-full" :class="`bg-neutral-${(n * 100) % 900}`"
                    :style="{ '--i': i }"">
                    <span class=" block text-xs text-center font-monolith cell">{{ n }}</span>
                </div>
            </div>
        </div>
    </div>
    <div class="fixed top-4 right-2 md:right-12 z-[1000]">
        <MenuButton v-model:open="isOpen" />
    </div>
    <!-- frosted overlay -->
    <teleport to="body">
        <Transition name="fade">
            <div v-if="isOpen" class="fixed inset-0 z-[900] bg-white/10 backdrop-blur-sm" aria-hidden="true"
                @click="isOpen = false" />
        </Transition>
        <Transition name="fade">
            <nav v-if="isOpen"
                class="fixed inset-0 z-[950] flex flex-col items-center justify-center text-center text-white font-monolith uppercase tracking-wide space-y-6">
                <a href="#work" class="text-2xl hover:opacity-70 transition line-through">Work</a>
                <a href="#about" class="text-2xl hover:opacity-70 transition line-through">About</a>
                <a href="#experiments" class="text-2xl hover:opacity-70 transition line-through">Experiments</a>
                <a href="mailto:you@example.com" class="text-2xl hover:opacity-70 transition line-through">Contact</a>
            </nav>
        </Transition>
    </teleport>

    <div class="p-0 grid grid-cols-12 gap-x-4 gap-y-10">

        <header class="col-span-12 mb-8 min-h-screen">
            <h1 :style="{ fontFamily: font.family, fontWeight: font.weight, fontStyle: font.style }"
                :class="['fade-in text-9xl -mt-4 text-shadow-2xs transition-all duration-300']"
                style="animation-delay: 1.1s;">
                <template v-if="font.family.includes('TheGoodMonolith')">
                    <span class="tracking-[-0.1em]">P</span><span class="tracking-normal">lay</span><span
                        class="-ml-4">.</span>
                </template>
                <template v-else>
                    Play<span class="-ml-4">.</span>
                </template>
            </h1>

            <div class="fade-in" style="animation-delay:3.5s">
                <p class="text-sm opacity-70 mix-blend-color-burn font-monolith uppercase tracking-wide -mt-4 ml-1">
                    Art · Design · Code<br />
                    <span class="blink">—</span>
                </p>
            </div>
        </header>
        <section ref="sectionRef" class="col-span-12 min-h-screen flex items-center justify-center">

            <main class="col-span-12 md:col-span-8 space-y-12  min-h-screen">

                <p ref="sectionText" class="font-monolith uppercase tracking-wide text-sm">Scroll section</p>

            </main>
        </section>

        <footer
            class="fixed inset-x-0 bottom-2 right-2 md:right-12 col-span-12 p-2.5 text-xs font-monolith tracking-wide transition-opacity duration-700"
            :class="footerReady ? 'opacity-100' : 'opacity-0'">
            <p class="uppercase transition-opacity duration-1000" :class="footerVisible ? 'opacity-20' : 'opacity-0'">
                {{ typedImage }}
            </p>
            <span class="uppercase opacity-20">— <br /> {{ line2 }}</span> <a href="https://github.com/t0mni/"
                target="_blank" class="opacity-20 hover:opacity-100">{{ line3 }}</a>
        </footer>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useTypewriter } from '~/composables/useTypewriter'


const sectionRef = ref<HTMLElement | null>(null)
const sectionText = ref<HTMLElement | null>(null)

const selectedImage = useState('selectedImage')
const typedImage = ref('')
const imageTypeDuration = (selectedImage.value?.length ?? 0) * 60
const line2 = useTypewriter('© ' + new Date().getFullYear(), 60, 2800 + imageTypeDuration)
const line3 = useTypewriter('t0mni', 60, 3200 + imageTypeDuration + ('© ' + new Date().getFullYear() + ' ').length * 60)
const footerReady = ref(false)
const footerVisible = ref(false)
const isOpen = ref(false)
const fonts = [
    { family: '"TheGoodMonolith", sans-serif', weight: 400, style: 'normal' },
    { family: '"Apple Garamond", serif', weight: 400, style: 'italic' },
    { family: '"Helvetica", sans-serif', weight: 700, style: 'normal' },
    { family: '"Apple Garamond", serif', weight: 300, style: 'normal' },
    { family: '"Maria", serif', weight: 300, style: 'normal' },
    { family: '"Josefin Sans", sans-serif', weight: 700, style: 'normal' }
]
const font = ref(fonts[0])

watch(selectedImage, (val) => {
    console.log('selectedImage changed:', val)

    if (!val) return
    typedImage.value = ''
    setTimeout(() => {
        footerVisible.value = true
        let i = 0
        const interval = setInterval(() => {
            typedImage.value += val[i]
            i++
            if (i >= val.length) {
                clearInterval(interval)
                setTimeout(() => {
                    footerVisible.value = false
                }, 5000)
            }
        }, 60)
    }, 1000)
})

watch(isOpen, v => {
    document.documentElement.classList.toggle('overflow-hidden', v)
})

onMounted(() => {


    import('gsap').then(async ({ gsap }) => {
        const { ScrollTrigger } = await import('gsap/ScrollTrigger')
        gsap.registerPlugin(ScrollTrigger)


        gsap.from(sectionText.value, {
            opacity: 0,
            y: 25,
            duration: 10,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: sectionRef.value,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
                markers: false
            }
        })
    })



    setTimeout(() => {
        footerReady.value = true
    }, 1000)

    let i = 0
    let delay = 80
    const totalCycles = 14
    const slowFactor = 1.1

    function cycle() {
        font.value = fonts[i % fonts.length]
        i++
        if (i < totalCycles) {
            setTimeout(cycle, delay)
            delay *= slowFactor
        } else {
            const random = Math.floor(Math.random() * fonts.length)
            font.value = fonts[random]
        }
    }

    setTimeout(cycle, 900)
})
</script>