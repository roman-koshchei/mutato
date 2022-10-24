import { useMutato } from '../lib/useMutato'
import { store } from '../utils/store'

/*
It doesn's update upper 
*/

const IndependentCounter = () => {
  const mutate = useMutato('store', store)

  const increase = () => mutate(store => store.count += 1)

  return (
    <div>
      Independent counter. It doesn't update parent component for now.
      <div className='flex'>
        <span>Count: {store.count}</span>
        <button onClick={increase}>+</button>
      </div>
    </div>
  )
}

export { IndependentCounter }