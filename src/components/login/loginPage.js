import React from "react";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";


const LoginPage = (props) => {
    return (
        <div className="container-fluid">
            <div className="row" id="mainrow">

                <div className="col-lg-6" id="welcome">

                    <h1>Welcome to BitBook</h1>
                    <p>Lorem ipsum dolor sit amet, ad vis mazim legere virtute. Per ne labore graecis menandri. Vel mutat causae ut, ferri debet omnium vim et. Ea mel delenit consetetur, ne convenire philosophia pri, equidem omittam blandit no est. Id dicta nostro qui. Reque iisque nominavi sed in, eam in nulla consequat, sea philosophia definitionem et</p>
                </div>

                <div className="col-lg-6">

=======
                    <div className="table">

                        <div className="row" id="thead">
                            <div className="col-sm-6">
                                <Link to="/login">Login</Link>
                            </div>
                            <div className="col-sm-6">
                                <Link to="/register">Register</Link>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <Switch>
                                <Route exact path="/" component={LoginForm} />
                                <Route path="/login" component={LoginForm} />
                                <Route path="/register" component={RegisterForm} />
>>


                    <div className="row" id="thead">
                        <div className="col-sm-6">
                            <Link to="/login">Login</Link>
                        </div>
                        <div className="col-sm-6">
                            <Link to="/register">Register</Link>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <Switch>
                            <Route exact path="/" component={LoginForm} />
                            <Route path="/login" component={LoginForm} />
                            <Route path="/register" component={RegisterForm} />


                        </Switch>
                    </div>

=======

                </div>
            </div>

        </div >
    );
};


export default LoginPage; 