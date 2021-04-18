import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import ChatRoom from './components/ChatRoom'
import SignIn from './components/SignIn'
import { auth, provider } from './config/config'
import './App.css'
import SignOut from './components/SignOut'

const App = () => {
  const [user] = useAuthState(auth)

  const signInWithGoogle = () => {
    auth.signInWithPopup(provider)
  }

  return (
    <div className='App'>
      <header>
        <h1>⚛️🔥💬</h1>
        <SignOut />
      </header>
      <main>{user ? <ChatRoom /> : <SignIn login={signInWithGoogle} />}</main>
    </div>
  )
}

export default App
