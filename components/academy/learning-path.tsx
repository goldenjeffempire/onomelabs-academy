export default function LearningPath() {
  const modules = [
    { title: "HTML Foundations", status: "completed" },
    { title: "Backend Basics", status: "active" },
    { title: "System Design", status: "locked" }
  ]

  return (
    <div className="space-y-4">
      {modules.map((m, i) => (
        <div key={i} className="flex items-center gap-3">

          <div
            className={`w-3 h-3 rounded-full ${
              m.status === "completed"
                ? "bg-emerald"
                : m.status === "active"
                ? "bg-yellow-400"
                : "bg-gray-600"
            }`}
          />

          <span>{m.title}</span>
        </div>
      ))}
    </div>
  )
}
