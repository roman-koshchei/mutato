import { Mutato } from './types'
import { useUpdate } from './useUpdate'

/*

useLocalMutato:
  - doesn't rerender parent components
  - use less memory and faster

*/

const useLocalMutato = <T>(store: T): Mutato<T> => {
  const forceUpdate = useUpdate()

  const mutate: Mutato<T> = (mutateOperetion) => {
    mutateOperetion(store)
    forceUpdate()
  }

  return mutate
}

export { useLocalMutato }