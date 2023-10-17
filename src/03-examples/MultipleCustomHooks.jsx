import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";


export const MultipleCustomHooks = () => {
const {counter, increment} = useCounter();
    const {data,isLoading,hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
    
    // const{author, quote} = false; "El valor de author y quote son undefined";
    console.log(!!data);
    const {author, quote} = !!data && data[0];

  return (
    <>
        <h1>BreakingBad Quotes</h1>
        <hr />

        {
            (isLoading)
                ? (
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>
                )
                :(
                    <blockquote className="blockquote text-end">
                        <p className="mb-1"> {quote}</p>
                        <footer className="blockquote-footer">{author}</footer>
                    </blockquote>
                )
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
