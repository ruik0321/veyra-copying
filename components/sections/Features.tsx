import Container from "@/components/ui/Container"

// プレースホルダー
const AppPlaceholder = () => (
  <div className="w-full h-[400px] bg-primary/5 flex items-center justify-center">
    <span className="text-primary-20">App UI</span>
  </div>
)

type FeatureSection = {
  id: number
  reversed: boolean
  h2: string
  subheadings: React.ReactNode[]
  appUI: React.ReactNode
}

const featureSections: FeatureSection[] = [
  {
    id: 2,
    reversed: false,
    h2: "Custom Intelligence Built for Modern Business",
    subheadings: [
      <>AI models designed around the unique needs of<br className="hidden lg:block" />{" "}professional firms, combining industry knowledge<br className="hidden lg:block" />{" "} with advanced reasoning.</>,
    ],
    appUI: <AppPlaceholder />,
  },
  {
    id: 3,
    reversed: true,
    h2: "Accurate, Real-Time Insights Across Every System",
    subheadings: [
      <>Keep your data synchronized across systems,<br className="hidden lg:block" />{" "}ensuring every decision is backed by reliable, up-to-date information.</>,
      <>Gain a single source of truth that eliminates silos and<br className="hidden lg:block" />{" "} helps your teams move with confidence.</>,
    ],
    appUI: <AppPlaceholder />,
  },
  {
    id: 4,
    reversed: false,
    h2: "Workflows Designed to Empower Growing Teams",
    subheadings: [
      <>Streamline reporting, analysis, and collaboration with<br className="hidden lg:block" />{" "}tools built to fit the way modern firms actually work.</>,
    ],
    appUI: <AppPlaceholder />,
  },
]

const resultItems = [
  {
    label: "CLIENTS",
    number: "500+",
    title: "Trusted Partnerships",
    body: "Over 500 firms rely on our expertise and technology to modernize operations and deliver measurable results.",
  },
  {
    label: "EFFICIENCY GAINS",
    number: "70%",
    title: "Smarter Workflows",
    body: "Firms achieve up to 70% greater efficiency by replacing manual processes with streamlined, automated systems.",
  },
  {
    label: "SPEED TO DELIVERY",
    number: "5x",
    title: "Faster Execution",
    body: "Teams complete projects three times faster with integrated tools that eliminate bottlenecks, reduce errors, and minimize delays.",
  },
  {
    label: "SATISFACTION RATE",
    number: "98%",
    title: "Client Success Rate",
    body: "Nearly all of our clients report improved collaboration, clearer insights, and stronger outcomes across the board.",
  },
]

export default function Features() {
  return (
    <>
      {/* Feature 1 */}
      <section className="px-8 py-28">
        <div>
          <h2 className="text-center mx-auto">
            Modern challenges demand modern solutions. Our<br className="hidden lg:block" />{" "}
            approach combines deep expertise with technology<br className="hidden lg:block" />{" "}
            designed to replace outdated systems and manual work.
          </h2>
        </div>
      </section>

      {/* Feature 2-4 */}
      {featureSections.map((section) => (
        <section key={section.id} className="py-8 lg:py-18">
          <Container>
            <div className={`flex gap-6 items-center ${section.reversed ? "lg:flex-row-reverse" : ""} flex-col lg:flex-row`}>
              <div className="flex flex-col gap-6" style={{ flex: '0 0 35%' }}>
                <h2>{section.h2}</h2>
                {section.subheadings.map((text, i) => (
                  <p key={i} className="text-primary/70">{text}</p>
                ))}
              </div>

              {/* 画像側 */}
              <div className="flex-1 bg-light w-full lg:w-auto lg:h-[520px] flex items-center justify-center">
                {section.appUI}
              </div>
            </div>
          </Container>
        </section>
      ))}

      {/* Feature 5 (Results) */}
      <section className="py-14 lg:py-16">
        <Container>
          <div className="flex flex-col gap-[72px]">
            {/* 見出し */}
            <div className="flex flex-col gap-6 items-center text-center">
              <h2>
                Enterprise Results, Backed<br />by Real Numbers
              </h2>
              <p className="subheading text-primary/70">
                We measure success not just in promises, but in outcomes.
              </p>
              {/* Stars */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M10 1L12.39 7.26L19 7.27L13.81 11.14L15.82 17.27L10 13.77L4.18 17.27L6.19 11.14L1 7.27L7.61 7.26L10 1Z" fill="currentColor" />
                    </svg>
                  ))}
                </div>
                <span className="small">
                  Rated 4.9/5 from 300+ reviews
                </span>
              </div>
            </div>

            {/* 下: 4カード */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {resultItems.map((item) => (
                <div key={item.label} className="flex flex-col p-6 bg-light">
                  <div className="flex flex-col gap-12">
                    <div className="flex flex-col gap-2">
                      <span className="label">
                        {item.label}
                      </span>
                      <h3>
                        {item.number}
                      </h3>
                    </div>
                    <div className="flex flex-col gap-4">
                      <h5>
                        {item.title}
                      </h5>
                      <p className="text-primary/70">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}