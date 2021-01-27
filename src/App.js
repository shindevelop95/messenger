import './App.css';
import {Button, FormControl, InputLabel,Input} from '@material-ui/core';
import React,{useState,useEffect} from 'react';
import Message from './Message'
import db from './firebase'
import firebase from 'firebase';
import FlipMove from 'react-flip-move'
function App() {
  const [input,setInput] = useState('');
  const [messages,setMessages] = useState([
    {username:'shin',message:'hey guys'},
    {username:'qazi',message:'whats up'}
  ]);
  const [username, setUsername] = useState('');

  useEffect(()=>{
    db.collection("messages").orderBy('timestamp','desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc=>({id:doc.id,message:doc.data()})))
    })
  },[])
  useEffect(()=>{
    setUsername(prompt('Please enter your name'));
  },[])
  console.log(username);
  const sendMessage = (e) =>{
    e.preventDefault();
    db.collection('messages').add({
      message:input,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()

    })
    /*setMessages([...messages,{username:username,message:input}])*/
    setInput('');
  }
  return (
    <div className="App">
      <h1>Hello</h1>
    
      <form>
        <FormControl>
          <InputLabel>Enter a message</InputLabel>
          <Input aria-describedby="my-helper-text" value={input} onChange={event => setInput(event.target.value)}/>
          <Button disabled={!input} variant="outlined" type="submit" onClick={sendMessage}>Send Message</Button>
        </FormControl>
      </form>

     <FlipMove>
     {
        messages.map(({id,message})=>(
          <Message key={id} username={username} message={message}/>
        ))
      }
     </FlipMove>

    </div>
  );
}

export default App;