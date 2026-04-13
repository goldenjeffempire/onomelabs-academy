"use server"

import { createClient } from "@/lib/supabase/server"

export async function submitTask(taskId: string, github: string) {
  const supabase = createClient()

  // 1. AUTH CHECK (mandatory in server actions)
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    throw new Error("Unauthorized: user not authenticated")
  }

  if (!taskId || !github) {
    throw new Error("Invalid payload: taskId and github are required")
  }

  // 2. CREATE SUBMISSION
  const { data, error } = await supabase
    .from("submissions")
    .insert({
      user_id: user.id,
      task_id: taskId,
      github_url: github,
      status: "processing",
    })
    .select()
    .single()

  if (error || !data) {
    throw new Error(error?.message || "Failed to create submission")
  }

  // 3. SIMULATED GRADING ENGINE (replace later with GitHub Actions / queue worker)
  setTimeout(async () => {
    const grade = Math.floor(Math.random() * 30 + 70) // 70–100

    await supabase
      .from("submissions")
      .update({
        status: "graded",
        grade,
      })
      .eq("id", data.id)
  }, 3000)

  return data
}
