type CounterProps = {
  count: number
  increase: () => void
}

const Counter = ({ count, increase }: CounterProps) => (
  <div>
    Not best case for Mutato, but common as an example
    <div className='flex'>
      <span>Count: {count}</span>
      <button onClick={increase}>+</button>
    </div>
  </div>
)

export { Counter }