import React from "react";

function Vegetables(){
    const [count,setCounter] = React.useState(0)
    const [countP,setCounterP] = React.useState(0)
    const [countC,setCounterC] = React.useState(0)
    const [countO,setCounterO] = React.useState(0)
    function handelTomatoes(value){
        setCounter( count + value)
    }
    function handelPotatoes(value){
        setCounterP( countP + value)
    }
    function handelCarrot(value){
        setCounterC( countC + value)
    }
    function handelOnions(value){
        setCounterO( countO + value)
    }
    return <>
    <h1>This is vegetables page</h1>
    <h2>Tomatoes :{count}</h2>
    <button onClick={() => handelTomatoes(1)}>+</button>
    <button onClick={() => handelTomatoes(-1)}>-</button>
    <h2>Potatoes :{countP}</h2>
    <button onClick={() => handelPotatoes(1)}>+</button>
    <button onClick={() => handelPotatoes(-1)}>-</button>
    <h2>Carrot :{countC}</h2>
    <button onClick={() => handelCarrot(1)}>+</button>
    <button onClick={() => handelCarrot(-1)}>-</button>
    <h2>Onionss :{countO}</h2>
    <button onClick={() => handelOnions(1)}>+</button>
    <button onClick={() => handelOnions(-1)}>-</button>
    </>
}
export {Vegetables}