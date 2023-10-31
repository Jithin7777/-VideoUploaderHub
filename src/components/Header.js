import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
        
        <Navbar className="" style={{backgroundColor:'#19191a'}}>
        <Container>
          <Link to={"/"} style={{textDecoration:'none'}}>
            <Navbar.Brand >
              <img
                alt=""
                src="https://i.postimg.cc/fL9jtB4x/images.png"
                width="40"
                height="40"
                className="d-inline-block align-top"
              />{' '}
  
              <b className='fs-4 text-white'><span>V</span>ideo<span>U</span>ploader</b>
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
        
        </div>
  )
}

export default Header