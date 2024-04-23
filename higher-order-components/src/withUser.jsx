import { useState, useEffect } from 'react'

export const withUser = (Component, userId) => {
  return props => {
    const [user, setUser] = useState(null)

    useEffect(() => {
      setUser({ id: userId, name: 'User ' + userId, age: 20, hairColor: 'Black' })
    }, [userId])

    return user && <Component {...props} user={user} />
  }
}
