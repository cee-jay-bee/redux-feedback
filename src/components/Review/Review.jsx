import React from "react";
import {useState} from "react";
import {useSelector, useDispatch } from 'react-redux';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@material-ui/core';
import {Link} from 'react-router-dom';
import axios from 'axios';


function Review ( props ) {
    // const [name, setName] = useState( null );
    const data = useSelector(store => store.data);
    const dispatch = useDispatch();

    const postFeedback = () => {
        axios.post( `/feedback`, data ).then( (response)=>{
            //send a dispatch with an empty array to empty out the store
            dispatch({ type: 'EMPTY', payload: [] });
        }).catch((err)=>{
             alert('POST Failed');
             console.log(err);
        });
    }

    const [open, setOpen] = useState(false);
    //this is for the confirmation dialogue, to start it as closed

    const openDialog = () => {
      setOpen(true);
      //this is the function that opens the confirmation dialogue on button click
    };
  
    const disagree = () => {
      setOpen(false);
      //this closes it again if the user clicks "disagree"
    };
    

    return(
        <div>
            <h1>Review Your Feedback</h1>
            <p>Feelings: {data[0]}</p>
            <p>Understanding: {data[1]}</p>
            <p>Support: {data[2]}</p>
            <p>Comments: {data[3]}</p>
            <Button variant="contained" color="primary" size="large" style={{fontSize: 24}} onClick={openDialog}>Submit</Button>

            <Dialog
                open={open}
                onClose={postFeedback, disagree}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title">
                {"Are you finsihed providing feedback?"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                   Click Agree: your feedback will be submitted.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={disagree}>Disagree</Button>
                <Button onClick={postFeedback} autoFocus><Link to="/">Agree</Link></Button>
            </DialogActions>
            </Dialog>
        </div>
    )
}

export default Review;