
import React from "react";
import "./style.css";

import axios from 'axios';
const dayjs = require('dayjs');

require('dotenv').config();

export default class EntryCard extends React.Component {
  state = {
    messages: []
  }

  componentDidMount() {
    
      axios.get(process.env.REACT_APP_API_DOMAIN + '/messages')
      .then((response) => {
        // handle success
        console.log('response ', response);
        
        this.setState({ 
          messages: response.data.map(message => {
            const dayjsDate = dayjs(message.createdAt);
            message.formattedDate = dayjsDate.format('dddd, MMMM D YYYY');
            message.formattedTime = dayjsDate.format('HH:mm:ss');
            return message;
          })
        });
        console.log('this.state ', this.state);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  render() {
    return (
<div>
  
      {this.state.messages.map(message =>
          <div>
            <div className="card entry">
              <div className="card-body">
                <h5 className="card-title">{message.formattedDate} </h5>
                <h3 className="card-time">{message.formattedTime}</h3>
                <p className="card-text">{message.body}.</p>
              </div>
            </div>
          </div>

        )
      }
        </div>
    )}
}
        


