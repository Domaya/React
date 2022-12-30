import { React, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs'
import { useDispatch, useSelector } from "react-redux";
import { changeCart } from './../store';


let Box = styled.div`
    padding : 20px;
    color: gray;
`;

let ColorBtn = styled.button`
    background-color : ${props => props.bg == 'skyblue' ? 'white' : 'red'};
    color : black;
    padding : 10px;
`;
//중복을 최소화 하는 방법(아래) 파라미터에 저렇게 하고 바꾸고 싶은 부분만 바꾼다
// let YellowBtn = styled.button(ColorBtn)`  
//     background-color : yellow;
// `;


function Detail(props) {


  let value = useSelector((state) => state)
  console.log(value);
  let dispatch = useDispatch(); //actions에 있는 걸 호출해주는

  let { id } = useParams(); //HOOK
  let findId = props.data.find((item) => item.id == id);
  const navigate = useNavigate();
  let [count, setCount] = useState(0);
  const [flag, setflag] = useState(true);
  let [clickTab, setClickTab] = useState(0);

  useEffect(() => {
    //여기에 기재하면 이 코드는 컴포넌트의 생성/ 업데이트 시 실행
    //소멸은 return일 때..
    let timer = setTimeout(() => {
      setflag(false);
    }, 5000);
    return () => { clearTimeout(timer); console.log("end") }
  }, [count]);

    useEffect(()=>{
      console.log("오 ㅋㅋ " + clickTab);
    }, [clickTab])

  return (
    <>
      {/* 
        {
          flag == true ? 
          <Box>
              <ColorBtn bg="#f95959" onClick={()=>{console.log("ㅋㅋ구라임")}}>타임 세일</ColorBtn>
          </Box> : null
        }
        <Box>
           
            <ColorBtn bg="skyblue"><b>Detail Page</b></ColorBtn>
        </Box>

        <button onClick={()=>{setCount(count+1)}}>증가</button>
        {count} */}
      <div className='container'>
        <div className='row'>

          <div className='col-md-12 mt-4'>
            <img src={findId.img} className='img-fluid' alt='yb' />
            <h4>{findId.title}</h4>
            <p>{findId.content}</p>
            <p>{findId.price}원</p>

            <button className="btn-danger">주문하기</button>
            <button className='btn-warning' onClick={() => { navigate(-1) }} >뒤로가기</button>
            <button className='btn-primary' onClick={() => { navigate('/') }} >홈</button>
            <button className='btn-dark' onClick={() => { dispatch(changeCart(id));navigate('/cart') }}>장바구니</button>

          </div>
        </div>
        <TabComponent clickTab={clickTab} setClickTab={setClickTab}></TabComponent>
      </div>
    </>
  )
}

function TabComponent(props) {
  return (
    <div className='mt-3'>
      <Tabs
        defaultActiveKey="home"
        transition={false}
        id="noanim-tab-example"
        className="mb-3"
      >
        <Tab eventKey="link1" onClick={()=>{return props.setClickTab(0)}} title="환불정책">
          <div>내용 ㅋㅋ</div>
        </Tab>
        <Tab eventKey="link2" onClick={()=>{return props.setClickTab(1)}} title="교환방법">
          <div>내용 ㅋㅋ</div>
        </Tab>
        <Tab eventKey="link3" onClick={()=>{return props.setClickTab(2)}} title="배송문의">
          <div>내용 ㅋㅋ</div>
        </Tab>
      </Tabs>
    </div>
  )
}
export default Detail;