import { Mutato } from './types'
import { useUpdate } from './useUpdate'

/*

useMutato:
  - rerender parent components
  - can be called from component without passing mutate function as prop
  - need a bit more memory,
  because bucket save functions to rerender of highest component

*/

let mutatoBucket = new Map<string, () => void>()

const newUpdate = (key: string) => {
  const update = useUpdate()
  mutatoBucket.set(key, update)
  return update
}

const useMutato = <T>(key: string, store: T): Mutato<T> => {
  const update = mutatoBucket.get(key) ?? newUpdate(key)

  // return function to mutate state
  return (mutateOperetion) => {
    mutateOperetion(store)
    update()
    mutatoBucket.delete(key)
  }
}

export { useMutato }