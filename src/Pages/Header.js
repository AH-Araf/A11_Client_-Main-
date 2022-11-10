import React, { useContext } from 'react';
import { Container,Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import c from '././../assets/images/c.jpg';


const Header = () => {


    const {user, logOut} = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }





    return (
        <div className='navbar-to'>
            <Navbar collapseOnSelect className=''  expand="lg" bg="light" variant="light">
            <Container>
                <img src={c} className="imageC1" alt="" />
                <Navbar.Brand><Link className='blog-name' to='/'>Chitro Photography</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='blog-container' to='/'>Home</Link>  
                        <Link className='blog-container' to='/blog'>Blog</Link>  
                        {/* <Link className='blog-container' to='/login'>Login</Link>  
                        <Link className='blog-container' to='/register'>Register</Link>  */}
                        {/* <Link className='blog-container' to='/addservices'>Add Services</Link>   */}
                    </Nav>
                    <Nav>
                        <>
                            {
                                user?.uid ?
                                    <>
                                        <Link className='blog-container' to='/addservices'>Add Services</Link>
                                        <Link className='blog-container' to='/myReview'>My Review</Link>
                                        <Link className='blog-container' onClick={handleLogOut}>Log out</Link> 
                                        
                                    </>
                                    :
                                    <>
                                        <Link className='blog-container' to='/login'>Login</Link> 
                                        <Link className='blog-container' to='/register'>Register</Link> 
                                    </>
                            }

                        </>
                        
                        <div  to="/profile">
                            {user?.photoURL ?
                                
                                <Image
                                                    style={{ height: '35px', width:'35px', marginRight: '10px' }}
                                                    roundedCircle
                                                    src={user?.photoURL}>
                                                </Image>
                                
                               
                                : <FaUser></FaUser>
                            }
                        </div>
                          
                        
                    </Nav><br />
                    <div>
                            {user?.displayName}
                    </div> 
                    
                     
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
};

export default Header;