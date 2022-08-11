/***
 * useMemo 使用教程
 */
import React, { useState, useMemo } from 'react'
export default function Example7() {
  const [xiaohong, setXiaohong] = useState('小红待客状态')
  const [zhiling, setZhiling] = useState('====志玲待客状态')
  return (
    <>
      <button onClick={() => { setXiaohong(new Date().getTime()) }}>小红</button>
      <button onClick={() => { setZhiling(new Date().getTime() + ',志玲向我们走来了') }}>志玲</button>
      <ChildComponent name={xiaohong}>{zhiling}</ChildComponent>
    </>
  )
}

// 子组件
function ChildComponent({ name, children }) {
  function changeName(name) {
    console.log(name + '小红向我们走来了');
    return name + '小红向我们走来了'
  }
  const actionName = useMemo(() => { changeName(name) }, [name])
  // const actionName = changeName(name)
  // 如果没有使用useMemo，触发志玲的更新也会导致changeName方法执行。有了useMemo 优化了性能 不会浪费计算资源
  return (
    <>
      <div>{actionName}</div>
      <div>{children}</div>
    </>
  )
}