export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[calc(100%-3rem)] max-w-[var(--max-width-container)] mx-auto lg:w-[calc(100%-5rem)]">
      {children}
    </div>
  )
}