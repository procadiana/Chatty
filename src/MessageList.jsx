import React, {Component} from 'react';
import Message from './Message.jsx';



function MessageList (props){

  const listMessages = props.messages.map((message =>
    <Message key={message.id} message={message}/>

  ));

  const listNotifications = props.notifications.map((notification =>
    <p key={notification.id} className="notification">{notification.content}</p>
  ));

  return (
    <div>
    {listNotifications}
    <main className="messages">
    {listMessages}
    </main>
    </div>
    )
  }


export default MessageList;