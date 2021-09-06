import React, {useState} from "react";

function App(){
    const [count, setCount] = useState(0);

    const complexInc = () => {
        setTimeout(() => {
            setCount((prevState) => {
                return prevState + 1;
            })
        }, 3000);
    };

    const complexDec = () => {
        setTimeout(() => {
            setCount((prevState) => {
                return prevState - 1;
            })
        }, 3000);
    };


    return(
        <div >
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button onClick={() => complexInc()}>Increase</button>
            <button onClick={() => setCount(0)}> Reset</button>
            <button onClick={() => complexDec()}>Decrease</button>
        </div>
    );
}

export default App;