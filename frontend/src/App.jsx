import './App.css';
import { useEffect, useState, lazy, Suspense } from 'react';

import Flexbox from './Flexbox/Flexbox';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { loginAction, loginWithTokenAction } from './reducers/userReducer';
import Toast from './Toast';
import { Spinner } from 'react-bootstrap';

// Lazy loaded components
const Users  =lazy(()=>import('./Users/Users'));
const Routing = lazy(() => import('./Routing/Routing'));
const MyNavbar = lazy(() => import('./MyNavbar/MyNavbar'));
const Signup = lazy(() => import('./Signup/Signup'));
const Login = lazy(() => import('./Login/Login'));
const Counter = lazy(() => import('./Counter/Counter'));

function App() {
  const [showComponent, setShowComponent] = useState(true);
  const dispatch = useDispatch();
  const { loading } = useSelector(({ user }) => user);

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
    (async () => {
      dispatch(loginWithTokenAction())
    })()
  }, []);


  const id = 101;
  const name = "Nikhil";

  // redux Setup


  return (
    <>
      <BrowserRouter>
        {loading && <Spinner className="spinner" animation="border" size='lg' />}
        <Toast />
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
              {showComponent == true ? <Suspense fallback={<Spinner className="spinner" animation="border" size='lg' />}><Users name={name} id={id} /> </Suspense> : null}
              {/* <Flexbox/> */}
            </div>
          } />
          <Route path='/flex' element={<Suspense fallback={<Spinner className="spinner" animation="border" size='lg' />}><Flexbox /></Suspense>} />
          <Route path='/router/:category/:userId' element={<Suspense fallback={<Spinner className="spinner" animation="border" size='lg' />}><Routing /></Suspense>} />
          <Route path='/signup' element={<Suspense fallback={<Spinner className="spinner" animation="border" size='lg' />}><Signup /></Suspense>} />
          <Route path='/login' element={<Suspense fallback={<Spinner className="spinner" animation="border" size='lg' />}><Login /></Suspense>} />
          <Route path='/counter' element={<Suspense fallback={<Spinner className="spinner" animation="border" size='lg' />}><Counter /></Suspense>} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
