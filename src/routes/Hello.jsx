import React,{Component} from "react"
import {Button} from 'antd'
import { connect } from 'react-redux';

import request from '../utils/request'
// import '../../mock'
// import Mock from 'mockjs'

// Mock.mock('demo',{
//     'name'     : '@name',
//     'age|1-100': 100,
//     'color'    : '@color'
// }
// )

@connect(({ example }) => ({
    example
}))
class Hello extends Component{
    
    componentDidMount(){
        request('api/test',{method:'get',headers:{Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibGVtb24iLCJpYXQiOjE1MTk4OTc0MDMsImV4cCI6MTUxOTkwMTAwM30.2bevEfIH__W_COEd4X6lDm6jlJPFFRxXhxw1nqKXbj4'}})
    }

    render(){
        return (
            <h1>Hello World!</h1>
        )
    }
}

export default Hello;