import React, { useState } from "react";

const Button = () => {

    const [ count, setCount ] = useState( 0 );

    return (
        <div className='counter'>
            <div className="count"> Button clicked { count } times </div>
            <button className='count-btn' onClick={ () => setCount( count => ++count ) }>Click me</button>
        </div>
    )
}


export default Button;