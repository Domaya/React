import React, { Component } from "react";


export default class LifeCyclecom extends Component {

    componentDidMount(){
        //컴포넌트가 mount될 때 코드 실행
    }

    componentDidUpdate(){
        //컴포넌트가 update될 때 코드 실행
    }

    componentWillUnmount(){
        //컴포넌트가 unmount될 때 코드 실행
    }

  render() {
    return <div>LifeCyclecom</div>;
  }
}
