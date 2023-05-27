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
const deepBucketList: { key: any, val: () => void }[] = []

const deepMutate: Mutate<any> = (mutateOperation, stores) => {
  mutateOperation()
  const update = deepBucketList.find(mutato => stores.includes(mutato.key))
  update?.val()
  deepBucketList.length = 0
}

const useDeepMutato: UseMutato = (...stores) => {
  // should, because hooks can't be conditional
  const newUpdate = useUpdate()

  stores.forEach(store => {
    const i = deepBucketList.findIndex(mutato => mutato.key == store)
    if (i == -1) {
      deepBucketList.push({ key: store, val: newUpdate })
    }
  });
}

export { useDeepMutato, deepMutate }