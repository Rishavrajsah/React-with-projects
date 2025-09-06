import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-amber-50 text-black mb-5'>Hello world</h1>
      <Card userName ="rishav" />
      <Card/>
    </>
  )
}

export default App
