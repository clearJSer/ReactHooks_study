import React, { useRef, useState, useEffect } from 'react';
export default function () {
    let a = '123'

    const inpuEl = useRef(null)
    const [text, setText] = useState('jspang')
    const textRef = useRef()
    const onButtonClick = function () {
        inpuEl.current.value = new Date().getTime() + "Hello ,JSPang";
        console.log(inpuEl) //输出获取到的DOM节点
    }
    useEffect(() => {
        textRef.current = text;
        a = text;
        console.log('textRef.current:', a)
    })
    return (
        <>
            <input ref={inpuEl} type="text" />
            <button onClick={onButtonClick}>改变input</button>

            <input onChange={(e) => { setText(e.target.value) }} value={text} />
        </>
    )
}