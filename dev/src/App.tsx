import { Counter, IndependentCounter, Input } from './components'
import { primitiveStore, numsStore } from './utils/stores'
import { mutate, useMutato } from './mutato-local'

function App() {
  useMutato(numsStore, primitiveStore)

  const increase = () => {
    mutate(() => primitiveStore.num += 1, [primitiveStore])
  }

  return (
    <div className='center'>

      <Counter increase={increase} count={primitiveStore.num} />

      <br />

      <IndependentCounter />

      <br />

      Test inputs: {primitiveStore.str}
      <Input />

      <br />

      <div>
        Real situation where Mutato is cool. <br />
        Click on one item and then another. They will be swaped.
        <div className='flex'>
          {numsStore.nums.map((num, i) => {
            const click = () => {
              mutate(() => {
                if (numsStore.selected == -1) {
                  numsStore.selected = i
                } else {
                  numsStore.nums[i] = numsStore.nums[numsStore.selected]
                  numsStore.nums[numsStore.selected] = num
                  numsStore.selected = -1
                }
              }, [numsStore])
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
