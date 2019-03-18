import React, { Component }  from 'react';
import logo from './logo.svg';
import './App.css';
import Joke from './UserOutput'
import UserOutput from './UserOutput';
import UserInput from './UserInput';
import {useState} from 'react'
import { EventEmitter } from 'events';


 const App = () =>{
   const [usernames,chngeuser] = useState({
    username : [
      {
        names : 'Vikas'
      },{
        names : 'Sahu'
      }
    ]
   })
 
   const changeuser = (event) =>{

   chngeuser({
    username : [
      {
        names : event.target.value
      },{
        names : event.target.value
      }
    ]
   })
   }

   return(
  <div>
    <UserOutput name = {usernames.username[0].names}/> 
    <UserInput x={changeuser} />
    <UserOutput name = {usernames.username[1].names}/> 
  </div>
  )
 }

export default App