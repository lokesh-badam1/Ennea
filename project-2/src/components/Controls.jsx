import {count,setCount} from "../App"

function increment(){
    setCount(count+1);
  }


export default function Tasks(props){
    return(
        <>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    </>
    );
}

