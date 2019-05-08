import React, {Component} from 'react';
import Message from './Message.jsx';



function MessageList (props){

  const listMessages = props.messages.map((messageX =>
    <Message key={messageX.id} message={messageX} />
  ));

  return (
    <main className="messages">
    {listMessages}

    </main>
    )
  }


export default MessageList;