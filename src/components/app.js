import React from "react";

import HelloWorld from "./helloWorld/helloWorld";
import Dashboard from "./dashboard";
import LoginPage from "./loginComponents/loginPage";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <LoginPage />
            </div>);
        
    }
}

export default App;
