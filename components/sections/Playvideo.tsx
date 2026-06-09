import Image from "next/image"
import Container from "@/components/ui/Container"

export default function Playvideo() {
  return (
    <section className="px-4 pb-4 lg:px-8 lg:py-8">
      <div className="relative overflow-hidden aspect-[3/4] lg:h-200 lg:aspect-[unset]">
        {/* PC用画像 */}
        <Image
          src="/images/Collaborative_Workspace.jpg"
          alt="Collaborative Workspace"
          fill
          className="object-cover hidden lg:block"
        />

        {/* スマホ用画像 */}
        <Image
          src="/images/Collaborative_Workspace_SP.jpg"
          alt="Collaborative Workspace"
          fill
          className="object-cover lg:hidden"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-primary" />

        <div className="absolute inset-0 flex items-stretch lg:py-12 py-6">
          <Container>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between lg:gap-6 h-full">

              {/* テキストdiv 画面幅1728pxに対してテキスト幅が約648px：648 ÷ 1728 = 0.375 = 37.5% */}
              <div className="flex flex-col justify-between lg:justify-start gap-4 w-full lg:w-[37.5vw] h-full lg:h-auto">
                <p className="large text-white">
                  "We didn't just want a tool, we wanted a way to truly change how companies work together."
                </p>
                <div className="flex flex-col gap-1">
                  <h5 className="text-white">Alexandera Pierce and John Meyer</h5>
                  <p className="text-white/70">Founders of Veyra</p>
                </div>
              </div>

              {/* ボタンdiv */}
              <div className="flex justify-between lg:items-center gap-3 lg:self-end">
                <span className="text-white mt-auto">Play video</span>
                <button className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 2L14 8L4 14V2Z" fill="currentColor" />
                  </svg>
                </button>
              </div>

            </div>
          </Container>
        </div>
      </div>
    </section>
  )
}