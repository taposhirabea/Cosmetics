import React from 'react';
import Joi from "joi-browser";
import Form from "./form";

class SignIn extends Form{
    state = {
        data: { username: "", password: "" },
        errors: {}
    };

    schema = {
        username: Joi.string()
        .required()
        .label("Username"),
        password: Joi.string()
        .required()
        .label("Password")
    };
    doSubmit = () => {
        console.log("submitted");
    }

    render() { 
       
        return (
            <div>
                <h1>SignIn</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username", "Username")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderButton("Sign In")}
</form>
            </div>
        );
    }
}
 
export default SignIn;