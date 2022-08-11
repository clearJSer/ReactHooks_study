import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Example1 from './Example1';
import Example2 from './Example2';
// import Example2 from './ReducerDemo';
import Example6 from './Example6';
import UseMemoExample from './useMemo-example';
import UseMemoExample2 from './useMemo-example/jspangDemo';
import Example8 from './useRef-example'
import List from './List/index'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h1>React 首页</h1>
    <Router>
      <ul>
        <li>
          <Link to="/">首页</Link>
        </li>
        <li>
          <Link to="/list">列表页</Link>
        </li>
        <li>
          <Link to="/useMemo">useMemo</Link> ｜｜
          <Link to="/useMemo2">useMemo-jspang</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" exact element={<Example1 />} />
        <Route path="/list" exact element={<List />} />
        <Route path="/useMemo" exact element={<UseMemoExample />} />
        <Route path="/useMemo2" exact element={<UseMemoExample2 />} />
      </Routes>
    </Router>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
