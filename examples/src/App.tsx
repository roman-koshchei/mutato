import { useState } from 'react'
import { useStato } from './mutato'

function App() {
  const [store, mutateStore] = useStato({
    count: 0,
    nums: [34, 45, 87],
    selected: -1
  })

  const increase = () => {
    mutateStore(store => store.count += 1)
  }

  return (
    <div className='center'>

      <div>
        Not best case for Mutato, but common as an example
        <div className='flex'>
          <span>Count: {store.count}</span>
          <button onClick={increase}>+</button>
        </div>
      </div>

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

            return <button onClick={click} style={store.selected == i ? ({ backgroundColor: 'steelblue' }) : undefined}>{num}</button>
          })}

        </div>
      </div>

    </div>
  )
}

export default App
