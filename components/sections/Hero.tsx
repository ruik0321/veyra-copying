import Image from "next/image"
import Button from "@/components/ui/Button"
import { ArrowUpRight } from "@/components/ui/Icons"
import Container from "@/components/ui/Container"
import AppImageWrapper1 from "@/components/app-ui/AppImageWrapper1"


export default function Hero() {
  return (
    <section className="bg-light pt-18 pb-12">
      <Container>
        <div className="flex flex-col gap-10">

          {/* 上コンテナ */}
          <div className="flex flex-col gap-10 items-center text-center">
            <h1>
              Building the <em className="italic">Infrastructure</em>{" "}<br className="lg:hidden" />for<br className="hidden lg:block" />{" "}
              <em className="italic">Better Decisions</em>
            </h1>

            <p className="subheading text-primary/70">
              We help companies streamline workflows,{" "}<br className="lg:hidden" />align teams, and make<br className="hidden lg:block" />
              smarter decisions{" "}<br className="lg:hidden" />with expert guidance and our platform.
            </p>

            <div className="flex flex-col lg:flex-row items-stretch items-center gap-3 w-full lg:w-auto">
              <Button size="large" className="justify-center">Get started</Button>
              <Button variant="secondary" size="large" icon className="justify-center">Request a demo</Button>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-3">
              <span className="label">
                Backed by Top Industry Leaders
              </span>
              <div className="flex items-center">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border border-light overflow-hidden -ml-2 first:ml-0"
                  >
                    <Image
                      src={`/images/portrait0${i}.jpg`}
                      alt={`Leader ${i}`}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 下コンテナ */}
          <div className="flex gap-6 flex-col lg:flex-row">

            {/* カード比率はFigmaより  カード1: 920×560、カード2: 448×560  カード2の幅: 448 / (920 + 448 + 24gap) = 約32% */}

            {/* カード1 */}
            <div className="relative flex-1 overflow-hidden bg-primary aspect-[448/560] lg:aspect-[920/560]">
              <Image src="/images/main01.jpg" alt="For Enterprise Teams" fill className="object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary" />
              <div className="absolute inset-0 flex flex-col justify-between p-8">
                <h5 className="text-white">For Enterprise Teams</h5>
                <div className="flex items-end justify-between">
                  <p className="text-white/70 max-w-80">
                    Secure, flexible deployment tailored to critical infrastructure and business needs.
                  </p>
                  <button className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/5 text-white shrink-0">
                    <ArrowUpRight />
                  </button>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div style={{ transform: 'scale(0.75)', transformOrigin: 'center' }}>
                  <AppImageWrapper1 />
                </div>
              </div>
            </div>

            {/* カード2 */}
            <div className="relative overflow-hidden bg-primary aspect-[448/560] lg:w-[32%]">
              <Image src="/images/main02.jpg" alt="For Startups" fill className="object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary" />
              <div className="absolute inset-0 flex flex-col justify-between p-8">
                <h5 className="text-white">For Startups</h5>
                <div className="flex items-end justify-between">
                  <p className="text-white/70 max-w-80">
                    Streamline workflows, uncover insights, and scale with confidence.
                  </p>
                  <button className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/5 text-white shrink-0">
                    <ArrowUpRight />
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </Container>
    </section>
  )
}