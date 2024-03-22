import { useState } from 'react'

type AuthUser = {
  name: string
  email: string
}

export const User = () => {
  const [user, setUser] = useState({} as AuthUser)
  const handleLogin = () => {
    setUser({
      name: 'jo',
      email: 'jo@globo.com'
    })
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <div>User name is {user.name}</div>
      <div>User email is {user.email}</div>
    </div>
  )
}
