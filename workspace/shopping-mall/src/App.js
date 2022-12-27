import './App.css';
import { useState } from 'react';
import './css/main.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import data from './data'

function App() {

  let [Data, setData] = useState(data);
  return (
    <div className="App">
      
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">Tea Time And Coding</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
             
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="home">
          <div className="jumbotron">
            <img src="img/yb1.jpg" className="w-25" alt="모자쓴예삐" />
            <h1 className="display-4">Hello, YEPPIE!</h1>
            <p className="lead">대보에 대한 불신이 가득한 KOSA 703호입니다. 예삐의 모자를 구경하세요.</p>
            <p className="lead">
              <a className="btn btn-primary btn-lg" href="#" role="button">View more</a>
            </p>
          </div>


      <div className='container'>
        <div className='row'>

        {Data.map((item, index) => {
          return <div key={index} className='col-md-4'>
            <img src={item.img} className='img-fluid' alt='yb'/>
            <h4>{item.title}</h4>
            <p>{item.content}</p>
            <p>{item.price}</p>
          </div>
        })}

        </div>
        </div>
      </div>
    </div>
  );
}

export default App;