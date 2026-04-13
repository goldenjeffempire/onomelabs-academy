import CourseCard from "@/components/academy/course-card"

export default function HomePage() {
  return (
    <main className="max-w-7xl mx-auto p-10 space-y-20">

      <section className="text-center space-y-6">
        <h1 className="text-5xl font-bold">
          Become a Production-Ready Software Engineer
        </h1>

        <p className="text-gray-300">
          Learn by building real systems.
        </p>

        <button className="bg-emerald px-6 py-3 rounded-lg">
          Start Learning
        </button>
      </section>

      <section>
        <h2 className="text-3xl mb-8">Programs</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </section>

    </main>
  )
}
