import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';
import DeleteForever from '@material-ui/icons/DeleteForever';
import "./styles.css";



export default function AlertDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const deleteForever = () => {
    // call service from server.js
    console.log(props);
    console.log(props.id);
    const id = props.id
    console.log('id', id);
    axios.delete(`${process.env.REACT_APP_API_DOMAIN}/message/${id}`)
        .then((response) => {
          console.log('response ', response);
        })
  }

  const handleClose = (event, index) => {
    console.log('index', index);
   console.log(event.target.innerText);
   const deleteConfirmed = event.target.innerText;
   if (deleteConfirmed === "DELETE"){
     deleteForever(index);
   
   }
   setOpen(false);

  };

  return (
    <div>

        
      <DeleteForever className="delete" onClick={handleClickOpen}>
        
      </DeleteForever>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete this message?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You will not be able to un-do this. 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
