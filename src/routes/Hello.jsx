import React,{Component} from "react"
import {Button} from 'antd'
import { connect } from 'react-redux';

import request from '../utils/request'
// import '../../mock'
import Mock from 'mockjs'

Mock.mock('demo',{
    'name'     : '@name',
    'age|1-100': 100,
    'color'    : '@color'
}
)

@connect(({ example }) => ({
    example
}))
class Hello extends Component{
    
    componentDidMount(){
        request('demo')
    }

    render(){
        return (
            <h1>Hello World!</h1>
        )
    }
}

export default Hello;