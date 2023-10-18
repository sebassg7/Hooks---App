import { useMemo, useState } from "react";
import { useCounter } from "../hooks"


const heavyStuff = (iterationNumber) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log('Ahí vamos...');
    }

    
    return `${iterationNumber} iteraciones realizadas.`;
};


export const MemoHook = () => {

    const {counter, increment} = useCounter(100);
    const [show, setShow] = useState(true);
    const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);


  return (
    <> 
        <h1>Counter: <small>{ counter }</small></h1>
        <hr />

        <h4>{memorizedValue}</h4>

        <button 
            className="btn btn-primary"
            onClick={() => increment()}
        > 
            +1
        </button>

        <button
            className="btn btn-outline btn-primary"
            onClick={() => setShow(!show)}
        >
            Show/Hide {JSON.stringify(show)}
        </button>
    
    </>
  )
}
