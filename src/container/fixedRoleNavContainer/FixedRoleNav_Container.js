import React from 'react'
import './css/index.css'
import {connect} from 'react-redux'
import {move,fadeOutOpacity} from "../../util/move";


export default connect(
    state=>({
        login:state.login
    }),{

    }
)(
    class FixedRoleNav_Container extends React.Component{

        InfoRef = React.createRef()
        NavigationRef = React.createRef()

        componentDidMount() {
            let info = this.InfoRef.current
            let navigation = this.NavigationRef.current
            setTimeout( function(){
                move(navigation,"right",50,5,5,null)
            },1000)
            setTimeout(function () {
                fadeOutOpacity(info,15,null)
            },3000)
        }

        render() {
            return(
                <React.Fragment>
                    <div className="nav-wrap" style = {{display:this.props.nav_display}}>
                        <div className="fixed_role_wrap" >
                            <div className= "fixed_role_wrap_div_info" ref = {this.InfoRef}>
                                <p>{this.props.login.name}</p>
                                <p>{this.props.login.levelName}</p>
                            </div>
                            <div className= "fixed_role_wrap_div_icon" >
                           <span className="iconfont"
                                 onMouseOver={this.onIconMouseOverControl}
                           >&#xe6d5;</span>
                            </div>
                            <ul id="page_Menu" ref = {this.NavigationRef} >
                                <li><a id = "0" href="#one" >一</a></li>
                                <li><a id = "1" href="#two">二</a></li>
                                <li><a id = "2" href="#three">三</a></li>
                                <li><a id = "3" href="#four">四</a></li>
                            </ul>
                        </div>
                    </div>
                </React.Fragment>
            )
        }
        onIconMouseOverControl=()=>{
            let info = this.InfoRef.current
            info.style.opacity = 1
            setTimeout(function(){
                fadeOutOpacity(info,15,null)
            },5000)
        }
    }
)

