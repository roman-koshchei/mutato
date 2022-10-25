import { useUpdate } from './useUpdate'
import { UseMutato } from './types'

/*

useMutato:
  - rerender parent components
  - can be called from component without passing mutate function as prop
  - need a bit more memory,
  because bucket save functions to rerender of highest component

*/

const bucket = new Map<object, undefined | (() => void)>()

const useMutato: UseMutato = (store) => {
  // should, because hooks can't be conditional
  const newUpdate = useUpdate()

  const update = bucket.get(store) ?? newUpdate

  // return function to mutate state
  return (mutateOperetion) => {
    mutateOperetion(store)
    update()
    bucket.clear()
  }
}

export { useMutato }