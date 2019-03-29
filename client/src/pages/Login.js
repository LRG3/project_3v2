import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { Input, FormBtn } from "../components/Form";
import { Link } from "react-router-dom";


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        };
    }


    componentDidMount() {
        console.log("mounted");
        document.getElementById("container").classList.remove("no-video")
    }

    handleLogin = event => {
        const { username, password } = this.state
        this.props.handleSignIn(username, password, event, () => {
            this.props.history.replace("/movies")
        })
    }
    
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {

        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>MovieHub!</h1>
                        </Jumbotron>
                        <Input
                            value={this.state.username}
                            onChange={this.handleInputChange}
                            name="username"
                            placeholder="Username (required)"
                        />
                        <Input
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            name="password"
                            type="password"
                            placeholder="Password (required)"
                        />
                        <FormBtn
                            disabled={!(this.state.username && this.state.password)}
                            onClick={this.handleLogin}
                        >Sign In
                            {/* <Link to="/movies">Sign In</Link> */}
                        </FormBtn>

                        <Link to="/signUp">New User?</Link>


                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Login;
