import React, { useState } from "react";

const Button = () => {

    const [ count, setCount ] = useState( 0 );

    return (
        <div>
            <div className="count"> Button clicked { count } times </div>
            <button onClick={ () => setCount( count => ++ count ) }>Click me</button>
        </div>
    )
}


export default Button;