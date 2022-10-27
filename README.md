![](assets/mutato-github.png)

How I expect it to work. It's especially comfortable during working with arrays. Motivated by [valtio](https://github.com/pmndrs/valtio).


## useMutato
Shared state (rerender parent components)

```tsx

let store = {
  nums: [34, 45, 87],
  selected: -1
}

const Parent = () => {
  // say that we want track chenges of store
  useMutato(store)

  return <div>
    {store.nums.map((num, i) => <Child key={num} val={num} i={i} />)}
  </div>
}


const Child = ({val, i}: {val:number, i: number}) => {
  // can not call useMutato if you sure
  // that parent component will call useMutato
  // but in that example let's do it
  useMutato(store)

  // swap of 2 items if one selected
  const swap = () => mutate(() => {
    if (store.selected == -1) {
      store.selected = i
    } else {
      store.nums[i] = store.nums[store.selected]
      store.nums[store.selected] = num
      store.selected = -1
    }
  }, [store])

  return (
    <button onClick={click}
    style={store.selected == i ? { backgroundColor: 'steelblue' } : undefined
    >
    {num}
    </button>
  )
}

```

## useLocalMutato
Doesn't rerender parent components. Need less memory.

```tsx

let store = {
  items: [34, 45, 87]
}

const SwapComponent = () => {
  const mutate = useLocalMutato(store)

  // simple swap of 2 items
  const swap = () => mutate(store => {
    const first = store.items[0]
    store.items[0] = store.items[1]
    store.items[1] = store.first
  })

  return ...
}

```