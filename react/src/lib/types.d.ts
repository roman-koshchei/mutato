type MutateOperation<T> = (current: T) => void

type Mutato<T> = (mutateOperation: MutateOperation<T>) => void

export type { MutateOperation, Mutato }