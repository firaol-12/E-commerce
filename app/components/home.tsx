"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import eyeglass1 from "../assets/eyeglass.png"
import eyeglass2 from "../assets/ere.png"
import eyeglass3 from "../assets/hat.png"

const slides = [
  {
    image: eyeglass1,
    heading: "See the World Clearly",
    text: "Premium eyewear, crafted for comfort and style.",
  },
  {
    image: eyeglass2,
    heading: "Frames for Every Face",
    text: "Find the perfect fit from our new collection.",
  },
  {
    image: eyeglass3,
    heading: "Style Meets Precision",
    text: "Lenses engineered for clarity, designed for you.",
  },
]

const AUTOPLAY_MS = 4000

export default function Homes() {
  const [current, setCurrent] = useState(0)

  const goTo = useCallback((index: number) => {
    setCurrent((index + slides.length) % slides.length)
  }, [])

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  // autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length)
    }, AUTOPLAY_MS)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-[480px] md:h-[440px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.heading}
            fill
            priority={index === 0}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col items-start justify-center md:px-40">
            <h1 className="hero-font text-white text-5xl md:text-6xl font-bold">
              {slide.heading}
            </h1>
            <p className="text-white/90 mt-3  comfortaa text-2xl">{slide.text}</p>
            <button className="mt-6 px-6 py-3 bg-white text-black rounded-full font-medium">
              Shop Now
            </button>
          </div>
        </div>
      ))}

      {/* prev / next arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute right-90 bottom-0 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/70 hover:bg-white text-black"
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-40 bottom-0 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/70 hover:bg-white text-black"
      >
        ›
      </button>

      {/* dot indicators */}
      <div className="absolute bottom-8 right-55 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === current ? "bg-white w-6" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}