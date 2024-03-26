import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useAuth0 } from '@auth0/auth0-react'

function App() {
  const {loginWithRedirect,loginWithPopup, user, isAuthenticated} = useAuth0();
  return (
    <>
    <h1>Hola</h1>
<button onClick={()=> loginWithRedirect()}>Login</button>
<button onClick={()=> loginWithPopup()}>Login popup</button>
    </>
  )
}

export default App
