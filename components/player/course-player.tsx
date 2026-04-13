"use client"

import { useState } from "react"
import TaskPanel from "./task-panel"
import LessonView from "./lesson-view"

export default function CoursePlayer() {
  const [activeTask, setActiveTask] = useState(1)

  return (
    <div className="grid grid-cols-12 min-h-screen">

      {/* LEFT: CONTENT */}
      <div className="col-span-8 border-r border-white/10 p-6">
        <LessonView />
      </div>

      {/* RIGHT: TASKS */}
      <div className="col-span-4 p-6">
        <TaskPanel activeTask={activeTask} setActiveTask={setActiveTask} />
      </div>

    </div>
  )
}
