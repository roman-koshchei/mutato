![](assets/mutato-github.png)

How I expect it to work. It's especially comfortable during working with arrays. If you need a real mutable state management solution check [valtio](https://github.com/pmndrs/valtio).

```tsx

let store = {
  items: [34, 45, 87]
}

const SwapComponent = () => {
  const mutate = useMutato(store)

  // simple swap of 2 items
  const swap = () => mutate(store => {
    const first = store.items[0]
    store.items[0] = store.items[1]
    store.items[1] = store.first
  })

  return ...
}
```
