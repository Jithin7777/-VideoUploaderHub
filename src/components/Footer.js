import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
  return (
    <div>  
      
<div className=' p-5'>
<hr />
         <Row className='mt-3 p-2'> 
          <Col lg={3} md={6} sm={12} xs={12}>
          <img  
              alt=""
              src="https://i.postimg.cc/fL9jtB4x/images.png"
              width="40"
              height="40"
              className="d-inline-block align-top me-1 mt-4"
            />{' '}

<div className=''>
              <b className='fs-5 '><span>V</span>ideo<span>U</span>ploader</b>   
  
</div>            <h6 className='mt-2' style={{textAlign:'justify'}} >Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Iusto impedit consequatur sint ipsa suscipit optio deleniti .</h6>    
               </Col>

          <Col lg={3} md={6} sm={12} xs={12} >
          <h4 className='text-danger mt-4'>Links</h4>
          <a className='fs-5' href="" style={{textDecoration:'none',color:'white'}}>Landing Page</a> <br />
          <a  className='fs-5' href="" style={{textDecoration:'none',color:'white'}}>Home</a> <br />
          <a className='fs-5'  href="" style={{textDecoration:'none',color:'white'}}>Watch History</a> <br />
          </Col>

          <Col lg={3} md={6} sm={12} xs={12}>
          <h4 className='text-danger mt-4'>Guides</h4>
          <h5>react</h5>
          <h5>react bootstrap</h5>
          <h5>routing</h5>
          </Col>
          <Col lg={3} md={6} sm={12} xs={12}>
          <h4 className='text-danger mt-4'>Contact us</h4>
          <input type="text" className='form-control bg-dark w-75' placeholder='enter email' />
          <button className='btn btn-info mt-2 w-75'>send</button> <br />
          <i class="fa-brands fa-instagram fa-2x mt-3 "></i>
          <i class="fa-brands fa-facebook fa-2x mt-3 ms-3"></i>
          <i class="fa-brands fa-twitter fa-2x mt-3 ms-3"></i>
          <i class="fa-brands fa-github fa-2x mt-3 ms-2"></i>



          </Col>
          
          
          </Row>
  
</div>    </div>
  )
}

export default Footer