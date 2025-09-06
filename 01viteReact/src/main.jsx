import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Rishav from './rishav.jsx'

function MyCustom(){
  return(
    <div><h1>hello</h1></div>
    
  )
}

createRoot(document.getElementById('root')).render(
  // <>
  //   <App />
  //   <Rishav/>
  //   MyCustom()
  //   </>

  
    // MyCustom()
  
)
