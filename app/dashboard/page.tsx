import { createClient } from "@/lib/supabase/server"

export default async function Dashboard() {

  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <div>
      <h1 className="text-3xl">
        Welcome {user?.email}
      </h1>
    </div>
  )
}
