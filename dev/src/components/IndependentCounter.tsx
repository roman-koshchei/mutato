import { mutate, useMutato } from '../mutato-local'
import { primitiveStore, numsStore } from '../utils/stores'

/*
It doesn's update upper 
*/

const IndependentCounter = () => {
  // define that the component based on value from counter store
  useMutato(primitiveStore)

  // mutate stores
  const increase = () => mutate(() => {
    primitiveStore.num += 1

    // can mutate another store
    numsStore.selected = 0
  }, [primitiveStore, numsStore])


  return (
    <div>
      Independent counter. It doesn't update parent component for now.
      <div className='flex'>
        <span>Count: {primitiveStore.num}</span>
        <button onClick={increase}>+</button>
      </div>
    </div>
  )
}

export { IndependentCounter }