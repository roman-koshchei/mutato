type ChildCounterProps = {
  count: number
  increase: () => void
}

const ChildCounter = ({ count, increase }: ChildCounterProps) => (
  <div>
    Counter when pass values (state) into component
    <div className='flex'>
      <span>Count: {count}</span>
      <button onClick={increase}>+</button>
    </div>
  </div>
)

export { ChildCounter }