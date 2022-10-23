import { useUpdate } from './useUpdate'

type MutateOperation<T> = (current: T) => void

type Mutato<T> = (mutateOperation: MutateOperation<T>) => void

const useMutato = <T>(store: T): Mutato<T> => {
  const forceUpdate = useUpdate()

  const mutate: Mutato<T> = (mutateOperetion) => {
    mutateOperetion(store)
    forceUpdate()
  }

  return mutate
}

export { useMutato }