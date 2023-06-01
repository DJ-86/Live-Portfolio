import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Greeting from './components/Greeting'
import ButtonNav from './components/ButtonNav'
import About from './components/About'
import Projects from './components/Projects/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav></Nav>
      <Greeting></Greeting>
      <ButtonNav></ButtonNav>
      <About></About>
      <Projects></Projects>
    </>
  )
}

export default App
