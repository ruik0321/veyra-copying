"use client"

import { useState } from "react"
import Button from "@/components/ui/Button"
import { Logo } from "@/components/ui/Icons"
import Container from "@/components/ui/Container"

const navLinks = ["Home", "Pages", "Info", "More Templates"]

const HamburgerIcon = ({ open }: { open: boolean }) => (
  <div className="flex flex-col gap-1.5 w-5">
    <span className={`bar ${open ? "rotate-45 translate-y-2" : ""}`} />
    <span className={`bar ${open ? "opacity-0" : ""}`} />
    <span className={`bar ${open ? "-rotate-45 -translate-y-2" : ""}`} />
  </div>
)

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-light relative z-50">
      {/* メインナビ */}
      <Container>
        <div className="h-18 flex items-center">
          <Logo />

          {/* ナビリンク（デスクトップのみ） */}
          <nav className="hidden lg:flex items-center ml-12">
            {navLinks.map((link) => (
              <a key={link} href="#" className="px-3 py-1 links hover:text-primary/70">
                {link}
              </a>
            ))}
          </nav>

          {/* ボタン群（デスクトップのみ） */}
          <div className="hidden lg:flex items-center gap-2 ml-auto">
            <Button variant="secondary">More templates</Button>
            <Button>Get started</Button>
          </div>

          {/* ハンバーガーボタン（モバイルのみ） */}
          <button
            className="ml-auto lg:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニューを開く"
          >
            <HamburgerIcon open={menuOpen} />
          </button>
        </div>
      </Container>

      {/* アナウンスバー（デスクトップのみ） */}
      <div className="hidden lg:block">
        <Container>
          <div className="border-t border-b border-primary/10 h-10 flex items-center justify-center">
            <span className="label flex items-center gap-2">
              <span className="w-2 h-2 bg-primary inline-block" />
              Announcing $14M Led By Deli Startup Fund.
            </span>
          </div>
        </Container>
      </div>

      {/* モバイルメニュー */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full right-2 bg-light shadow-sm w-[50vw]">
          <Container>
            <nav className="flex flex-col py-8">
              <button
                className="ml-auto mb-4 p-2"
                onClick={() => setMenuOpen(false)}
              >
              </button>
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="links py-3 border-b border-primary/10 hover:text-primary/70"
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
              <div className="flex gap-2 pt-4">
                <Button className="flex-1 justify-center" variant="secondary">More templates</Button>
                <Button className="flex-1 justify-center">Get started</Button>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  )
}