import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [input,setInput]=useState("")

  const handleChange = (e) => {
    setInput(e.target.value);
  }
  const btnClick=(e)=>{
    const value=e.target.value;
    if(value==="AC"){
      setInput("");
    }
    else if(value==="DEL"){
      setInput((prv)=>prv.slice(0,-1));
    }
    else if(value==="="){
      setInput(eval(input));
    }
    else{
      setInput((prv)=>prv+value);
    }
  }

  return (
    <>
     <div>
      <h1>Calculator</h1>
      <div className='Calculator'>
        <input disabled value={input} type="text" className='input' placeholder='0' onChange={handleChange}/>
         <div className='btnDiv'>
          <button className='btn Op' value={'AC'} onClick={btnClick}>AC</button>
          <button className='btn Op' value={'DEL'} onClick={btnClick}>DEL</button>
          <button className='btn Op' value={'%'} onClick={btnClick}>%</button>
          <button className='btn Op' value={'/'} onClick={btnClick}>/</button>
        </div>
        <div className='btnDiv'>
          <button className='btn' value={9} onClick={btnClick}>9</button>
          <button className='btn' value={8} onClick={btnClick}>8</button>
          <button className='btn' value={7} onClick={btnClick}>7</button>
          <button className='btn Op' value={'-'} onClick={btnClick}>-</button>
        </div>
         <div className='btnDiv'>
          <button className='btn' value={6} onClick={btnClick}>6</button>
          <button className='btn' value={5} onClick={btnClick}>5</button>
          <button className='btn' value={4} onClick={btnClick}>4</button>
          <button className='btn Op' value={'*'} onClick={btnClick}>x</button>
        </div>
         <div className='btnDiv'>
          <button className='btn' value={3} onClick={btnClick}>3</button>
          <button className='btn' value={2} onClick={btnClick}>2</button>
          <button className='btn' value={1} onClick={btnClick}>1</button>
          <button className='btn Op' value={'+'} onClick={btnClick}>+</button>
        </div>
         <div className='btnDiv'>
          <button className='btn' value={0} onClick={btnClick}>0</button>
          <button className='btn' value={"00"} onClick={btnClick}>00</button>
          <button className='btn' value={'.'} onClick={btnClick}>.</button>
          <button className='btn Op eq' value={'='} onClick={btnClick}>=</button>
        </div>
      </div>
     </div>
    </>
  )
}

export default App