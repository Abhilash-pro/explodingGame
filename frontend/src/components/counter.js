import React from "react";
import { useSelector,useDispatch } from "react-redux";

const Counter = () => {
 const dispatch =  useDispatch();
  const counter = useSelector((state) => state.counter);

  const toggleCounterHandler = () => {};

const incrementHandler =()=>{
  dispatch({type: 'increment'})
}
const drecementHandler =()=>{
  dispatch({type: 'decrement'})
}

  return (
    <main>
      <div>
        <h1>Redux Counter</h1> <br/>
        <div>{counter}</div>
      </div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={drecementHandler}>Decrement</button>

      </div>
      <button onClick={toggleCounterHandler}> Toggle Counter</button>
    </main>
  );
};
export default Counter;
