import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { resetMsgAction } from './reducers/userReducer';


function Toast() {

    const {message,error} = useSelector(({user})=>user)

    const dispatch = useDispatch()

    useEffect(() => {
        if(message){
            toast.success(message);
        }
        else if(error){
            toast.error(error);
        }
        // dispatch(resetMsgAction());
    }, [message,error])
    

    return (
        <>
            {/* <button onClick={notify}>Notify!</button> */}
            <ToastContainer pauseOnHover={false}/>
        </>
    )
}

export default Toast