import { Mutato } from './types'
import { useUpdate } from './useUpdate'

/*

useMutato:
  - rerender parent components
  - can be called from component without passing mutate function as prop
  - need a bit more memory,
  because bucket save functions to rerender of highest component

*/

let bucket = new Map<object, undefined | (() => void)>()

const newUpdate = (key: object) => {
  const update = useUpdate()
  bucket.set(key, update)
  return update
}

const useMutato = <T extends object>(store: T): Mutato<T> => {
  const update = bucket.get(store) ?? newUpdate(store)

  // console.log('tucket has', store, tucket.has(store), 'value', tucket.get(store))

  // return function to mutate state
  return (mutateOperetion) => {
    mutateOperetion(store)
    update()
    bucket.clear()
  }
}

export { useMutato }