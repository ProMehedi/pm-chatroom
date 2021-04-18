import React, { useRef, useState } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { auth, firestore, timestamp } from '../config/config'
import ChatMessage from './ChatMessage'

const ChatRoom = () => {
  const [formValue, setFormValue] = useState('')

  const scrollRef = useRef()

  const messagesRef = firestore.collection('messages')
  const query = messagesRef.orderBy('createdAt').limit(25)
  const [messages] = useCollectionData(query, { idField: 'id' })

  const sendMessage = async (e) => {
    e.preventDefault()

    const { uid, photoURL } = auth.currentUser

    const message = {
      text: formValue,
      createdAt: timestamp,
      uid,
      photoURL: photoURL ? photoURL : '',
    }

    if (formValue === '') {
      return false
    }

    await messagesRef.add(message)

    setFormValue('')

    scrollRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <>
      <div>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        <div ref={scrollRef}></div>
      </div>
      <form onSubmit={sendMessage}>
        <input
          type='text'
          placeholder='Enter you message. . .'
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />
        <button type='submit' disabled={formValue === '' ? true : false}>
          Send
        </button>
      </form>
    </>
  )
}

export default ChatRoom
