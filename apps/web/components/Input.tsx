import { mutate } from 'mutato'
import { simpleStore } from '../stores'

const Input = () => {
  // can not call useMutato because it is called from parent component already
  // call if you are not sure was it called earlier
  // useMutato(primitiveStore)

  const change = (e: any) => mutate(() => {
    simpleStore.str = e.target.value
  }, [simpleStore])

  return <input type="text" value={simpleStore.str} onChange={change} />
}

export { Input }