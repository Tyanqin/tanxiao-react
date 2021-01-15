import React from 'react'
import {connect} from 'react-redux'
import {login} from './loginAction/login_action'
import {Button, Input} from "antd";
import '../../icon/iconfont.css'
import './css/index.css'
import {message} from "antd";
import {reqLogin,getUserSource} from '../../api/login'
import {Cache} from '../../api/cache'
import NavigationPage from '../navigationContainer/NavigationPage'
import LoginState from './LoginState'
export default connect(
    state=>({
        login:state.login
    }),{
        login:login
    }
)(class LoginContainer extends React.Component{

    loginRef = React.createRef()

    state={
        loginName: '',
        password: '',
    }

    render() {
        return(
            <React.Fragment>
                <div className= "login_wrap" style={{display:this.props.log_display}}>
                    <ul className="login_wrap_ul">
                        <li><span>The login...</span></li>
                        <li><Input className = "login_input" type={"text"}placeholder = "请输入用户名..."
                                   onChange = {e=>this.setState({loginName:e.target.value})}/></li>
                        <li><Input className = "login_input" type={"password"} placeholder = "请输入密码..."
                                   onChange = {e=>this.setState({password:e.target.value})}/></li>
                        <li>
                            <Button className = "login_btn" type = "primary"
                                    onClick = {this.loginControl}
                            >do login</Button>
                        </li>
                    </ul>
                </div>
            </React.Fragment>
        )
    }
    loginControl = async ()=>{
        let loginState = new LoginState()
        let {loginName,password} = this.state
        const result = await reqLogin({loginName,password})

        if(result.status){
            let loginState = new LoginState()
            let {token,id,name,secret,permissions} = result.data
            loginState.setId(id)
            .setToken(token)
            .setName(name)
            .setSecret(secret)
            Cache.localSet("token",token)
                .localSet("id",id)
                .localSet("name",name)
                .localSet("secret",secret)
                .localSet("permissions",permissions)
            let params = {page:1, size: 100,fatherMark: 'SECRET'}
            const roleResult = await getUserSource(params)
            if (roleResult.status){
                let values = Array.from(roleResult.data.content)
                values.map(item=>{
                    if(item.mark === Cache.localGet("secret")){
                        loginState.setLevelName(item.name)
                        .setMark(item.mark)
                        .setFatherMark(item.fatherMark)
                        .setMarkPath(item.markPath)
                        .setApplianceMark(item.applianceMark)
                        .setPx(item.px)
                        Cache.localSet("levelName",item.name).localSet("mark",item.mark)
                            .localSet("fatherMark",item.fatherMark)
                            .localSet("markPath",item.markPath)
                            .localSet("applianceMark",item.applianceMark).localSet("px",item.px)
                    }
                })
            }
            this.props.login({...loginState})
        }
        this.props.displayControl()
    }

})

