import { useCounter, useFetch } from "../hooks/index";
import { LoadingQuote, Quote } from "../03-examples/index";

export const MultipleCustomHooks = () => {
const {counter, increment} = useCounter();
    const {data,isLoading,hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
    
    // const{author, quote} = false; "El valor de author y quote son undefined";

    const {author, quote} = !!data && data[0];

  return (
    <>
        <h1>BreakingBad Quotes</h1>
        <hr />

        {
            (isLoading)
                ?<LoadingQuote/>
                :<Quote author={author} quote={quote}/>      
        } 

        <button 
        onClick={() => increment()} 
        disabled ={isLoading}
        className="btn btn-primary">
            Nexy quote
        </button>
        
    </>
  )
};
