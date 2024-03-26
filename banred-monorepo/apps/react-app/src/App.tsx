import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useAuth0 } from '@auth0/auth0-react'
import { Profile } from './Profile'

function App() {
  const {loginWithRedirect,loginWithPopup, user, isAuthenticated, logout} = useAuth0();
  return (
    <>
    <h1>Hola</h1>
    {isAuthenticated && (<button onClick={()=> logout()}>Logout</button>)}
    {!isAuthenticated && (<>
      <button onClick={()=> loginWithRedirect()}>Login</button>
<button onClick={()=> loginWithPopup()}>Login popup</button></>)}

<Profile/>

    </>
  )
}

export default App
