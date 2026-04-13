import { Card } from "@/components/ui/card"

export default function CourseCard() {
  return (
    <Card className="p-6 bg-slate-900 border-white/10">
      <h3 className="text-xl font-semibold">
        Full Stack Engineering
      </h3>

      <p className="text-sm text-gray-400">
        Build real production systems.
      </p>
    </Card>
  )
}
