export type TaskStatus = "locked" | "active" | "completed"

export function calculateCourseProgress(tasks: {
  status: TaskStatus
}[]) {
  const completed = tasks.filter(t => t.status === "completed").length
  return Math.round((completed / tasks.length) * 100)
}
