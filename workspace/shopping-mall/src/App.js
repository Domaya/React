import './App.css';
import { useState, useEffect } from 'react';
import './css/main.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import data from './data'
import { Route, Routes, useNavigate } from 'react-router-dom';
import Detail from './component/Detail'
import Cart from './component/Cart'
import About from './component/About'


function App() {

  let [Data, setData] = useState(data);
  const [flag, setFlag] = useState(true);



  useEffect(() => {
    //여기에 기재하면 이 코드는 컴포넌트의 생성/ 업데이트 시 실행
    //소멸은 return일 때..
    let timer = setTimeout(() => {
      setFlag(false);
    }, 5000);
    return () => { clearTimeout(timer); }
  }, []);
  return (
    <div className="App">

      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">Tea Time And Coding</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/detail">Detail</Nav.Link>
              <Nav.Link href="/cart">Cart</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>

            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>



      <Routes>
        <Route path='/' element={

          <>
            <div className="home">
              <div className="jumbotron">
                <img src="img/yb1.jpg" className="w-25" alt="모자쓴예삐" />
                <h1 className="display-4">Hello, YEPPIE!</h1>
                <p className="lead">대보에 대한 불신이 가득한 KOSA 703호입니다. 예삐의 모자를 구경하세요.</p>
                <p className="lead">
                  <a className="btn btn-primary btn-lg" href="#" role="button">View more</a>
                </p>
                {
                  flag == true ?
                    <div>
                      <button className="btn btn-danger" bg="#f95959" onClick={() => { console.log("ㅋㅋ구라임") }}>타임 세일</button>
                    </div> : null
                }
              </div>
            </div>


            <Card data={data} />
          </>
        }>
        </Route>

        <Route path='/detail/:id' element={<Detail data={data} />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/about' element={<About />}>
          <Route path='emp' element={<div>너는 우리 직원이야</div>} />
          <Route path='location' element={<div>혜화역 4번 출구</div>} />
        </Route>
        <Route path='/event' element={<Event />}>
          <Route path='one' element={<div>첫 주문은 1+1입니다.</div>} />
          <Route path='two' element={<div>포인트 1,0000점을 드립니다.</div>} />
        </Route>
        {/* 에러페이지 만들기 */}
        <Route path='*' element={<h1>없는 페이지 입니다.</h1>} />
        {/* <Outlet></Outlet> */}
        {/* 이 위치에 중첩 라우터 한 거 보여준다 */}

      </Routes>

    </div>
  );
}
function Event() {

}

function Card(props) {
  let navigate = useNavigate();

  return (
    <div className='container'>
      <h3>Detail Page</h3>



      <div className='row'>
        {props.data.map((item, index) =>
          <div className='col-md-4' key={index}>

            <img onClick={() => { navigate(`/detail/${item.id}`) }}
              src={item.img} className='img-fluid' alt='yb' />
            <h4>{item.title}</h4>
            <p>{item.content}</p>
            <p>{item.price}</p>
            <button className="btn btn-danger mb-3">주문하기</button>
          </div>
        )}


      </div>
    </div>

  )
}

export default App;