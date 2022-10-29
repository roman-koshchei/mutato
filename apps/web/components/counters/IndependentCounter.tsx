import { mutate, useMutato } from 'mutato'
import { arrayStore, simpleStore } from '../../stores'

const IndependentCounter = () => {
  // define that the component based on value from counter store
  useMutato(simpleStore)

  // mutate stores
  const increase = () => mutate(() => {
    simpleStore.num += 1

    // can mutate another store
    const num = arrayStore.nums[0]
    arrayStore.nums[0] = arrayStore.nums[arrayStore.nums.length - 1]
    arrayStore.nums[arrayStore.nums.length - 1] = num

  }, [simpleStore, arrayStore])


  return (
    <div>
      Independent counter. It updates parent component. <br />
      And can mutate store with array of nums
      <div className='flex'>
        <span>Count: {simpleStore.num}</span>
        <button onClick={increase}>+</button>
      </div>
    </div>
  )
}

export { IndependentCounter }