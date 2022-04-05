import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <NavLink
                        to="/home"
                        className='fs-5 text-decoration-none'
                        style={isActive => ({
                            fontWeight:  'normal',
                            color: isActive ? "black" : "black"
                        })}
                    >
                        New Web
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <NavLink
                                to="/home"
                                className='fs-5 text-decoration-none'
                                style={isActive => ({
                                    fontWeight: isActive ? 'bold' : 'normal',
                                    color: isActive ? "red" : "black"
                                })}
                            >
                                Home
                            </NavLink>
                        </Nav>
                        <Nav className="mx-end">

                            <NavLink
                                to="/login"
                                className='fs-5 text-decoration-none'

                                style={isActive => ({
                                    fontWeight: isActive ? 'bold' : 'normal',
                                    color: isActive ? "red" : "black"
                                })}
                            >
                                Login
                            </NavLink>
                            <NavLink
                                to="/reg"
                                className='fs-5 text-decoration-none ms-4 '

                                style={isActive => ({
                                    fontWeight: isActive ? 'bold' : 'normal',
                                    color: isActive ? "red" : "black"
                                })}
                            >
                                Register
                            </NavLink>





                            {/* <Link to='/login' className='fs-5 text-decoration-none'>Login</Link>
                            <Link to='/reg' className='fs-5 text-decoration-none mx-3'>Register</Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;