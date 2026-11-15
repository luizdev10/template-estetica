import { useEffect, useRef, useState } from "react"

export function useReveal({ threshold = 0.2, rootMargin = "0px 0px -10% 0px" } = {}) {
    const ref = useRef(null)
    const [visivel, setVisivel] = useState(false)

    useEffect(() => {
        const elemento = ref.current
        if (!elemento) return

        const prefereMenosMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        if (prefereMenosMovimento || !("IntersectionObserver" in window)) {
            setVisivel(true)
            return
        }

        const observador = new IntersectionObserver(
            ([entrada]) => {
                if (entrada.isIntersecting) {
                    setVisivel(true)
                    observador.unobserve(elemento)
                }
            },
            { threshold, rootMargin }
        )

        observador.observe(elemento)

        const reserva = setTimeout(() => {
            if (elemento.getBoundingClientRect().top < window.innerHeight) setVisivel(true)
        }, 2500)

        return () => {
            clearTimeout(reserva)
            observador.disconnect()
        }
    }, [threshold, rootMargin])

    return [ref, visivel]
}
