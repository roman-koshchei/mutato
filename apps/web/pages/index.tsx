import { mutate, useMutato } from "mutato"
import { ChildCounter, DeepCounter, IndependentCounter, Input, Navbar, SwapBtn } from '../components';
import { arrayStore, simpleStore } from '../stores';

export default function Web() {
  useMutato(simpleStore, arrayStore)

  const increase = () => mutate(() => {
    simpleStore.num += 1
  }, [simpleStore])

  return <>
    <div className='col'>
      <div>
        Mutato is mutable react state. Look at examples (code can be found on github)
      </div>

      <div className='flex between'>
        Deep
        <DeepCounter />
      </div>

      <div>
        Real situation where Mutato is cool. Click on one item and then another to swap
        <div className='flex between mt'>
          {arrayStore.nums.map((num, i) => <SwapBtn key={num} num={num} i={i} />)}
        </div>
      </div>

      <div className='flex between'>
        Counter when pass values (state) into component
        <ChildCounter count={simpleStore.num} increase={increase} />
      </div>

      <div className='flex between'>
        Independent counter. It updates parent component. <br />
        And can mutate store with array of nums
        <IndependentCounter />
      </div>

      <div>
        <div>Input: {simpleStore.str}</div>
        <Input />
      </div>
    </div>
  </>
}
