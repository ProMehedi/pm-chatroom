import { auth } from '../config/config'

const SignOut = () => {
  return <button onClick={() => auth.signOut()}>Sign Out</button>
}

export default SignOut
