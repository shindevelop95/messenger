import './App.css';
import {Button, FormControl, InputLabel,Input} from '@material-ui/core';
import React,{useState,useEffect} from 'react';
import Message from './Message'

function App() {
  const [input,setInput] = useState('');
  const [messages,setMessages] = useState([
    {username:'shin',text:'hey guys'},
    {username:'qazi',text:'whats up'}
  ]);
  const [username, setUsername] = useState('');

  useEffect(()=>{
    setUsername(prompt('Please enter your name'));
  },[])
  console.log(username);
  const sendMessage = (e) =>{
    e.preventDefault();
    setMessages([...messages,{username:username,text:input}])
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

      {
        messages.map(message=>(
          <Message username={username} message={message}/>
        ))
      }

    </div>
  );
}

export default App;