import React from 'react';
import Joi from "joi-browser";
import Form from "./form";

class SignUp extends Form{
    state = {
        data: { username: "",lastname: "",email: "", password: "", confirm: "" },
        errors: {}
    };

    schema = {
        username: Joi.string()
        .required()
        .label("First Name"),
        lastname: Joi.string()
        .required()
        .label("Last Name"),
        email: Joi.string()
        .required()
        .email()
        .label("Email Address"),
        password: Joi.string()
        .required()
        .min(5)
        .label("Password"),
        confirm: Joi.string()
        .required()
        .label("Confirm Password")
        

    };
    doSubmit = () => {
        console.log("submitted");
    }

    render() { 
        return (
            <div>
                <h1>SignUp</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username", "First Name")}
                    {this.renderInput("lastname", "Last Name")}
                    {this.renderInput("email", "Email Address")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderInput("confirm", "Confirm Password", "password")}
                    {this.renderButton("Sign Up")}
</form>
<span>By creating an account, you agree to our rewards program terms and conditions.</span>
            </div>
        );
    }
}
 
export default SignUp;