import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios';
import Pusher from 'pusher-js';
import styles from '../styles/Home.module.css'
import { useState ,useEffect } from 'react'
import {toast} from 'react-toastify'
export default function Home() {

const [chats,setChats] = useState([]);
const [messageToSend, setMessageToSend] = useState("");
const [onlineUsersCount, setOnlineUsersCount] = useState(0);
const [onlineUsers, setOnlineUsers] = useState([]);
const [usersRemoved, setUsersRemoved] = useState([]);
const [myinfo,setMyinfo] = useState({});
const [allmembers,setAllmembers] = useState([]);

useEffect(() => {

  const pusher = new Pusher('eb009196e4ebb3bf2adc', {
    cluster: 'eu',
    forceTLS: true,

    authEndpoint: `api/pusher/auth`,
    // this data well be sent to the authEndpoint and will be used to authenticate the user
    auth: { params: { username:'maher9393', userLocation:'login' } },
  });




  // 1- subscribe to the presence channel
  const channel = pusher.subscribe('presence-channel');


 // when a new member successfully subscribes to the channel
 channel.bind("pusher:subscription_succeeded", members => {
  // total subscribed
  setOnlineUsersCount(members.count);
  //console.log('membrs online',onlineUsersCount);
  //console.log(members.count);

  setAllmembers(prevState => [...prevState, members.members]);
  console.log('all members',allmembers , '?????',members?.members);
  //  get online user auth data
 
  // my online data in this channel
  //console.log('online users ✅✅ ',members?.me);
  setMyinfo(members?.me);
   toast.success(`welcome ${myinfo?.info?.username ? myinfo?.info?.username : 'user'}`);
  //console.log('my info📌📌📌',myinfo);

  // all online users in this channel
  //console.log('online users ✅✅ ',members);
});




   // 2-  after user subscripe and send message  recive message from pusher channel 
   // and add message to state from chat-update event
   channel.bind("chat-update", function (data) {
    const { username, message } = data;
    toast.info(`${username} : ${message} new message in site`);
   // setChats([...chats, data]);
    setChats(prevState => [...prevState, { username, message }]);
   // console.log('chat-update 🟪🟪🟪', data);
    console.log('chats 🟪🟪🟪', chats);
  });


  return () => {
    pusher.unsubscribe("presence-channel");
   pusher.disconnect()
  
      console.log("pusher disconnected");
     // console.log(` leaving channel ${myinfo?.info?.username}`);
    //  toast.info(` ${myinfo?.info?.username} you left the site`);
    
   
   
  };

} ,[])


const handleSubmit = async e => {
  e.preventDefault();
  await axios.post("/api/pusher/chat-update", {
    message: 'hello my name is maher ',
    username:`${myinfo?.info?.username}`,
  });
  console.log('sent');
};



const handlemessage = e => {

  console.log('all members',allmembers);

}



  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <div>
      <button
      onClick={handleSubmit}
      >send</button>
    </div>

{chats?.map((chat,index) => (
  <div key={index}>
    <p>{chat.message}</p>
  </div>
))}


<button
type="submit"
onClick={handlemessage}
>all members handle</button>

online users count---- {onlineUsersCount}

allmembers---- {allmembers?.length}
{allmembers && allmembers?.length >0 && allmembers?.map((member2,index) => (
  <div>
    <p>{member2?.username}</p>
  </div>
)
)}

    </div>
  )
}
