"use server"

import { createClient } from "@/lib/supabase/server"

export async function submitTask(taskId: string, github: string) {

  const supabase = createClient()

  const {
    data: { user }
  } = await supabase.auth.getUser()

  const { data } = await supabase
    .from("submissions")
    .insert({
      user_id: user?.id,
      task_id: taskId,
      github_url: github,
      status: "processing"
    })
    .select()
    .single()

  // simulate checker
  setTimeout(async () => {
    await supabase
      .from("submissions")
      .update({
        status: "graded",
        grade: 95
      })
      .eq("id", data.id)
  }, 4000)

  return data
}
