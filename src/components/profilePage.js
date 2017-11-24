import React from "react";
import dataObj from "../services/dataService";
// MainPage = Feed Page

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        dataObj.getProfile();
        return (
            <div className="profile">
                <div className="container">
                    <div className="row">
                        <div className="profile-container">
                            <div className="img-container">
                                <img src="profile.png" />
                            </div>
                            <h2>My Name</h2>
                            <p>Beogradski institut za tehnologiju – BIT je škola za programiranje osnovana u Beogradu, s ciljem
                                da svoje polaznike uči praktičnim i primenljivim znanjima u IT industriji. Tehnički deo programa je FrontEnd Stack,
                                najčešće tražen od strane poslodavaca.
                                Pored tehničkog obrazovanja, u BITu se uči i kako funkcioniše IT industrija i kako pronaći svoje mesto u njoj.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfilePage;