import {useState} from 'react'

export default function Counter()
{
    // let count = 0;
    const [count, setCount] = useState(0);

    function HandleIncrease(){
        // count ++;
        // console.log(count);

        setCount(count => count + 1);
    }

    function HandleDecrement(){
        // count --;
        // console.log(count);

        if(count === 0){
            alert("can't decrease now");
        }
        setCount(count - 1);
    }
    return(
        <>
        <h1>Counter App</h1>
        <h3>Count = {count}</h3>
        <button onClick={HandleIncrease}>+</button>
        <button onClick={HandleDecrement}>-</button>
        </>
    );
}