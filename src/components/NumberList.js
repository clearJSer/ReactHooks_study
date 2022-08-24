// 【React component 手写】实现一个 NumberList 组件，接收 numbers 和 limitCount 两个 props，
// 将 numbers 竖向输出。
// 如果 numbers 的个数没有超过 limitCount，则完整输出；
// 如果 numbers 的个数超过了 limitCount，则最后一行显示 ...，并通过 antd 组件的 Popover 显示完整的 numbers。
// https://ant-design.gitee.io/components/popover-cn/?theme=compact#API
import React from 'react';
// import { Button, Popover } from 'antd';
export default function NumberList(props) {
  const { numbers, limitCount } = props
  const getAllRowData = (param) => {
    return (
      param.map((item, index) => {
        return <div key={index} onClick={(e) => {
          props.logValue(e)
        }}>{item}</div>
      })
    )
  }
  const getRow = () => {
    const newArr = numbers.slice(0, limitCount)
    newArr.push('...')
    return (
      getAllRowData(newArr)
    )
  }
  return (
    <div>
      {numbers.length > limitCount ? getRow() : getAllRowData(numbers)}
    </div>
  )
}