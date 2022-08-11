/***
 * useMemo 使用教程
 * 如果需要取消缓存：去掉第二个参数！！！面试被问到的
 */
import { useState, useMemo } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState('')

  // const fcCount = () => {
  //   //  出发setValue 都会更新这个log
  //   console.log('hello react')
  //   return count + 1
  // }
  const fcCount = useMemo(() => {
    console.log('hello react')
    return count + 1
  })

  return (
    <div>
      <p>count:{count}</p>
      <p>fcCount: {fcCount}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
      <br />
      <input
        value={value}
        onInput={(e) => {
          setValue(e.target.value)
        }}
      />
    </div>
  )
}
export default App