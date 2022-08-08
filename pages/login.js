import React from 'react';
import axios from 'axios'
import { useState ,useEffect, useRef } from 'react'
import io from "socket.io-client";

let socket;
const Login = () => {
    const socketRef = useRef();
    const ENDPOINT = 'https://node-heroku9393.herokuapp.com'

    useEffect(() => {

        // heroku https://node-heroku9393.herokuapp.com/
// vercel  https://nodejs-vercel-nine.vercel.app
// netlify   https://genuine-granita-abb198.netlify.app//.netlify/functions/api
        axios.get('https://node-heroku9393.herokuapp.com/').then(res => {

        console.log(res?.data);
        

    })

    }, []);



    useEffect(() => {
      
        socket = io(ENDPOINT ,   { transports: ['websocket', 'polling', 'flashsocket'] });
        console.log('------->',socket);
    
      
    
     
    
        socketRef.current = io.connect('https://node-heroku9393.herokuapp.com/');
    
        socket.on("your id", id => {
          console.log('your id',id);
        }, [])

       // socket.emit('send message', 'hello abiiiii');
    
       // receive message from server socket
        // socket.on("message", (message) => {
        //  console.log('message',message);
        // })
      }, []);



      // 
      const sendmessage = () => {

        // send message to server socket
        socket.emit('send message', 'hello  majd bey');
        socket.on("message", (message) => {
            console.log('message',message);
           })

      }


    return (
        <div>
            <h1>Login</h1>

            <div>
                <button onClick={sendmessage}>send message</button>
            </div>
        </div>
    );
}

export default Login;
