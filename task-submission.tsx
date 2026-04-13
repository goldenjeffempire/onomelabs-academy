"use client"

import { useState } from "react"
import { submitTask } from "@/app/actions/submit-task"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function TaskSubmission({ taskId }: any) {

  const [url, setUrl] = useState("")

  async function submit() {
    await submitTask(taskId, url)
  }

  return (
    <div className="space-y-3">
      <Input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="GitHub Repo URL"
      />

      <Button onClick={submit}>
        Submit Project
      </Button>
    </div>
  )
}
