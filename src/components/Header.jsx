import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';

function Header() {

    return (
        <div className='pb-3 mb-5'>
            <Navbar expand="lg" className=" position-fixed top-0 w-100">
                <Container>

                    <Navbar.Brand href="#home" className='text-light'>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className=' text-dark' href='#home' style={{ width: '100px' }}>Home</Nav.Link>
                            <Nav.Link className=' text-dark' href='#about' style={{ width: '100px' }}>About</Nav.Link>
                            <Nav.Link className='text-dark' href='#skills' style={{ width: '100px' }}>Skills</Nav.Link>
                            <Nav.Link className='text-dark' href='#projects' style={{ width: '100px' }}>Projects</Nav.Link>
                            <Nav.Link className='text-dark' href='#contact' style={{ width: '100px' }}>Contact</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header