import { Counter, IndependentCounter } from './components'
import { useMutato } from './lib/useMutato'
import { store } from './utils/store'

function App() {
  const mutateStore = useMutato('store', store)

  const increase = () => {
    // change store with component rerender
    mutateStore(store => store.count += 1)
  }

  return (
    <div className='center'>

      <Counter increase={increase} count={store.count} />

      <br />

      <IndependentCounter />

      <br />

      <div>
        Real situation where Mutato is cool. <br />
        Click on one item and then another. They will be swaped.
        <div className='flex'>
          {store.nums.map((num, i) => {
            const click = () => {
              mutateStore(store => {
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
              style={store.selected == i ? { backgroundColor: 'steelblue' } : undefined}>
              {num}</button>
          })}

        </div>
      </div>

    </div>
  )
}

export default App
