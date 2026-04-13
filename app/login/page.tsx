"use client"

import { supabase } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"

export default function LoginPage() {

  async function githubLogin() {
    await supabase.auth.signInWithOAuth({
      provider: "github"
    })
  }

  async function emailLogin() {
    await supabase.auth.signInWithOtp({
      email: prompt("Enter email")!
    })
  }

  return (
    <div className="flex h-screen items-center justify-center">

      <div className="space-y-4">
        <Button onClick={githubLogin}>
          Login with GitHub
        </Button>

        <Button onClick={emailLogin}>
          Magic Link Login
        </Button>
      </div>

    </div>
  )
}
