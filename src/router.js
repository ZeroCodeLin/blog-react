import React from 'react'
import {BrowserRouter as Router,Route,Link,HashRouter} from 'react-router-dom'
import Hello from './routes/Hello.jsx'

const RouterConfig = (props)=>{

    return (
        <HashRouter>
            <div>
                <ul>
                    <li><Link to="/">计数器</Link></li>
                    <li><Link to="/page1">Table</Link></li>
                    <li><Link to="/page2">异步Action</Link></li>
                </ul>

                <Route exact path="/" component={Hello}/>
            </div>
        </HashRouter>
    )
}
export default RouterConfig