"use client"

import TaskSubmission from "@/components/academy/task-submission"

type Props = {
  activeTask: number
  setActiveTask: (n: number) => void
}

export default function TaskPanel({ activeTask }: Props) {
  const tasks = [
    { id: 1, title: "Setup Project" },
    { id: 2, title: "Build API" },
    { id: 3, title: "Deploy App" }
  ]

  return (
    <div className="space-y-6">

      <h2 className="text-xl font-bold">Tasks</h2>

      <div className="space-y-3">
        {tasks.map(task => (
          <div
            key={task.id}
            className={`p-3 rounded border border-white/10 cursor-pointer ${
              task.id === activeTask ? "bg-emerald/10" : ""
            }`}
          >
            {task.title}
          </div>
        ))}
      </div>

      <TaskSubmission taskId={activeTask} />

    </div>
  )
}
