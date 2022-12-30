import { configureStore, createSlice, current  } from "@reduxjs/toolkit";
import data from "./data";
import { React, useEffect, useState } from 'react'

// { name : 'state Name',  initialState : 'state Value'}
let user = createSlice({     //useState() 역할임
    name : 'user',
    initialState : '도현정',     // user='yuna'
    reducers : {
        changeName(state){
            return 'DOMAYA'
        }
    }
})
export let {changeName} = user.actions; //state변경함수
let peple = createSlice({
    name : 'peple',
    initialState : 200    // peple = 200
})
let stock = createSlice({ //    [stock, setStock] = useState([7,13,20]);
    name : 'stock',
    initialState : [7,13,20],    // stock = [7,13,20]
    reducers : {
        changeStock(state, action){
            console.log(action)
            let copy = [...state]
            let arr =[];
            if(action.payload == 'up'){
                copy.map((item)=>{item++; arr.push(item)})
                return arr;
            }else{
                copy.map((item)=>{item--; arr.push(item)})
                return arr;
            }
        }
    }
})
export let {changeStock} = stock.actions;


let cart = createSlice({
    name : 'cart',
    initialState :
    [   // cart = [{},{}]
        { id : 0, title : "Black and White", count: 2},
        { id : 0, title : "Red Knit", count: 1}
    ],
    reducers : {
        changeCart(state, action){

            // console.log(state);
            console.log(action)
            let clothes = [...state];
            clothes.push(data[action.payload])
            return clothes;

        },
        changeCount(state, action){
            if(state[action.payload[0]].count > 0){
                state[action.payload[0]].count += action.payload[1];
            }
            
        }
    }
})

export let {changeCart, changeCount} = cart.actions;


export default configureStore({   // 상태변수 등록 하는 부분
    reducer: {
        user : user.reducer,
        peple : peple.reducer,
        stock : stock.reducer,  
        cart  : cart.reducer
    }
})
