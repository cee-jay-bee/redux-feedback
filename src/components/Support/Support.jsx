import React from "react";
import {useState} from "react";
import {Select, MenuItem, Button} from "@material-ui/core";
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';

function Support ( props ) {
    // const [name, setName] = useState( null );
    const [support, setSupport] = useState(5);
    const dispatch = useDispatch();

    const getSupport = event => {
        console.log('in getSupport', event.target.value);
        setSupport( event.target.value );
    }

    const addSupport = event => {
        dispatch({
            type: 'ADD_DATA',
            payload: support
        })
    }

    const removeUnderstanding = event => {
        dispatch({
            type: 'REMOVE_DATA'
        })
    }


    
    return(
        <div>
            <h1>How well are you being supported?</h1>
            <Select value={ support } onChange={getSupport}>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
            </Select>
            <Button onClick={removeUnderstanding}>
            <Link to="/understanding">PREVIOUS</Link></Button>
            <Button onClick={addSupport}>
            <Link to="/comments">NEXT</Link></Button>
    
        </div>
    )
}

export default Support;