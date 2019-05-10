import React, {Component} from 'react';
import MessageList from "./MessageList.jsx";
import ChatBar from "./Chatbar.jsx";
import messages from "../messages.json";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: "Anon",
      messages: [],
      notifications: [],
      clientUpdate: 0,
    };

    this.addNewMessage = this.addNewMessage.bind(this);
    this.addNewName = this.addNewName.bind(this);
  }


  componentDidMount() {
    var connection = new WebSocket("ws://localhost:3001");
    this.setState({connection});

    connection.onmessage = (event) => {
      console.log("Message from the server", event.data);

      const data = JSON.parse(event.data);

      switch(data.type) {

        case "incomingMessage":
          this.setState({messages: this.state.messages.concat(data)});
          // handle incoming message
          break;

        case "incomingNotification":
          this.setState({notifications: this.state.notifications.concat(data)});
          break;

        case "usersUpdate":{
          this.setState({clientUpdate: data.clientUpdate});
          console.log('dataaaaaa', data.clientUpdate)
          break;
        }

        default:
          // show an error in the console if the message type is unknown
          console.log("Error " + data);
    };
  }}

  addNewMessage(content){
    console.log(content)
    const newMessage = {type: "postMessage", username: this.state.currentUser, content:content };
    this.state.connection.send(JSON.stringify(newMessage));
  }

  addNewName(name){
    const newMessage = {type: "postNotification", content: `${this.state.currentUser} has changed their name to ${name}.`};
    this.state.connection.send(JSON.stringify(newMessage));
    this.setState({currentUser: name});
  }

  render() {
    return (
      <div>
      <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
        <p className="user-couter">There are {this.state.clientUpdate} users online</p>
      </nav>
      <MessageList messages={this.state.messages} notifications={this.state.notifications} />
      <ChatBar currentUser={this.state.currentUser} onKeyPress={this.onKeyPress} addNewMessage={this.addNewMessage} addNewName={this.addNewName}/>
      </div>

    );
  }
}


export default App;
