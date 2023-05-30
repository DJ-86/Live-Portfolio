import { useState } from 'react'
import './App.css'
import ShapeFalling from './components/ShapeFalling'
import Nav from './components/Nav'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav></Nav>
      <ShapeFalling>
      </ShapeFalling>
    </>
  )
}

export default App
