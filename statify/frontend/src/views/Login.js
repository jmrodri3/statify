import React from "react";
import axios from "axios";

const serverUrl = process.env.REACT_APP_SERVER;

const instance = axios.create({
    baseURL: serverUrl
});

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: "",
            password: "",
        };

        this.login = this.login.bind(this);
    }

    login(event) {
        event.preventDefault();
        //alert("success");
        instance.post('/registerUser/', {
           name: this.state.name,
           password: this.state.password
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        return (
            <>
                <h1>Welcome to Statify</h1>
                <form onSubmit={this.login}>
                    <label>
                        UserName:
                        <input aria-label="Enter a username" name="userName" onChange={(event) => this.setState({userName: event.target.value})}/>
                    </label>
                    <br />
                    <label>
                        Password:
                        <input aria-label ="Enter a password" name="password" onChange={(event) => this.setState({password: event.target.value})} />
                    </label>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </>
        );
    }
}

export default Login;
