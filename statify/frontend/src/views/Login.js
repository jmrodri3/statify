import React from "react";
import authorizeSpotify from "../providers/SpotifyApi";

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
        alert('UserName: ' + this.state.userName + " " + this.state.password);
        let response = authorizeSpotify();
        //alert("success");
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
