// 【React component 手写】实现一个 NumberList 组件，接收 numbers 和 limitCount 两个 props，
// 将 numbers 竖向输出。
// 如果 numbers 的个数没有超过 limitCount，则完整输出；
// 如果 numbers 的个数超过了 limitCount，则最后一行显示 ...，并通过 antd 组件的 Popover 显示完整的 numbers。
// https://ant-design.gitee.io/components/popover-cn/?theme=compact#API
import { Button, Popover } from 'antd';
export default function NumberList(props) {
  const { numbers, limitCount } = props
  getAllRowData(param){
    return (
      param.map(item => {
        return <div>item</div>
      })
    )
  }
  getRow(){
    const newArr = numbers.slice(limitCount)
    newArr.push('...')
    return (
      <Popover content={numbers} title="Title">
        {getAllRowData(newArr)}
      </Popover>
    )
  }
  return (
    <div>
      {numbers.length > limitCount ? getRow() : getAllRowData(numbers)}
    </div>
  )
}