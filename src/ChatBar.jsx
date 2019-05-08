import React,{Component} from 'react';


function Chatbar(props) {
    return(
      <footer className="chatbar">
      <input className="chatbar-username" placeholder="Your Name (Optional)" defaultValue={props.currentUser} />
      <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyPress={props.onKeyPress } value={props.content }/>
      </footer>
    )
}

export default Chatbar;