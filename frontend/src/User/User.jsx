import React from 'react'
import { Card, Button, Col } from 'react-bootstrap';
import { addFriendUtil } from '../apiUtil';
import './User.scss'
function User(props) {
    const { picture, firstName, lastName, id } = props.user;

    const addFriend = async (payload) => {
        try {
            const response = await (await addFriendUtil(payload)).data;
            console.log(response);
            if (response?.success) {
                alert(response.message);
            }
        } catch (error) {
            console.error(error);
        }
    }
    // const friendList  = [
    //     "60d0fe4f5311236168a109ca",
    //     "60d0fe4f5311236168a109ca",
    //     "60d0fe4f5311236168a109ca",
    //     "60d0fe4f5311236168a109cb",
    //     "60d0fe4f5311236168a109cc",
    //     "60d0fe4f5311236168a109cd"
    //   ]

    return <Col lg={4} md={6} sm={12} className="mb-3">
        <Card className='user'>
            <Card.Body className='d-flex justify-content-around'>
                <img src={picture} alt="" />
                <div>
                    <div className='mb-3'>{firstName} {lastName}</div>
                    <Button onClick={()=>addFriend({name:firstName, id})} variant="primary">Add Friend</Button>
                </div>
            </Card.Body>
        </Card>
    </Col>

}

export default User