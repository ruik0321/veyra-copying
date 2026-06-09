import SupportFooter from "@/components/ui/SupportFooter"
import Container from "@/components/ui/Container"
import { Logo } from "@/components/ui/Icons"
import { IconCheck, IconX } from "@/components/ui/Icons"

type Row = {
  feature: string
  veyra: React.ReactNode
  competitor: React.ReactNode
}

const rows: Row[] = [
  { feature: "Onboarding time", veyra: "1 day", competitor: "3-5 days" },
  { feature: "Data Accuracy", veyra: <IconCheck />, competitor: "So and so" },
  { feature: "Workflow Automation", veyra: <IconCheck />, competitor: <IconX /> },
  { feature: "Predictive Insights", veyra: <IconCheck />, competitor: "1 day" },
  { feature: "Implementation Cost", veyra: "Included", competitor: "Extra fees" },
  { feature: "Collaboration Tools", veyra: <IconCheck />, competitor: <IconX /> },
  { feature: "Customizable Dashboards", veyra: <IconCheck />, competitor: <IconX /> },
  { feature: "Security & Compliance", veyra: "Premium", competitor: "Basic" },
  { feature: "Client Support", veyra: "Unlimited", competitor: "Basic" },
]

export default function Pricing() {
  return (
    <section className="bg-primary lg:px-8 py-28">
      <Container>
        <div className="flex flex-col gap-18">

          {/* Heading */}
          <div className="flex flex-col gap-6 items-center text-center">
            <span className="label text-white">Product Comparison</span>
            <h2 className="text-white">
              What makes us better than<br />the competition?
            </h2>
          </div>

          {/* テーブル */}
          <div className="flex flex-col">
            {/* ヘッダー行 */}
            <div className="grid grid-cols-3 py-6 border-b border-white/10">
              <div />
              <div className="flex items-center justify-center text-white">
                <Logo />
              </div>
              <div className="flex items-center justify-center text-white">
                <h5>Competitor</h5>
              </div>
            </div>

            {/* 各行 */}
            {rows.map((row) => (
              <div key={row.feature} className="grid grid-cols-3 py-6 border-b border-white/10 text-white">
                <h5>{row.feature}</h5>
                <div className="flex items-center justify-center">{row.veyra}</div>
                <div className="flex items-center justify-center">{row.competitor}</div>
              </div>
            ))}
          </div>
          <SupportFooter reversed />
        </div>
      </Container>
    </section >
  )
}