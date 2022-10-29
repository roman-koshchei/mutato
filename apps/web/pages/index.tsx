import { mutate, useMutato } from "mutato"
import { ChildCounter, IndependentCounter, Input, SwapBtn } from '../components';
import { arrayStore, simpleStore } from '../stores';

export default function Web() {
  useMutato(simpleStore, arrayStore)

  const increase = () => mutate(() => {
    simpleStore.num += 1
  }, [simpleStore])

  return <>
    <div className='center'>
      <div className='flex between'>
        <h1>MUTATO examples</h1>
        <a href='https://github.com/roman-koshchei/mutato'
          target='_blank' rel='noopener noreferrer'>GITHUB</a>
      </div>

      <ChildCounter count={simpleStore.num} increase={increase} />

      <br />

      <IndependentCounter />

      <br />

      Test inputs: {simpleStore.str}
      <Input />

      <br />

      <div>
        Real situation where Mutato is cool. <br />
        Click on one item and then another. They will be swaped.
        <div className='flex'>
          {arrayStore.nums.map((num, i) => <SwapBtn key={num} num={num} i={i} />)}
        </div>
      </div>
    </div>
  </>
}
