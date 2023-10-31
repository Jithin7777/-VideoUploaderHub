import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Add from "../components/Add";
import View from "../components/View";
import Categories from "../components/Categories";
import { Link } from "react-router-dom";

function Home() {
  //state for state lifting
  const [addUpdate,setAddUpdate]=useState({})
  return (
    <div >
     <Container>
        <Row>
          <Col className="mt-5">
            <h2 className="ms-1  mb-4">
             <span> S</span>tart<span> U</span>ploading <span>V</span>ideos <span>F</span>or<span> F</span>ree
              </h2>
            <div className="ms-1 fs-3  ">
  
            <Link to={'/watch-history'} style={{textDecoration:'none'}}>
                <a className="text-warning" style={{textDecoration:'none'}} >
                <i class="fa-solid fa-clock fa-spin text-danger mt-2 text-light" ></i> View Watch History
                  </a>
            </Link>
  
                <p className="fs-5 mt-3  " style={{}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ad neque reprehenderit repellat  .</p>
            </div>
          </Col>
          <Col className="text-center">
          <img className='' style={{height:'200px',width:'250px'}} 
          src="https://i.postimg.cc/tCgQBnZp/image-processing20221009-27879-unscreen.gif" alt="" />
          </Col>
        </Row>
     </Container>

      <hr />
     <Container>
        <Row className="p-5">
          <Col lg={1}>
  
            <Add update={setAddUpdate}></Add>
  
          </Col >
          <Col lg={7}>
  
            <View updatedState={addUpdate}></View>
  
          </Col>
          <Col lg={4}>
  
          <Categories></Categories>
  
          </Col>
        </Row>
     </Container>
    </div>
  );
}

export default Home;
