import { useState } from 'react'
import './App.css'
import NavBar from './homepage/navbar'
import Search from './homepage/book'
import Features from './homepage/features'
import Information from './homepage/information'
import CarsCard from './homepage/choose-car'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Search/>
      <Features/>
      <Information/>
      <CarsCard/>
    </>
  )
}

export default App
