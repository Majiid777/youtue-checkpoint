import React from 'react'
import { Button, Container, Form, Nav, Navbar, NavDropdown, } from 'react-bootstrap'
import { BsFillMicFill } from 'react-icons/bs';
import { AiOutlineVideoCameraAdd } from 'react-icons/ai';
import {IoIosNotificationsOutline} from 'react-icons/io';

const MainProfile = () => {
  return (
    <div >
      
      < Navbar bg="white" expand="lg">
      < Container fluid style={{ justifyContent:"space-between" }}>
      

        < Navbar.Brand href="#"><img height='40px' width='auto' src='https://upload.wikimedia.org/wikipedia/commons/9/9e/YouTube_Logo_%282013-2017%29.svg' alt='logo' /></ Navbar.Brand>
        < Navbar.Toggle aria-controls="navbarScroll" />
        < Navbar.Collapse id="navbarScroll">
          < Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px',width:"100%",display:"flex",justifyContent:"space-around",height:"40px" }}
            navbarScroll>
            
          < Form className="d-flex">
            < Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            < Button variant="outline-success">Search</Button>
          </ Form>
           
            
            < Nav.Link href="#action1"><BsFillMicFill/></ Nav.Link>
            <div style={{display:"flex"}}>
            < Nav.Link href="#" disabled>
              <AiOutlineVideoCameraAdd/>
            </ Nav.Link>
            < Nav.Link href="#action2"><IoIosNotificationsOutline/></Nav.Link>
            <NavDropdown title="Profile" id="navbarScrollingDropdown">
              < NavDropdown.Item href="#action3">Historiques</ NavDropdown.Item>
              < NavDropdown.Item href="#action4">
                Liste de chaine abonnées
              </ NavDropdown.Item>
              < NavDropdown.Item href="#action3">Historiques</ NavDropdown.Item>
              < NavDropdown.Item href="#action4">
                Liste de chaine abonnées
              </ NavDropdown.Item>
              < NavDropdown.Divider />
              < NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            </div>
          </ Nav>

        </ Navbar.Collapse>
      </ Container>
    </Navbar>
    </div>
  )
}

export default MainProfile