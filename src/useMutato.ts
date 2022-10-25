import { useUpdate } from './useUpdate'
import { Mutato } from './types'

/*

useMutato:
  - rerender parent components
  - can be called from component without passing mutate function as prop
  - need a bit more memory,
  because bucket save functions to rerender of highest component

*/

const bucket = new Map<object, undefined | (() => void)>()

// create new update and set in into bucket
// const newUpdate = (key: object) => {
//   const update = useUpdate()
//   bucket.set(key, update)
//   return update
// }

const useMutato = <T extends object>(store: T): Mutato<T> => {
  const newUpdate = useUpdate() // should, because hooks can't be conditional

  const update = bucket.get(store) ?? newUpdate

  // console.log('tucket has', store, tucket.has(store), 'value', tucket.get(store))

  // return function to mutate state
  return (mutateOperetion) => {
    mutateOperetion(store)
    update()
    bucket.clear()
  }
}

export { useMutato }