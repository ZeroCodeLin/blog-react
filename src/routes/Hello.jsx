import React,{Component} from "react"
import {Button} from 'antd'
import { connect } from 'react-redux';

@connect(({ example }) => ({
   
}))
class Hello extends Component{
    
    render(){
        console.log(this.props)
        return (
            <h1>Hello World!</h1>
        )
    }
}

export default Hello;