import axios from 'axios'
import React, { useEffect, useState } from 'react'
import User from '../User/User';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Users(props) {
    const URL = 'https://dummyapi.io/data/v1/user?limit=10';
    const APP_HEADER = '623f19872934031e5b0d8089';

    const [users, setUsers] = useState([]);
    useEffect(() => {

        (async () => {
            const { data: userData } = await (await axios.get(URL, { headers: { "app-id": APP_HEADER } })).data;
            // const userData  = await (await axios.get(URL, { headers: { "app-id": APP_HEADER } })).data.data;
            console.log(userData);
            setUsers(userData);
        })();
    }, []);


    
    return (
        <Container>
            <Row>
                {users.map(user=><User key={user.key} user = {user}/>)}
            </Row>
            {/* {users.map(({picture,firstName,lastName,id})=>{
                // const {picture,firstName,lastName,id} = user;
                return (<div key={id}>
                    <img src={picture} alt="" />
                    <div >{firstName} {lastName}</div>
                </div> )
                
            })} */}
        </Container>

    )
}

export default Users