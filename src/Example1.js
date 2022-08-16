import React, { useEffect, useState } from 'react';


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
  // function Index() {
  //   useEffect(() => {
  //     console.log('你来了老弟 Index页面');
  //     return () => {
  //       console.log('老弟你走了 ,Index页面');
  //     };
  //   }, []);
  //   return <h2>JSPang.com</h2>;
  // }


  return (
    <div>
      <p>You clicked {count} times</p>
      <p>set {age}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        button
      </button>
      <button
        onClick={() => {
          setAge(age + 1);
        }}
      >
        AgeButton
      </button>
      <p>{name}</p>
      <p>{age}</p>
      <p>{work}</p>

    </div>
  );
}
