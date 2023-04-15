import React, { useState } from "react";

// relative imports:
import Button from "./button.jsx";

const App = () => {

    const [ state, setState ] = useState('My State!');
    return ( 
            <div>
                <h4>Hello To the World of server side rendering! { state }</h4>
                <Button />
            </div>
    )
}

export default App;