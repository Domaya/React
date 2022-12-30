import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeCount, changeName, changeStock } from './../store';
import { useEffect } from "react";


function Cart() {
   
    // let value = useSelector((state) => {return state.stock})
    // let value = useSelector((state) => {return state.stock[2]})
    let value = useSelector((state) => state)

    let dispatch = useDispatch(); //actions에 있는 걸 호출해주는
    // console.log(value)

    return (
        <>
            <h1>{value.user}님의 장바구니</h1>
            <button className="btn btn-dark m-3" onClick={()=>{dispatch(changeName("nhj"))}}>change Name</button>
            <h1>장바구니</h1>
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>상품명</th>
                <th>수량</th>
                <th>변경하기</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                {value.cart.map((item, index)=>{
                    return(
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.count}</td>
                            <td>
                                <button className="btn-sm btn-dark" onClick={()=>{dispatch(changeCount([index,1]))}}>+</button>&nbsp;
                                <button className="btn-sm btn-dark" onClick={()=>{dispatch(changeCount([index,-1]))}}>-</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
            </Table>
        </>
    )
}

export default Cart;