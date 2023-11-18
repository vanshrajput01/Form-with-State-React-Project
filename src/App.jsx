import { useState } from 'react'
import './App.css'
function App() {
  let [data,setdata] = useState(null)
  let [data1,setdata1] = useState(null)
  let[Result,setresult] = useState(false)

  let getdata = (event) =>{
    setdata(event.target.value)
    setresult(false)

  }

  let getdata1 = (event) =>{
    setdata1(event.target.value)
    setresult(false)

  }
  
  


  return (
    <div className='main-container'>
      <h1>Form with State React Project</h1>
      <div className='Form'>
        <label>
          Name:
          <input type="text"  name="name" onChange={getdata}/>
        </label>
        <br></br>
        <label>
          Email:
          <input type="email" name="email" onChange={getdata1} />
        </label>
        <br></br>
        <button onClick = {() => setresult(true)} type="submit">Submit</button>
        
        <h1>Result</h1>
        {Result ? <p> {data} </p> : null} 
        {Result ? <p> {data1} </p> : null}       


    </div>
      
    </div>
  )
}

export default App
