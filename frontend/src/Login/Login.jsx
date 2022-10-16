import { Button, Form, Container, Row, Col,Card } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import { loginUtil, loginWithTokenUtil, signupUtil } from '../apiUtil';
import {useDispatch} from "react-redux";
import { loginAction } from '../reducers/userReducer';

function Login() {

    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const dispatch = useDispatch();

    const login = async(e)=>{
        const payload = {username,password};
        try {
            const userData  = await (await loginUtil(payload)).data;
            console.log(userData);
            if(userData){
                dispatch(loginAction(userData));
                // alert(`${userData.data.username} logged in successfully!!!` );
                localStorage.setItem('token',userData.data.token);
            } 
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Container fluid>
            <Row>
                <Col lg={{ offset: 4, span: 4 }} md={{offset:3, span:6}} sm={{offset:1, span:10}}>
                    <Card className="mt-3 p-3 signup">
                        <Card.Title>Signup</Card.Title>
                        <Card.Body>
                            <Form.Group className="mb-3" controlId="username">
                                <Form.Label>Username</Form.Label>
                                <Form.Control autoComplete='false' placeholder="Enter username" onChange={e=>setUsername(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" onChange={e=>setPassword(e.target.value)} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" onClick={login} disabled = {!(username.length && password.length)}>
                                {/* !conditon-a && !condition b -> !(a||b) */}
                                {/* !conditon-a || !condition b -> !(a&&b) */}
                                Login
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Login