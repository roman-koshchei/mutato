import { useUpdate } from './useUpdate'
import { Mutate, UseMutato } from './types'

/*

useMutato:
  - rerender parent components
  - can be called from component without passing mutate function as prop
  - need a bit more memory,
  because bucket save functions to rerender of highest component

*/

// const bucket = new Map<object, () => void>()
const bucketList: { key: object, val: () => void }[] = []

const mutate: Mutate<object> = (mutateOperation, stores) => {
  mutateOperation()
  const update = bucketList.find(mutato => stores.includes(mutato.key))
  update?.val()
  bucketList.length = 0
}

const useMutato: UseMutato = (...stores) => {
  // should, because hooks can't be conditional
  const newUpdate = useUpdate()

  stores.forEach(store => {
    const i = bucketList.findIndex(mutato => mutato.key == store)
    if (i == -1) {
      bucketList.push({ key: store, val: newUpdate })
    }
  });
}

export { useMutato, mutate }