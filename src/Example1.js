import React, { useEffect, useState } from 'react';
import NumberList from './components/NumberList'
export default function Example() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(18);
  const [name] = useState('xxxx');
  const [work] = useState('engineer');
  const obj = { a: 1, b: 2 }
  useEffect(() => {
    console.log(`You clicked ${count} times ,${new Date().getTime()}`);

    // const { a, b, c } = obj
    // console.log(a, b, c)
    // console.log(c.id)
    return () => {
      console.log('离开')
    }
  }, []);

  const changeCount = () => {
    setCount(count + 1);
  }

  const changeAge = () => {
    setAge(age + 1);
  }
  const getInfo = (value) => {
    console.log(value)
  }
  return (
    <div>
      <p>You clicked {count} times</p>
      <p>set {age}</p>
      <button
        onClick={changeCount}
      >
        button
      </button>
      <button
        onClick={changeAge}
      >
        AgeButton
      </button>
      <p>{name}</p>
      <p>{age}</p>
      <p>{work}</p>
      <hr></hr>
      <h2>NumberList 子组件</h2>
      <NumberList numbers={[1, 2, 3, 4, 5, 6, 78, 9]} limitCount={10} logValue={getInfo} />
    </div>
  );
}
