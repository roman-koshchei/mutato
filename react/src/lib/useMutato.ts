import { Mutato } from './types'
import { useUpdate } from './useUpdate'

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