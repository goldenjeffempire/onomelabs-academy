import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="border-b border-white/10 px-6 py-4 flex justify-between">
      <Link href="/" className="font-bold text-emerald text-xl">
        OnomeLabs Academy
      </Link>

      <div className="space-x-6">
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </nav>
  )
}
