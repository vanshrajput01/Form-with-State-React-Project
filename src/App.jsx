import './App.css'
function App() {

  return (
    <div>
      <h1>Form with State React Project</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <input type="submit" value="Submit" />
        <input type="reset" value="Reset" />
      </form>


    </div>
  )
}

export default App
