import React from 'react'
import { Card, Button,Col } from 'react-bootstrap';
import './User.scss'
function User(props) {
    const { picture, firstName, lastName, id } = props.user;

    return <Col lg={4} md={6} sm={12}>
        <Card className='user'>
            <Card.Body>
                <img src={picture} alt="" />
                <div >{firstName} {lastName}</div>
                <Button variant="primary">Add Friend</Button>
            </Card.Body>
        </Card>
    </Col>

}

export default User