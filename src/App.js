import React, { Component } from "react";
import EntryCard from "./components/EntryCard"; 
import './App.css';
import LeftNav from "./components/LeftNav";
//import messages from "./messages.json";
// import axios from 'axios';


//////

class App extends Component {
  // Setting this.state.messages to the messages json array
  //trying to change this.state.messages to array, then have get request 
  // state = {
  //   messages: []
  // };


  // componentDidMount() {
  //   console.log('didmount');
    
  //   axios.get(`http://localhost:1337/messages`)
  //     .then(res => {
  //       console.log('res: ', res);
  //       const messages = res.data;
  //       this.setState({ messages });
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
    
  // }
  // Map over this.state.messages and render a card component for each message object

  render() {
    
    // console.log('state.messages: ' + this.state.messages);
    // console.log('this.state ', this.state);
    return (

      <div className="container-fluid">
        <div className="row">
          <LeftNav />
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            <div className="chartjs-size-monitor chartstyle">
              <div className="chartjs-size-monitor-expand chartstyle"
              >
                <div className="setw" ></div>
              </div>
              <div className="chartjs-size-monitor-shrink chartstyle"
              >
                <div className="position">
                </div>
              </div>
            </div>

            {/* {this.state.messages.map(message => ( */}
              <EntryCard
                
              />

            {/* ))} */}
          </main>
        </div>
      </div>
    );
  }
}

export default App;
