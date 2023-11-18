import './App.css'
function App() {

  return (
    <div className='main-container'>
      <h1>Form with State React Project</h1>
      <form className='Form'>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br></br>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br></br>
        <input type="submit" value="Submit" />
        <input type="reset" value="Reset" />
      </form>


    </div>
  )
}

export default App
