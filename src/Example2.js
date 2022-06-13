import React, { useState, useEffect, createContext, useContext } from 'react'

const CountContext = createContext()

function Counter() {
    const count = useContext(CountContext)
    return(
        <h1>{count}</h1>
    )
}
export default function Example2() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log(111, count)
    })
    return (
        <div>
            <p>YOu clicked {count} times</p>
            <button onClick={() => {
                setCount(count + 1)
            }}>Button</button>
            <CountContext.Provider value={count}>
                <Counter/>
            </CountContext.Provider>
        </div>
    )
}