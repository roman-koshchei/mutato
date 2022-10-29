import { mutate } from 'mutato'
import { arrayStore } from '../../stores'

type SwapBtnProps = {
  num: number
  i: number
}

const SwapBtn = ({ num, i }: SwapBtnProps) => {
  const click = () => mutate(() => {
    if (arrayStore.selected == -1) {
      arrayStore.selected = i
    } else {
      arrayStore.nums[i] = arrayStore.nums[arrayStore.selected]
      arrayStore.nums[arrayStore.selected] = num
      arrayStore.selected = -1
    }
  }, [arrayStore])

  return <button onClick={click} className={arrayStore.selected == i ? 'selected-btn' : undefined}>
    {num}
  </button>
}

export { SwapBtn }