import React from 'react'
import {BrowserRouter as Router,Route,Link,HashRouter} from 'react-router-dom'
import Hello from './routes/Hello.jsx'
import BasicLayout from './Layouts/BasicLayout.jsx'

const RouterConfig = (props)=>{

    return (
        <HashRouter>
            <div>

                <Route exact path="/" component={BasicLayout}/>
            </div>
        </HashRouter>
    )
}
export default RouterConfig