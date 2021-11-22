import React from "react";
import {useState} from "react";
import {Select, MenuItem, Button} from "@material-ui/core";
import {Link} from 'react-router-dom';

function Thanks ( props ) {
    // const [name, setName] = useState( null );

    return(
        <div>
            <h1>Thank You for Submitting Feedback</h1>
            <Button >
            <Link to="/">Submit New Survey</Link></Button>
        </div>
    )
}

export default Thanks;