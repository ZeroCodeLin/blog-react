import React,{Component} from "react"
import { Card, Button } from 'antd'
import { connect } from 'react-redux';

import request from '../../utils/request'

import Essay from '../../components/Essay/Essay.jsx'
const arr = [1,2,3,4,5,6,7,8]
const json = {
    title:"我就试试",
    gmt_created: '2018-03-07',
    description: '适时实施hi'
}
@connect(({ example }) => ({
    example
}))
class Home extends Component{
    
    componentDidMount(){
        
    }

    render(){
        return (
            <div >
                {
                    arr.map(item =>{
                        return <Essay essay={json} />
                    })
                }
            </div>
        )
    }
}

export default Home;