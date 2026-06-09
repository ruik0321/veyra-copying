"use client"

import { useState } from "react"
import Image from "next/image"
import Container from "@/components/ui/Container"
import SupportFooter from "@/components/ui/SupportFooter"
import { IconX, PlusIcon } from "@/components/ui/Icons"

const faqs = [
  {
    question: "How quickly can we get started with Veyra?",
    answer: "Most firms are up and running within a single day. Our streamlined onboarding process ensures that setup is fast, data is synced quickly, and your team can start working with the platform right away, no lengthy implementations required.",
  },
  {
    question: "Does the platform integrate with tools like Slack, Teams, or Salesforce?",
    answer: "Yes, Veyra integrates seamlessly with all major productivity and CRM tools including Slack, Microsoft Teams, Salesforce, and many more.",
  },
  {
    question: "Can Veyra scale as our business grows?",
    answer: "Absolutely. Veyra is built to scale with your organization, from small teams to enterprise-level operations without any disruption.",
  },
  {
    question: "What kind of security measures are in place to protect our data?",
    answer: "We use enterprise-grade encryption, SOC 2 compliance, and regular security audits to ensure your data is always protected.",
  },
  {
    question: "Do you provide training for new users after setup?",
    answer: "Yes, we provide comprehensive onboarding sessions, documentation, and ongoing support to ensure your team gets the most out of Veyra.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="lg:px-8 py-16 lg:py-28">
      <Container>
        <div className="flex flex-col gap-14">

          {/* Heading */}
          <div className="flex flex-col gap-4">
            <span className="label">Frequently Asked Questions</span>
            <h2>Find clear answers to<br />common questions.</h2>
          </div>

          {/* Questions */}
          <div className="flex flex-col">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`border-b py-6 ${openIndex === i ? "border-primary/50" : "border-primary/10"}`}
              >
                <button
                  className="w-full flex items-center justify-between text-left gap-4"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <h5>{faq.question}</h5>
                  <span className="shrink-0 text-primary">
                    {openIndex === i ? <IconX /> : <PlusIcon />}
                  </span>
                </button>
                {openIndex === i && (
                  <p
                    className="mt-4 text-primary/70 cursor-pointer"
                    onClick={() => setOpenIndex(null)}
                  >
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
          <SupportFooter />
        </div>
      </Container>
    </section>
  )
}