import React,{Fragment} from 'react'
import { Redirect, Route, Switch,NavLink } from 'react-router-dom'
import HomeContainer from '../container/homeContainer/HomeContainer'



export const CombineRoutes = () => (
    <Fragment>
        <NavLink to="/" />
        <Switch>
            {/*<Route  path = "/aaaa" component={NavigationPage}/>*/}
            <Route  path = "/" component={HomeContainer}/>
        </Switch>

    </Fragment>
)