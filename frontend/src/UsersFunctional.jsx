import React, { useEffect, useState } from 'react'

function UsersFunctional(props) {

    const [id, setid] = useState(1);
    const [name, setname] = useState("Nikhil")
    const [isLoggedIn, setisLoggedIn] = useState(false);
    
    useEffect(() => {
      console.log("Component did Mount");
      return ()=>{
        console.log("unmounting stage");
      }
    }, [])


    useEffect(() => {
        console.log('updated name',name);
    }, [name])

    useEffect(() => {
        console.log('invoking api for new ID',id);
    }, [id])
    
    
    console.log(props)
    // const {name} = props;
    return (
        <>
            <input type="number" placeholder='Enter ID' onChange={(e)=>setid(+e.target.value)} />
            <input type="text" placeholder='Enter name' onChange={(e)=>setname(e.target.value)} />
            <h1>Welcome {name}</h1>
        </>

    )
}

export default UsersFunctional