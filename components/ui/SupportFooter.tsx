import Image from "next/image"
import Button from "@/components/ui/Button"

interface SupportFooterProps {
  reversed?: boolean
}

export default function SupportFooter({ reversed = false }: SupportFooterProps) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between lg:w-[40vw] lg:mx-auto gap-4">
      <div className="flex flex-col lg:flex-row items-center gap-4">
        <div className="flex items-center">
          {[1, 2].map((i) => (
            <div
              key={i}
              className={`w-12 h-12 rounded-full overflow-hidden border-2 -ml-2 first:ml-0 ${reversed ? "border-primary" : "border-light"}`}
            >
              <Image
                src={`/images/Portrait0${i}.jpg`}
                alt={`Support ${i}`}
                width={64}
                height={64}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-1 items-center lg:items-start">
          <p className={`font-medium ${reversed ? "text-white" : ""}`}>Need some help?</p>
          <p className={`links ${reversed ? "text-white lg:text-white/50" : ""}`}>
            We're here to provide support and assistance.
          </p>
        </div>
      </div>
      <Button variant="secondary" reversed={reversed}>Contact us</Button>
    </div>
  )
}