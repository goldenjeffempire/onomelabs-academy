export type Module = {
  id: string
  title: string
  order: number
  tasks: {
    id: string
    status: "locked" | "active" | "completed"
  }[]
}

export function generateLearningPath(modules: Module[]) {
  return modules
    .sort((a, b) => a.order - b.order)
    .map((module, index) => {
      const isUnlocked =
        index === 0 ||
        modules[index - 1].tasks.every(t => t.status === "completed")

      return {
        ...module,
        unlocked: isUnlocked
      }
    })
}
