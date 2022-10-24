import { useMutato } from '../lib/useMutato'
import { counterStore, numsStore } from '../utils/store'

/*
It doesn's update upper 
*/

const IndependentCounter = () => {
  const mutate = useMutato(counterStore)
  const increase = () => mutate(counter => counter.val += 1)

  return (
    <div>
      Independent counter. It doesn't update parent component for now.
      <div className='flex'>
        <span>Count: {counterStore.val}</span>
        <button onClick={increase}>+</button>
      </div>
    </div>
  )
}

export { IndependentCounter }