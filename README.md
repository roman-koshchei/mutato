![](assets/mutato-github.png)

How I acspect it to work. It's aspesially comfortable during working with arrays. If you need real mutable state managment solution check [valtio](https://github.com/pmndrs/valtio).

```tsx
const SwapComponent = () => {
  const [items, mutateItems] = useMutato<string[]>(['a', 'b'])

  // simple swap of 2 items
  const swap = () => mutateItems(items => {
    const first = items[0]
    items[0] = items[1]
    items[1] = first
  })

  return items.map(item => <div>{item}</div>)
}
```
