import React, { Component } from "react";
import { Form } from "reactstrap";

class SignUp extends Component {
  state = {
    fname: "",
    lname: "",
    email: "",
    password: "",
  };

  inputchange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  formsubmit = (e) => {
    console.log(this.state);
    e.preventDefault();

    const clicked = e.target;
    clicked.appendChild = (
      <div>
        {" "}
        <button className="successful">Successfully Registered</button>
      </div>
    );

    //  const btn=  clicked.createElement("button")
    //     btn.innerHTML = "Successfully Registered"
  };

  render() {
    return (
      <div className="registration">
        <div className="container">
          <div className="row">
            <div className=" regform">
              <Form className="form" onSubmit={(e) => this.formsubmit(e)}>
                <h1>Registration</h1>
                <label>First Name</label>
                <input
                  required
                  type="text"
                  name="fname"
                  value={this.state.fname}
                  onChange={(e) => this.inputchange(e)}
                ></input>
                <label>Last Name</label>
                <input
                  required
                  type="text"
                  name="lname"
                  value={this.state.lname}
                  onChange={(e) => this.inputchange(e)}
                ></input>
                <label>Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={(e) => this.inputchange(e)}
                ></input>
                <label>Password</label>
                <input
                  required
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={(e) => this.inputchange(e)}
                ></input>
                <button>Sign Up</button>
                <a href="Reset_password" className="forgotPass">
                  Forgot Password
                </a>
                <p className="signIn">
                  have an account?{" "}
                  <span>
                    <a href="Login">Sign In</a>
                  </span>
                </p>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
