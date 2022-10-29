type ChildCounterProps = {
  count: number
  increase: () => void
}

const ChildCounter = ({ count, increase }: ChildCounterProps) => (
  <div className='flex gap-3'>
    <span>Count: {count}</span>
    <button onClick={increase}>+</button>
  </div>
)

export { ChildCounter }