import Container from "@/components/ui/Container"
import Button from "@/components/ui/Button"
import { Logo } from "@/components/ui/Icons"

const navColumns = [
  {
    title: "Product",
    links: ["Advisory", "Implementation", "Workflow Design", "Training & Support"],
  },
  {
    title: "Solutions",
    links: ["Data Integration", "Automation", "Collaboration Tools", "Security"],
  },
  {
    title: "Company",
    links: ["About", "Careers"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of use", "Compliance"],
  },
  {
    title: "Socials",
    links: ["X/Twitter", "Instagram", "LinkedIn"],
  },
]

export default function Footer() {
  return (
    <footer className="bg-primary pt-16 pb-6 lg:px-8 lg:py-28">
      <Container>
        <div className="flex flex-col gap-8 lg:gap-18">

          {/* ロゴ */}
          <Logo className="text-white" />

          {/* H2 + テキスト&ボタン */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            <h2 className="text-white">
              Shaping the Future of<br />Smarter Work
            </h2>
            <div className="flex flex-col gap-6 max-w-100">
              <p className="text-white">
                Veyra combines consulting expertise with powerful technology to help businesses streamline operations, improve decision-making, and scale with confidence.
              </p>
              <div>
                <Button size="large" variant="secondary" reversed icon>Request a demo</Button>
              </div>
            </div>
          </div>

          {/* ナビリンク */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 py-8 lg:py-40">
            {navColumns.map((col) => (
              <div key={col.title} className="flex flex-col gap-4">
                <p className="links text-white">{col.title}</p>
                <div className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    
                     <a key={link}
                      href="#"
                      className="links text-white/50 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Line + コピーライト */}
          <div className="flex flex-col gap-6">
            <div className="border-t border-white/10" />
            <p className="small text-white/50">© Copyright 2025. All Rights Reserved.</p>
          </div>

        </div>
      </Container>
    </footer>
  )
}