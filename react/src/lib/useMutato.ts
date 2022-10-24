import { Mutato, Store } from './types'
import { useUpdate } from './useUpdate'

/*

useMutato:
  - rerender parent components
  - can be called from component without passing mutate function as prop
  - need a bit more memory,
  because bucket save functions to rerender of highest component

*/

let mutatoBucket = new Map<string, () => void>()

// what? comfortable to create store
const mutato = <T>(store: Store<T>): Store<T> => store

const newUpdate = (key: string) => {
  const update = useUpdate()
  mutatoBucket.set(key, update)
  return update
}

const useMutato = <T>(store: Store<T>): Mutato<T> => {
  const update = mutatoBucket.get(store._key) ?? newUpdate(store._key)

  // return function to mutate state
  return (mutateOperetion) => {
    mutateOperetion(store)
    update()
    mutatoBucket.clear()
  }
}

export { useMutato, mutato }