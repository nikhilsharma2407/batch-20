import logo from './logo.svg';
import './App.css';
import UserClass from './UsersClass/UserClass';
import { useState } from 'react';
import Users from './Users/Users';
import Flexbox from './Flexbox/Flexbox';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App() {
  const [showComponent, setShowComponent] = useState(true);
  const id = 101;
  const name = "Nikhil"
  return (
    <div className="App">
      <button onClick={()=>setShowComponent(!showComponent)}>{showComponent?'Hide User component':'Show User component'}</button>
      {showComponent==true?<Users name = {name} id={id}/>:null}
      {/* <Flexbox/> */}
    </div>
  );
}

export default App;
