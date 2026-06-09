import Image from "next/image"
import Container from "@/components/ui/Container"
import Button from "@/components/ui/Button"
import { ArrowUpRight, IconClock } from "@/components/ui/Icons"

const articles = [
    {
        title: "How data transparency builds lasting client trust",
        date: "September 1, 2025",
        readTime: "10 min read",
        image: "/images/blog_1.jpg",
    },
    {
        title: "The future of B2B firms is hybrid services and technology",
        date: "August 19, 2025",
        readTime: "5 min read",
        image: "/images/blog_2.jpg",
    },
    {
        title: "Why agility is becoming the new competitive advantage",
        date: "July 7, 2025",
        readTime: "7 min read",
        image: "/images/blog_3.png",
    },
]

export default function News() {
    return (
        <section className="py-14 lg:px-8 lg:py-28">
            <Container>
                <div className="flex flex-col gap-13 items-center lg:items-stretch">

                    {/* Heading */}
                    <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between w-full gap-4">
                        <div className="flex flex-col gap-4 items-center lg:items-start text-center lg:text-left">
                            <span className="label">Blog</span>
                            <h2>News and insights</h2>
                        </div>
                        <Button size="large" variant="secondary">View all</Button>
                    </div>
                    {/* Articles */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-13 lg:gap-6">
                        {articles.map((article) => (
                            <div key={article.title} className="flex flex-col gap-4">
                                {/* 画像 */}
                                <div className="relative overflow-hidden aspect-article">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* テキスト */}
                                <div className="flex flex-col gap-2">
                                    <div className="flex justify-between ">
                                        <h5>{article.title}</h5>
                                        <button className="w-6 h-6 flex items-center justify-center">
                                            <ArrowUpRight />
                                        </button>
                                    </div>
                                    <div className="flex items-center gap-4 small">
                                        <span>{article.date}</span>
                                        <div className="flex items-center gap-1">
                                            <IconClock />
                                            <span>{article.readTime}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </Container>
        </section>
    )
}