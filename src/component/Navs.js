import React from 'react';
import {Navbar,Nav, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';


 const Navs = () => {
   
    return (
        <div>
              <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Forjja</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Films</Nav.Link>
                        <Nav.Link href="/add">Add New Movie</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navs;