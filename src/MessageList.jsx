import React, {Component} from 'react';
import Message from './Message.jsx';



function MessageList (props){
  console.log(props.messages)
  const listMessages = props.messages.map((message =>
    <Message key={message.id} message={message} />
  ));

  return (
    <main className="messages">
    {listMessages}

    </main>
    )
  }


export default MessageList;