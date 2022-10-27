import { mutate } from 'mutato'
import { primitiveStore } from '../utils/stores'

const Input = () => {
  // can not call useMutato because it is called from parent component already
  // call if you are not sure was it called earlier
  // useMutato(primitiveStore)

  const change = (e: any) => mutate(() => {
    primitiveStore.str = e.target.value
  }, [primitiveStore])

  return <input type="text" value={primitiveStore.str} onChange={change} />
}

export { Input }