import React from 'react'
import { Card, Button, Col } from 'react-bootstrap';
import './User.scss'
function User(props) {
    const { picture, firstName, lastName, id } = props.user;

    return <Col lg={4} md={6} sm={12} className="mb-3">
        <Card className='user'>
            <Card.Body className='d-flex justify-content-around'>
                <img src={picture} alt="" />
                <div>
                    <div className='mb-3'>{firstName} {lastName}</div>
                    <Button variant="primary">Add Friend</Button>
                </div>
            </Card.Body>
        </Card>
    </Col>

}

export default User