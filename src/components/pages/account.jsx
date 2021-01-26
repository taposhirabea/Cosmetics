import React from 'react';

import SignIn from "../sign-in-and-sign-up.jsx/signIn";
import SignUp from "../sign-in-and-sign-up.jsx/signUp";

const Account = () => {
    return <div className="jumbotron">
        <div className="row">
            <div className="col-sm-4">
                <SignIn/>
            </div>
            <div className="col-sm-4">
                <SignUp/>
            </div>
        </div>
    </div>;
}
 
export default Account;