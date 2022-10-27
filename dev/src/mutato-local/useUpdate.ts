import { useState } from 'react'

/*

useUpdate:
  - used to forceUpdate in functional components

*/

const useUpdate = () => {
  const [val, forceUpdate] = useState<boolean>(true)
  return () => forceUpdate(!val)
}

export { useUpdate }