"use client"

import {useRouter} from "next/navigation"

export default function DashboardPage() {

    const router = useRouter()

    function handleClick() {
        router.push("/")
    }

  return (
    <div style={{ padding: 6 }}>
      Dashboard
      <p>this is the dashboard page</p>
      <button onClick={handleClick}>Go to home</button>
    </div>
  )
}
