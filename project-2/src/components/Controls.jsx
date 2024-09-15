

export default function Controls(props) {

  

    function increment(){
        props.setCount(props.count + 1);
    }

    function decrement(){
        props.setCount(props.count - 1);
    }

    return(
      <>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      </>
    );
  }