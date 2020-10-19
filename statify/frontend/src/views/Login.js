import React from "react";

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
        alert('UserName: ' + this.state.userName + " " + this.state.password);
        event.preventDefault();
    }

    render() {
        return (
            <>
                <h1>Welcome to Statify</h1>
                <form onSubmit={this.login}>
                    <label>
                        UserName:
                        <input name="userName" onChange={(event) => this.setState({userName: event.target.value})}/>
                    </label>
                    <br />
                    <label>
                        Password:
                        <input name="password" onChange={(event) => this.setState({password: event.target.value})} />
                    </label>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </>
        );
    }
}

export default Login;
