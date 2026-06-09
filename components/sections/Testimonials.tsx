"use client"

import Image from "next/image"
import { useState, useRef } from "react"
import Container from "@/components/ui/Container"
import { ArrowRight, IconYood } from "@/components/ui/Icons"

const PlaceholderPortrait = () => (
  <div className="w-full h-full bg-primary/10 flex items-center justify-center">
    <span className="text-primary/30">Photo</span>
  </div>
)

const testimonials = [
  {
    image: "/images/Woman_in_Navy Blazer.jpg",
    useImage: true,
    quote: "Veyra has given us the clarity we were missing. It brought all our workflows into one place, connected our teams instantly, and made decision-making faster than ever.",
    subQuote: '"Before Veyra, we spent hours reconciling data across tools and chasing updates between departments. Now, everything syncs automatically, and our client delivery has never been smoother."',
    name: "Samantha Lee",
    role: "Head of Operations at Yood Partners",
    icon: <IconYood />,
  },
  {
    image: "",
    useImage: false,
    quote: "The platform transformed how our team collaborates. We went from chaos to clarity in just a few weeks.",
    subQuote: '"Every decision is now backed by real data. Veyra made that possible for us without any extra effort."',
    name: "James Carter",
    role: "CEO at Nimbus Group",
    icon: <IconYood />,
  },
  {
    image: "",
    useImage: false,
    quote: "We scaled our operations by 3x without adding headcount. Veyra's automation took care of everything.",
    subQuote: '"The onboarding was seamless and the results were immediate. I recommend it to every founder I know."',
    name: "Maria Gonzalez",
    role: "COO at Atlas Ventures",
    icon: <IconYood />,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const dragStart = useRef<number | null>(null)

  const prev = () => { if (current > 0) setCurrent((p) => p - 1) }
  const next = () => { if (current < testimonials.length - 1) setCurrent((p) => p + 1) }

  const handleMouseDown = (e: React.MouseEvent) => {
    dragStart.current = e.clientX
  }

  const handleMouseUp = (e: React.MouseEvent) => {
    if (dragStart.current === null) return
    const diff = dragStart.current - e.clientX
    if (diff > 50) next()
    if (diff < -50) prev()
    dragStart.current = null
  }

  const t = testimonials[current]
  const isFirst = current === 0
  const isLast = current === testimonials.length - 1

  return (
    <section className="bg-light lg:px-8 py-28">
      <Container>
        <div className="flex flex-col gap-18">

          {/* ヘッダー */}
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-4">
              <span className="label">Testimonials</span>
              <h2>What Customers Say<br />About Veyra</h2>
            </div>
            <div className="flex items-center gap-2 mt-auto">
              <button
                onClick={prev}
                disabled={isFirst}
                className={`w-10 h-10 flex items-center justify-center border rotate-180 transition-all
                  ${isFirst
                    ? "bg-primary/2.5 border-primary/2.5 text-primary/20"
                    : "bg-primary/5 border-primary/5 text-primary hover:bg-primary/10"
                  }`}
              >
                <ArrowRight />
              </button>
              <button
                onClick={next}
                disabled={isLast}
                className={`w-10 h-10 flex items-center justify-center border transition-all
                  ${isLast
                    ? "bg-primary/2.5 border-primary/2.5 text-primary/20"
                    : "bg-primary/5 border-primary/5 text-primary hover:bg-primary/10"
                  }`}
              >
                <ArrowRight />
              </button>
            </div>
          </div>

          {/* カード */}
          <div
            className="flex flex-col lg:flex-row gap-6 cursor-grab active:cursor-grabbing select-none"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
          >
            {/* 左: 人物画像 */}
            <div className="w-full lg:w-112 aspect-portrait lg:aspect-auto lg:h-130 shrink-0 overflow-hidden">

              {t.useImage ? (
                <Image
                  src={t.image}
                  alt={t.name}
                  width={448}
                  height={520}
                  className="object-cover w-full h-full"
                />
              ) : (
                <PlaceholderPortrait />
              )}
            </div>
            {/* 右: テキスト */}
            <div className="w-full aspect-testimonial lg:h-[520px] bg-primary lg:p-10 p-6 flex flex-col justify-between lg:flex-1">
              <div className="flex flex-col gap-6 max-w-[648px]">
                <p className="large text-white">{t.quote}</p>
                <p className="text-white/70">{t.subQuote}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 shrink-0">{t.icon}</div>
                <div className="flex flex-col gap-1">
                  <h5 className="text-white">{t.name}</h5>
                  <p className="text-white/70">{t.role}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}