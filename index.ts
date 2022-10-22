import { useState } from 'react'

// this is how expected

type MutateOperation<T> = (current: T) => void

type Stato<StatoType> = [
  val: StatoType,
  mutateVal: (mutateOperation: MutateOperation<StatoType>) => void
]

const useStato = <T extends object,>(initial: T): Stato<T> => {
  const [val, setVal] = useState<T>(initial)

  const mutateVal = (mutateOperetion: MutateOperation<T>) => {
    let newVal = Object.create(val)
    mutateOperetion(newVal)
    setVal(newVal)
  }

  return [val, mutateVal]
}

export { useStato }