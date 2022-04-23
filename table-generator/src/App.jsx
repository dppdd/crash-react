import { useState } from 'react'
import './App.css'
import BootstrapTable from './components/BootstrapTable'
import { bootstrapTableDB } from './mock-db/bootstrapTable'

function App() {
  // we set the mocked API response as local state.  
  const [data, setData] = useState(bootstrapTableDB)

  return (
    <div className='App'>
      <BootstrapTable data={data} />
    </div>
  )
}

export default App