import React, { useState, useEffect } from 'react'
import axios from 'axios'

const UserLoader = ({ children, userId }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    (async () => {
      const response = await axios.get(`/api/users/${userId}`)
      console.log(response.data)
      console.log(response)
      setUser(response.data)
    })()
  }, [userId])

  return user && React.Children.map(children, child => {
    if(React.isValidElement(child)) {
      return React.cloneElement(child, { user })
    }
    return child
  })
}

export default UserLoader
