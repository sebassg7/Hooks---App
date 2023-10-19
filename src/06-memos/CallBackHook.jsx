import { useCallback, useEffect, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";



export const CallBackHook = () => {
  
    const [counter, setCounter] = useState(10);

    const increment = useCallback(
      () => {
        console.log('setCounter(counter => counter + 1)');
        setCounter(counter => counter + 1);
      },
      [],
    );

    useEffect(() => {
        increment();
    }, [increment]);
    


    return (
    <>
        <h1>useCallBack Hook: { counter }</h1>
        <hr />

        <ShowIncrement increment={increment}/>
    </>
  )
}
