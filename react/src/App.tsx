import { Counter, IndependentCounter } from './components'
import { useMutato } from './lib/useMutato'
import { counterStore, numsStore } from './utils/store'

function App() {
  const mutateNums = useMutato(numsStore)
  const mutateCounter = useMutato(counterStore)

  const increase = () => {
    mutateCounter(counter => counter.val += 1)
  }

  return (
    <div className='center'>

      <Counter increase={increase} count={counterStore.val} />

      <br />

      <IndependentCounter />

      <br />

      <div>
        Real situation where Mutato is cool. <br />
        Click on one item and then another. They will be swaped.
        <div className='flex'>
          {numsStore.nums.map((num, i) => {
            const click = () => {
              mutateNums(store => {
                if (store.selected == -1) {
                  store.selected = i
                } else {
                  store.nums[i] = store.nums[store.selected]
                  store.nums[store.selected] = num
                  store.selected = -1
                }
              })
            }

            return <button key={num} onClick={click}
              style={numsStore.selected == i ? { backgroundColor: 'steelblue' } : undefined}>
              {num}</button>
          })}

        </div>
      </div>

    </div>
  )
}

export default App
