import { useState } from 'react'

const useUpdate = () => {
  const [val, forceUpdate] = useState<boolean>(true)
  return () => forceUpdate(!val)
}

export { useUpdate }