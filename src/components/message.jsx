import React, { useState, useLayoutEffect } from "react";

const Message = () => {

    const [ message, setMessage ] = useState( 'This is a server rendered message' );

    useLayoutEffect( () => {
        setMessage( 'This is a client rendered message overriding the server rendered message.' ); 
    }, [] )

    return ( 
        <div className="message">{ message }</div>
    )
}


export default Message;