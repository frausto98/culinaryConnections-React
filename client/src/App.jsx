// import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
        +
        </button>
        <p>count is {count}
        <br></br>
        
          Edit <code>src/App.jsx</code> and save to test HMR
        <br></br>
          this is me testing the src/App.jsx file
        </p>
        <button onClick = {() => setCount((count) => count - 1)} > - </button>
      </div>

      <div>
        <button onClick = {() => setCount((count) => count = 0)} >
          reset
        </button>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
