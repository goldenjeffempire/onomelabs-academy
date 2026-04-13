export type Profile = {
  id: string
  full_name: string
  role: "student" | "admin"
}

export type Course = {
  id: string
  title: string
}

export type Module = {
  id: string
  course_id: string
  title: string
}

export type Task = {
  id: string
  module_id: string
  title: string
}
