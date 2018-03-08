import React,{Component} from "react"
import { Card, Button } from 'antd'
import { connect } from 'react-redux';

import request from '../../utils/request'
import { blogList } from '../../services/api'

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

    state={
        data: []
    }
    
    componentDidMount(){
        blogList().then(data => {
            if(data.code){
                this.setState({
                    data: data.data
                })
            }
        })
    }

    render(){
        const { data } = this.state;
        return (
            <div >
                {
                    data.map(item =>{
                        return <Essay essay={item} />
                    })
                }
            </div>
        )
    }
}

export default Home;