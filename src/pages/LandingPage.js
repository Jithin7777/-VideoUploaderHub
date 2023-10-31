import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";


function LandingPage() {
  return (
    <div>
      <Container className="" w-75>
        <Row className="mt-5">
          <Col lg={6}>
            <div>
              <h2>
                <span>V</span>ideo <span>U</span>ploader
              </h2>
              <p className="fs-4 mt-5 p-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Commodi earum voluptatibus quaerat mollitia facere cumque
                explicabo a sed nisi officiis!
              </p>
<Link to={'/home'}>
                <Button id='b1' className='btn mt-3 '><b>Get Started</b><i class="fa-brands fa-fade fa-google-play ms-3"></i></Button>
  
</Link>           
 </div>{" "}
          </Col>
          <Col >
            <img
              className="w-100  mt-3"
              src="https://i.postimg.cc/d3kT4sbJ/dailyui-057.gif"
              alt=""
            />
          </Col>
        </Row>
<hr />
        <Row className=" pt-5 mb-5 py-5 ">
          <h1 className="text-center mb-5">Features</h1>
          <Col lg={4} sm={6}>
            <Card className='bg-black border text-white p-3 mt-3' style={{ width: "100%" }}>
              <Card.Img style={{height:'250px'}} variant="top" src="https://i.postimg.cc/NGyMC7G4/download.gif" />
              <Card.Body className="">
                <Card.Title><h4>Managing Videos</h4></Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} sm={6}>
          <Card className='bg-black border text-white p-3 mt-3' style={{ width: "100%" }}>
              <Card.Img  style={{height:'250px'}} variant="top" src="https://i.postimg.cc/qMrZmr2x/giphy.gif" />
              <Card.Body className="">
                <Card.Title><h4>Categorise Videos</h4></Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4}>
          <Card className='bg-black border text-white p-3 mt-3' style={{ width: "100%" }}>
              <Card.Img style={{height:'250px'}} variant="top" src="https://i.postimg.cc/7htGTw4r/1-f7c-Zomx-EUs-R2-AYQVl-UXZog.gif" />
              <Card.Body className="">
                <Card.Title><h4>Watch History</h4></Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
