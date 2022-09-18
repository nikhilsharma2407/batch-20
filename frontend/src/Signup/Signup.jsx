import { Button, Form, Container, Row, Col,Card } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'


function Signup() {

    const [pwdValidation, setPwdValidation] = useState({
        lowercase: false,
        uppercase: false,
        number: false,
        symbol: false,
        length: false
    });

    const [isValid, setIsValid] = useState(false);

    const { lowercase, uppercase, number, symbol, length } = pwdValidation;

    useEffect(() => {
        const isPwdValid = Object.values(pwdValidation).every(Boolean);
        console.log(isPwdValid);
        setIsValid(isPwdValid);
    }, [setPwdValidation])



    const validatePasword = (e) => {
        const password = e.target.value;
        console.log(password);
        // regex.test(string)
        const lowercase = /(?=.*[a-z])/.test(password);
        const uppercase = /(?=.*[A-Z])/.test(password);
        const number = /(?=.*\d)/.test(password);
        const symbol = /(?=.*[\W_])/.test(password);
        const length = password.length >= 8;
        setPwdValidation({ lowercase, uppercase, number, symbol, length });
    }

    return (
        <Container fluid>
            <Row>
                <Col lg={{ offset: 4, span: 4 }} md={{offset:3, span:6}} sm={{offset:1, span:10}}>
                    <Card className="mt-3 p-3 signup">
                        <Card.Title>Signup</Card.Title>
                        <Card.Body>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Card.Body>
                        <div className='pwd-strength'>
                            <div className={lowercase ? 'text-success' : 'text-danger'}>Lowercase character :- a-z</div>
                            <div className={uppercase ? 'text-success' : 'text-danger'}>Uppercase character :- A-Z</div>
                            <div className={number ? 'text-success' : 'text-danger'}>Numeric character :- 0-9</div>
                            <div className={symbol ? 'text-success' : 'text-danger'}>Special character :- !@#$%^&*()_+</div>
                            <div className={length ? 'text-success' : 'text-danger'}>Password should consist of 8 or more character</div>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Signup