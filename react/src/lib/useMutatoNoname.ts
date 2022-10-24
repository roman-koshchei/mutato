import { Mutato } from './types'
import { useUpdate } from './useUpdate'

/*

useMutato:
  - rerender parent components
  - can be called from component without passing mutate function as prop
  - need a bit more memory,
  because bucket save functions to rerender of highest component

*/

let mutatoBucket = new Map<any, () => void>()

const newUpdate = (key: any) => {
  const update = useUpdate()
  mutatoBucket.set(key, update)
  return update
}

const useMutatoNoname = <T>(store: T): Mutato<T> => {
  const update = mutatoBucket.get(store) ?? newUpdate(store)

  // return function to mutate state
  return (mutateOperetion) => {
    console.log(store)
    mutateOperetion(store)
    update()
    mutatoBucket.delete(store)
  }
}

export { useMutatoNoname }