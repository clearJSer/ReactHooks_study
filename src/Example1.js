import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

export default function Example() {
  const [count, setCount] = useState(0);
  const [age] = useState(18);
  const [name] = useState('xxxx');
  const [work] = useState('engineer');
  useEffect(() => {
    console.log(`You clicked ${count} times ,${new Date().getTime()}`);
  }, []);
  function Index() {
    useEffect(() => {
      console.log('你来了老弟 Index页面');
      return () => {
        console.log('老弟你走了 ,Index页面');
      };
    }, []);
    return <h2>JSPang.com</h2>;
  }

  function List() {
    useEffect(() => {
      console.log(' 你来了老弟 List页面');
      return () => {
        console.log('老弟你走了 ,List页面');
      };
    });
    return <h2>List-Page</h2>;
  }
  return (
    <div>
      <p>You clicked {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        button
      </button>
      <p>{name}</p>
      <p>{age}</p>
      <p>{work}</p>
      <Router>
        <ul>
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/list">列表页</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" exact element={<Index />} />
          <Route path="/list" exact element={<List />} />
        </Routes>
      </Router>
    </div>
  );
}
