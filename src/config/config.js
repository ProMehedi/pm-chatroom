import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDUqBwXakaTgfBvU8xE_F9tM0127Fu7B8k',
  authDomain: 'rb-chat-3ba5a.firebaseapp.com',
  projectId: 'rb-chat-3ba5a',
  storageBucket: 'rb-chat-3ba5a.appspot.com',
  messagingSenderId: '605742779190',
  appId: '1:605742779190:web:097848f95c71d0335a8197',
}
// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig)
export const provider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const timestamp = firebase.firestore.FieldValue.serverTimestamp()
