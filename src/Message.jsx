import React,{Component} from 'react';



function Message (props){

    return (
    <div className="message">
    <span className="message-username" style={{color: props.message.color}}>{props.message.username}</span>
    <span className="message-content">{props.message.content}</span>
    </div>
    );
}

export default Message;