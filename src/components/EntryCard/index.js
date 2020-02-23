import React from "react";
import "./style.css";
// import DeleteForever from '@material-ui/icons/DeleteForever';
import axios from 'axios';
import AlertDialog from "./../AlertDialog";
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
            message.formattedTime = dayjsDate.format('hh:mm a');
            
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


// deleteForever(id){
//   // call service from server.js
//   console.log('id', id);
//   axios.delete(`${process.env.REACT_APP_API_DOMAIN}/message/${id}`)
//       .then((response) => {
//         console.log('response ', response);
//       })
//     }

  render() {
    return (
<div>
  
      {this.state.messages.map((message) => 
          <div key={`card-id-${message.id}`}>
            <div className="card entry">
              <div className="card-body">
              <AlertDialog
                id={message.id}
                >
                  </AlertDialog>
                <h5 className="card-title">{message.formattedDate} </h5>
                <h5 className="card-time">{message.formattedTime}</h5>
                <p className="card-text">{message.body}.</p>
                
              
              </div>
            </div>
          </div>

        )
      }
        </div>
    )}
}
        


