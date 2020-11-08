import React, { useState, useEffect } from 'react'

const DataLoader = ({ getData, resourceName, children }) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    (async () => {
      const newData = await getData()
      setData(newData)
    })()
  }, [getData])

  return data && React.Children.map(children, child => {
    if(React.isValidElement(child)) {
      return React.cloneElement(child, { [resourceName]: data })
    }
    return child
  })
}

export default DataLoader
