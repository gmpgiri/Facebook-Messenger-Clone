import React, { useState, useEffect } from 'react';
import {IconButton, Button, FormControl, InputLabel,Input } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages]  = useState([]);
  const [username, setUsername] = useState('');

  useEffect(()=>{
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot =>{
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message:doc.data()})))
    })
  }, [] );

  useEffect(() => {
    setUsername(prompt('Please enter your name...'));
  }, [] );

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection('messages').add({
      message : input,
      username : username,
      timestamp : firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }
  return (
    <div className="App">
      <h2> Welcome {username}</h2>
      {
        <FlipMove>
          {
            messages.map(({id, message}) => {
            console.log(message+" ;; ");
            return <Message key ={id} username={username} message ={message}/>
            })
          }
        </FlipMove>
        
      }
      <form className="app_form">
      <FormControl className="app_formControl">
        <InputLabel>Enter a message...</InputLabel>
        <Input className="app_input" placeholder='Enter a message' value={input} onChange={event => setInput(event.target.value)}/>

        <IconButton  className="app_iconButton" disabled={!input} variant="contained" color="primary" type ='submit' onClick={sendMessage}>
          <SendIcon />
         </IconButton>

      </FormControl>

      </form>
    </div>
  );
}

export default App;
