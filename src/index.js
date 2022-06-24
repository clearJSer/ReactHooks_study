import React from 'react';
import ReactDOM from 'react-dom/client';
// import Example1 from './Example1';
// import Example2 from './Example2';
// import Example2 from './ReducerDemo';
import Example6 from './Example6';
import UseMemoExample from './useMemo-example';
import Example8 from './useRef-example'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <UseMemoExample />
        <Example6 />
        <Example8 />
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
