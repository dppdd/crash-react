import { useState } from 'react'
import './App.css'
import BootstrapTable from './components/BootstrapTable'

function App () {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <BootstrapTable />
    </div>
  )
}

export default App