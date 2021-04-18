import React from 'react'

const SignIn = ({ login }) => {
  return (
    <>
      <button className='sign-in' onClick={login}>
        Sign in with Google
      </button>
    </>
  )
}

export default SignIn
