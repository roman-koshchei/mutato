![](assets/mutato-github.png)

How I acspect it to work. It's aspesially comfortable during working with arrays. If you need real mutable state managment solution check [valtio](https://github.com/pmndrs/valtio).

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
