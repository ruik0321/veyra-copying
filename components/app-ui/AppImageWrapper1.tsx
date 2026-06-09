import Image from "next/image"
import { ArrowUpRight } from "@/components/ui/Icons"

export default function AppImageWrapper1() {
    return (
        <div className="bg-white rounded-lg p-6 w-[424px] shadow-sm flex flex-col gap-6">

            {/* ヘッダー：アバター + 名前 + ボタン */}
            <div className="flex justify-between items-center gap-4">
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden">
                        <Image
                            src="/images/portrait01.jpg"
                            alt="Jane Smith"
                            width={62}
                            height={62}
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="flex flex-col gap-0.5">
                        <p className="app-name">Jane Smith</p>
                        <p className="app-subtitle">Project Manager</p>
                    </div>
                </div>

                <button className="w-9 h-9 rounded-full bg-primary/5 flex items-center justify-center">
                    <ArrowUpRight />
                </button>
            </div>

            {/* タブ・リスト・ボタン */}
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    {/* タブ */}
                    <div className="flex gap-6 app-body">
                        {["Projects", "Results", "Details"].map((tab) => (
                            <button
                                key={tab}
                                className={`pb-2 text-sm ${tab === "Projects" ? "border-b-2 border-primary" : "text-primary/50"}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* リスト */}
                    <div className="flex flex-col">
                        {[
                            { name: "Nimbus", progress: "90% Complete" },
                            { name: "Atlas", progress: "20% Complete" },
                        ].map((item) => (
                            <div key={item.name} className="flex items-center justify-between py-4 border-b border-primary-20">
                                <div className="flex items-center gap-2">
                                    <div className="w-[22px] h-[22px] rounded-full border-2 border-primary-20" />
                                    <span className="app-item">{item.name}</span>
                                </div>
                                <span className="app-body">{item.progress}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ボタン */}
                <button className="w-full h-12 bg-primary text-white rounded-full">
                    Start now
                </button>
            </div>


        </div>
    )
}