"use client"

import ReactMarkdown from "react-markdown"

export default function LessonView() {
  const markdown = `
# Welcome to the Course

This is where engineers are made.

## Lesson Objective
Build production-level thinking.
`

  return (
    <div className="space-y-6">

      {/* VIDEO BLOCK (placeholder for Mux/YT) */}
      <div className="aspect-video bg-black rounded-lg flex items-center justify-center">
        <p className="text-gray-400">Video Player (Mux / YouTube)</p>
      </div>

      {/* MARKDOWN CONTENT */}
      <ReactMarkdown className="prose prose-invert">
        {markdown}
      </ReactMarkdown>

    </div>
  )
}
