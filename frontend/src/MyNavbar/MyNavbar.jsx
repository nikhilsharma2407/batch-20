import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom"
import { useSearchParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { logoutAction } from '../reducers/userReducer';
{/* <Link to="/flex">Flexbox</Link> */ }
{/* <Link to="/router">Router</Link> */ }
{/* <Link to="/">Home</Link> */ }
function MyNavbar() {
  const [, setSearchQuery] = useSearchParams();
  // const {isLoggedIn} = useSelector((state)=>state.user);
  const { isLoggedIn } = useSelector(({ user }) => user);
  const dispatch = useDispatch()
  
  const logout = () => {
    dispatch(logoutAction())
  }

  return (
    <Navbar bg="dark" variant="dark" expand="sm">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/flex">Flexbox</Nav.Link>
            <Nav.Link as={Link} to="/router">Routing</Nav.Link>
            <Nav.Link as={Link} to="/counter">Counter</Nav.Link>
          </Nav>
          {
            isLoggedIn ? <Nav className='ms-auto'> <Nav.Link as={Button} variant="outline" onClick={logout}>Logout</Nav.Link></Nav> :
              <Nav className='ms-auto'>
                <Nav.Link as={Link} to="/login">login</Nav.Link>
                <Nav.Link as={Link} to="/signup">signup</Nav.Link>
              </Nav>
            }
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={e => setSearchQuery({ 'user': e.target.value.toLowerCase() })}
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
    </Navbar >
  );
}

export default MyNavbar