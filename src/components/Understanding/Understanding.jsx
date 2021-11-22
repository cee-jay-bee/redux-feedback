import React from "react";
import {useState} from "react";
import {Select, MenuItem, Button} from "@material-ui/core";
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';

function Understanding ( props ) {
    // const [name, setName] = useState( null );
    const [understanding, setUnderstanding] = useState(5);
    const dispatch = useDispatch();

    const getUnderstanding = event => {
        console.log('in getUnderstanding', event.target.value);
        setUnderstanding( event.target.value );
    }

    const addUnderstanding = event => {
        dispatch({
            type: 'ADD_DATA',
            payload: understanding
        })
    }

    const removeFeeling = event => {
        dispatch({
            type: 'REMOVE_DATA'
        })
    }


    
    return(
        <div>
            <h1>How well are you understanding the content?</h1>
            <Select value={ understanding } onChange={getUnderstanding}>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
            </Select>
            <Button onClick={removeFeeling}>
            <Link to="/">PREVIOUS</Link></Button>
            <Button onClick={addUnderstanding}>
            <Link to="/support">NEXT</Link></Button>
    
        </div>
    )
}

export default Understanding;