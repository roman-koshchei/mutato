type MutateOperation<T> = (current: T) => void

type Mutato<T> = (mutateOperation: MutateOperation<T>) => void

type Store<T> = T & { _key: string }


type I<T> = Exclude<keyof T, '_key'>

type A<T> = {
  [key in I<T>]: T[key]
}
const x: I<{ n: number, st: string, _key: string }> = 'n'


export type { MutateOperation, Mutato, Store }