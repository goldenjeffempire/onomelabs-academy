import Link from "next/link"

export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-white/10 p-6 space-y-4">
      <Link href="/dashboard">Overview</Link>
      <Link href="/dashboard/courses">My Courses</Link>
      <Link href="/dashboard/submissions">Submissions</Link>
      <Link href="/dashboard/settings">Settings</Link>
    </aside>
  )
}
