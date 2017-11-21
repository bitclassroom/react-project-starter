import React from "react";

import EntryPage from "./entryPage/entryPage";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <EntryPage />
            </div>
        );
    }
}

export default App;
