import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function proxy(req: NextRequest) {
  const isDashboard = req.nextUrl.pathname.startsWith("/dashboard")

  if (isDashboard) {
    const token = req.cookies.get("sb-access-token")

    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*"],
}
