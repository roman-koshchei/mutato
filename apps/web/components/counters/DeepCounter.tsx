import { deepMutate, useDeepMutato } from 'mutato'
import { arrayStore, simpleStore } from '../../stores'

const DeepCounter = () => {
  // define that the component based on value from counter store
  useDeepMutato(simpleStore.num)

  // mutate stores
  const increase = () => deepMutate(() => {
    simpleStore.num += 1

    // can mutate another store
    // const num = arrayStore.nums[0]
    // arrayStore.nums[0] = arrayStore.nums[arrayStore.nums.length - 1]
    // arrayStore.nums[arrayStore.nums.length - 1] = num

  }, [simpleStore.num])


  return (
    <div className='flex gap-3'>
      <span>Count: {simpleStore.num}</span>
      <button onClick={increase}>+</button>
    </div>
  )
}

export { DeepCounter }