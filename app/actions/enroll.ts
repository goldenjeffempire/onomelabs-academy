"use server"

import { createClient } from "@/lib/supabase/server"

export async function enroll(courseId: string) {

  const supabase = createClient()

  const {
    data: { user }
  } = await supabase.auth.getUser()

  await supabase.from("enrollments").insert({
    user_id: user?.id,
    course_id: courseId
  })
}
