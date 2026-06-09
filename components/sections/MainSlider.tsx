import Container from "@/components/ui/Container"
import { IconSparkle, IconShield, IconSmile } from "@/components/ui/Icons"

const items = [
  {
    icon: <IconSparkle />,
    title: "Insight Without the Noise",
    body: "Cut through complexity with clear, actionable intelligence built for decision-makers.",
  },
  {
    icon: <IconShield />,
    title: "Security at Every Layer",
    body: "From data handling to deployment, every detail is designed to protect what matters most.",
  },
  {
    icon: <IconSmile />,
    title: "Built Around People",
    body: "Tools and workflows shaped to how your teams actually work — not the other way around.",
  },
]

export default function MainSlider() {
  return (
    <section className="bg-light py-18">
      <Container>
        <div className="flex flex-col lg:flex-row gap-6">
          {items.map((item) => (
            <div key={item.title} className="flex-1 flex flex-col gap-6">
              <div className="bg-primary flex items-center justify-center text-white shrink-0 w-10 h-10 p-2">
                {item.icon}
              </div>
              <div className="flex flex-col gap-1">
                <h5>{item.title}</h5>
                <p className="text-primary/70">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}