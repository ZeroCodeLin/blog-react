import React,{Component} from "react"
import { Card, Button, Pagination } from 'antd'
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
        data: [],
        pagination:{
            page:1,
            pageSize:10
        }
    }
    
    componentDidMount(){
        const params ={
            page: 1,
            pageSize: 10,
        }
        blogList(params).then(data => {
            if(data.code){
                this.setState({
                    data: data.data,
                    pagination:{
                        ...this.state.pagination,
                        total: data.total
                    }
                })
            }
        })
    }

    change=(page, pageSize)=>{
        const params ={
            page,
            pageSize
        }
        blogList(params).then(data => {
            if(data.code){
                this.setState({
                    data: data.data,
                    pagination:{
                        ...this.state.pagination,
                        total: data.total
                    }
                })
            }
        })
    }

    render(){
        const { data, pagination } = this.state;
        return (
            <div >
                {
                    data.map(item =>{
                        return <Essay essay={item}  key={item.id} />
                    })
                }
                <div style={{textAlign:"center"}} >
                    <Pagination onChange={this.change} {...pagination} />
                </div>
            </div>
        )
    }
}

export default Home;