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
  const swap = () => mutateItems(items => {
    const first = items[0]
    items[0] = items[1]
    items[1] = first
  })

  return ...
}
```
