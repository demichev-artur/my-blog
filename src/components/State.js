import React, {useState} from "react";

const State = () => {
    const [text, setText] = useState(false);
    const [text1, setText1] = useState(0);
    const [text2, setText2] = useState(0);

    return (
        <div className="container">
            <button onClick={() => setText(!text)}>Click me</button>
            <p>{text ? 'Click' : 'No Click'}</p>

            <button onClick={() => setText1(text1+1)}>+1</button>
            <button onClick={() => setText1(text1-1)}>-1</button>
            <p>{text1}</p>

            <button onClick={() => setText2(text2+1)}>+1</button>
            <button onClick={() => setText2(text2+5)}>+5</button>
            <button onClick={() => setText2(text2+10)}>+10</button>
            <p>{text2}</p>
        </div>
    )
}

export default State;