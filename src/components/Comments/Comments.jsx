import React from "react";
import {useState} from "react";
import {Select, MenuItem, Button, TextField} from "@material-ui/core";
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';

function Comments ( props ) {
    // const [name, setName] = useState( null );
    const [comments, setComments] = useState('');
    const dispatch = useDispatch();

    const handleChange = event => {
        console.log( 'in nameChange', event.target.value);
        setComments(event.target.value);  
    }

    const addComments = event => {
        dispatch({
            type: 'ADD_DATA',
            payload: comments
        })
    }
    const removeSupport = event => {
        dispatch({
            type: 'REMOVE_DATA'
        })
    }


    
    return(
        <div>
            <h1>Any comments you want to leave?</h1>
            <TextField
                    id={'comments'}
                    variant={'outlined'}
                    label={'Comments'}
                    margin={'normal'}
                    InputLabelProps={{ shrink: true }}
                    onChange={ (event ) =>handleChange ( event )}
                />
            <Button onClick={removeSupport}>
            <Link to="/support">PREVIOUS</Link></Button>
            <Button onClick={addComments}>
            <Link to="/review">NEXT</Link></Button>
    
        </div>
    )
}

export default Comments;