import { useState } from 'react'


import './App.css'



function App() {

//  letting cosnt define
  let [counter,setCounter] = useState(15)

  const [progress, setProgress] = useState(0);

  const addValue =() =>{
    

    // adding the counter --------------------------------------------

    if(counter <150){
    setCounter(prevcounter => prevcounter+1)
    }
    
  }
 //removing the counter --------------------------------------------------

  const removeValue = ()  =>{
   
    if(counter >0){
    setCounter(counter-1)
    }
  }


    //handle button click ------------------------------------------------

  const handleButtonClick = ()=>{
    if(progress <150){
        setProgress(progress +1);
    }
}

//handle button reset -------------------------------------------------

const handleButtonReset =()=>{
  if(progress >0){
  setProgress(progress -1);
  }}



const getColor =()=>{
if(progress <40){
    return "#747bff";
}else if(progress <70){
    return "#ffa500"
}else  {
    return "#2ecc71";
}

}

  return (
    <>
    {/* progress bar start */}


    <div className="container">
<div className="progress-bar">
    <div className="progress-bar-fill"
     style ={{width:`${progress}%`, backgroundColor:getColor()}}  >
        {" "}
     </div>

</div>

<div  className="progress-label">{progress}</div>
{/* <button onClick={handleButtonClick}>undo</button>
<button onClick={handleButtonReset} >redo</button> */}

</div>
{/* progress bar end */}




     <h2>Number increament/decreament</h2>
     {/* <h2>Number value : {counter}</h2> */}
     <button  onClick={handleButtonClick} >add value</button>
     <br/>
     <button
    onClick={handleButtonReset}>remove value </button>
    
    </>
  )
}

export default App
