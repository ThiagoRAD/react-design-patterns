import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

export const CurrentUserInfo = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    (async () => {
      const response = await axios.get('/api/current-user')
      setUser(response.data)
    })
  }, [])

  return <></>
}
