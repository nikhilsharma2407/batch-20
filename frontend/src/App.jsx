import './App.css';
import { useEffect, useState } from 'react';
import Users from './Users/Users';
import Flexbox from './Flexbox/Flexbox';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter,
  Routes,
  Route} from "react-router-dom";

// our component
import Routing from './Routing/Routing';
import MyNavbar from './MyNavbar/MyNavbar';
import Signup from './Signup/Signup';
import Login from './Login/Login';
import { loginWithTokenUtil } from './apiUtil';

// Redux 

import Counter from './Counter/Counter';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction, loginWithTokenAction } from './reducers/userReducer';
import Toast from './Toast';
import { Spinner } from 'react-bootstrap';


function App() {
  const [showComponent, setShowComponent] = useState(true);
  const dispatch = useDispatch();
  const {loading} = useSelector(({user})=>user);

  useEffect(() => {
    // (async () => {
    //   try {
    //     const userData = (await loginWithTokenUtil())?.data;
    //     console.log(userData);
    //     if (userData) {
    //       dispatch(loginAction(userData));
    //       alert(`${userData.data.username} logged in successfully without credentials!!!`);
    //       console.log(userData);
    //       // localStorage.setItem('token',userData.data.token);
    //     }
    //   } catch (error) {
    //     console.error(error);
    //   }
    // })()
    (async()=>{
      dispatch(loginWithTokenAction())
    })()
  }, []);


  const id = 101;
  const name = "Nikhil";

  // redux Setup


  return (
    <>
        <BrowserRouter>
        {loading && <Spinner className ="spinner" animation="border" size='lg'/>}
        <Toast/>
          <MyNavbar />
          {/* <div className='d-flex justify-content-around'>
      <Link to="/flex">Flexbox</Link>
      <Link to="/router">Router</Link>
      <Link to="/">Home</Link>
    </div>
    <div className='d-flex justify-content-around'>
      <a href="/flex">Flexbox</a>
      <a href="/router">Router</a>
      <a href="/">Home</a>
    </div> */}
          <Routes>
            <Route path='/' element={
              <div className="App">
                <button onClick={() => setShowComponent(!showComponent)}>{showComponent ? 'Hide User component' : 'Show User component'}</button>
                {showComponent == true ? <Users name={name} id={id} /> : null}
                {/* <Flexbox/> */}
              </div>
            } />
            <Route path='/flex' element={<Flexbox />} />
            <Route path='/router/:category/:userId' element={<Routing />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/counter' element={<Counter />} />
          </Routes>

        </BrowserRouter>
    </>
  );
}

export default App;
