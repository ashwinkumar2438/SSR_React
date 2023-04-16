import React from "react";

// relative imports:
import Button from "./components/button.jsx";
import Message from "./components/message.jsx";

const App = () => {

    return ( 
            <div className="app">
                <h4>Hello To the World of server side rendering!</h4>
                <Button />
                <Message />
            </div>
    )
}

export default App;