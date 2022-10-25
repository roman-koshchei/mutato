type MutateOperation<T> = (current: T) => void

type Mutate<T> = (mutateOperation: MutateOperation<T>) => void

type UseMutato = <T extends object>(store: T) => Mutate<T>

export type { MutateOperation, Mutate, UseMutato }