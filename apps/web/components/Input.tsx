import { mutate } from 'mutato'
import { simpleStore } from '../stores'

const Input = () => {
  // can not call useMutato because it is called from parent component already
  // call if you are not sure was it called earlier
  // useMutato(primitiveStore)

  const change = (e: any) => mutate(() => {
    simpleStore.str = e.target.value
  }, [simpleStore])

  return <div style={{
    padding: '10px', backgroundColor: 'white',
    borderRadius: '2px', marginTop: '1rem'
  }}>
    <input type="text" value={simpleStore.str} onChange={change}
      style={{
        border: 0, fontSize: '1.2rem',
        outline: 'none', width: '100%',
      }}
    />
  </div>
}

export { Input }