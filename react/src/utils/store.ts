import { mutato } from '../lib'




let numsStore = mutato({
  _key: 'nums',
  nums: [34, 45, 87],
  selected: -1
})

let counterStore = mutato({
  _key: 'counter',
  val: 0
})


export { numsStore, counterStore }