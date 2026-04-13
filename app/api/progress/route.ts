import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    progress: 65,
    message: "Learning progress fetched"
  })
}
