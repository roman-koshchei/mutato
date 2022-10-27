import { Mutate } from './types'
import { useUpdate } from './useUpdate'

/*

useLocalMutato:
  - doesn't rerender parent components
  - use less memory and faster

*/

const useLocalMutato = <T>(store: T): Mutate<T> => {
  const forceUpdate = useUpdate()

  const mutate: Mutate<T> = (mutateOperetion) => {
    mutateOperetion(store)
    forceUpdate()
  }

  return mutate
}

export { useLocalMutato }