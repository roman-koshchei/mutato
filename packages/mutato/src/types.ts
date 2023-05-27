type MutateOperation = () => void

type Mutate<T> = (mutateOperation: MutateOperation, stores: T[]) => void

type UseMutato = (...stores: any[]) => void

export type { MutateOperation, Mutate, UseMutato }