![](assets/mutato-github.png)

How I expect it to work. It's especially comfortable during working with arrays. If you need a real mutable state management solution check [valtio](https://github.com/pmndrs/valtio).

```tsx

type Store = {
  items: string[]
}

const SwapComponent = () => {
  const [store, mutateStore] = useStato<Store>({
    items: ['a', 'b', 'c']
  })

  // simple swap of 2 items
  const swap = () => mutateItems(store => {
    const first = store.items[0]
    store.items[0] = store.items[1]
    store.items[1] = store.first
  })

  return ...
}
```
