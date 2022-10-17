import React from 'react'
import { Card, Button, Col } from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addFriendUtil, removeFriendUtil } from '../apiUtil';
import { addFriendAction, removeFriendAction } from '../reducers/userReducer';
import './User.scss'
function User(props) {
    const { picture, firstName, lastName, id } = props.user;
    const dispatch = useDispatch();
    const { isLoggedIn, friendList } = useSelector(({ user }) => user);
    const navigate = useNavigate();

    const addFriend = async (payload) => {
        if(!isLoggedIn){
            navigate('/login');
            return;
        }
        
        try {
            const response = await (await addFriendUtil(payload)).data;
            console.log(response);
            if (response?.success) {
                alert(response.message);
                dispatch(addFriendAction(payload));
            }
        } catch (error) {
            console.error(error);
            alert(error.response.data.message);
        }
    }
    const removeFriend = async (payload) => {
        try {
            const response = await (await removeFriendUtil(payload)).data;
            console.log(response);
            if (response?.success) {
                alert(response.message);
                dispatch(removeFriendAction(payload));
            }
        } catch (error) {
            console.error(error);
            alert(error.response.data.message);
        }
    }
    return <Col xl = {2} lg={4} md={6} sm={12} className="mb-3">
        <Card className='user'>
            <Card.Body className='d-flex justify-content-around'>
                <img src={picture} alt="" />
                <div>
                    <div className='mb-3'>{firstName} {lastName}</div>
                    {
                        friendList.includes(id) ? <Button onClick={() => removeFriend({ name: firstName, id })} variant="danger">Remove Friend</Button> :
                            <Button onClick={() => addFriend({ name: firstName, id })} variant="primary">Add Friend</Button>
                    }
                </div>
            </Card.Body>
        </Card>
    </Col>

}

export default User