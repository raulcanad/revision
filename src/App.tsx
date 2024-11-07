import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Users from './components/Users.tsx'
import Contador from './components/Contador.tsx'
import Componente from './components/MontajeDesmontaje.tsx'
import Promesa from './components/Promesa.tsx'
import DatosComponent from './components/PromesaAsync.tsx'
import AppContext from './components/useContext.tsx'
import Timer from './components/CustomHook.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Componente/>
        <Users/>
        <Contador/>
        <Promesa/>
        <DatosComponent/>
        <AppContext/>
        <Timer/>
        
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
