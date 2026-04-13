"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

export default function TaskSubmission() {
  const [status, setStatus] = useState("idle")

  async function submit() {
    setStatus("processing")

    toast("Submission received")

    setTimeout(() => {
      setStatus("graded")
      toast.success("Project graded successfully")
    }, 3000)
  }

  return (
    <div className="space-y-4">
      <Input placeholder="GitHub Repository URL" />

      <Button onClick={submit}>
        Submit Project
      </Button>

      <p>Status: {status}</p>
    </div>
  )
}
