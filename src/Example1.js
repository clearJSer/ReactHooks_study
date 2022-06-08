import React, {useEffect, useState} from 'react';

export default function Example() {
    const [count, setCount] = useState(0)
    const [age, ] = useState(29)
    const [name, ] = useState('liu')
    const [work, ] = useState('engineer')
    const test = (...args) => {
        console.log(args)
        console.log([...args])
    }
    useEffect(() => {
        test(1,2,3,4,5)
    })
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => {setCount(count + 1)}}>button</button>
            <p>{name}</p>
            <p>{age}</p>
            <p>{work}</p>
        </div>
    )
}