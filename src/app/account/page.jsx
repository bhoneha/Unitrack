
import { createClient } from '../lib/supabase/server'

export default async function Account() {
  const supabase = await createClient()
  
  const { data } = await supabase.auth.getClaims()
  console.log(data)
  return (
    <>
        <h1>Account</h1>
        <div>
        <form action="/auth/signout" method="post">
          <button className="button block" type="submit">
            Sign out
          </button>
        </form>
      </div>
    </>
  )
}