import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Charts from './Charts/Charts'
import Rechart from './components/Rechart.jsx/Rechart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <Charts></Charts>
      <Rechart></Rechart>
    </div>
  )
}

export default App
