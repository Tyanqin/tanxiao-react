import React from 'react'
import LoginContainer from '../loginContainer/Login_Container'
import NavigationPage from '../navigationContainer/NavigationPage'
import FixedRoleNavContainer from '../fixedRoleNavContainer/FixedRoleNav_Container'
import Cache from '../../api/cache'

export default class HomeContainer extends React.Component{



    render() {
        return(
            <React.Fragment>
                {/*主体内容组件*/}
                <NavigationPage nav_display = {this.state.nav_display}/>
                {/*登录组件*/}
                <LoginContainer
                    log_display = {this.state.log_display}
                    displayControl = {this.displayControl}
                />
                <FixedRoleNavContainer
                    nav_display = {this.state.nav_display}
                />
            </React.Fragment>
        )
    }




    displayControl=()=>{
        this.setState({
            nav_display:"block",
            log_display:"none"
        })
    }
    componentDidMount() {
        Cache.localGet("token") === null?
            this.setState({nav_display:"none",log_display:"block"}):
            this.setState({nav_display:"block",log_display:"none"})
    }
    state={
        nav_display:"none",
        log_display:"block"
    }
}