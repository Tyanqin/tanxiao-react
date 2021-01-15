import React from 'react'
import {move} from '../../util/move'
import './css/index.css'

export default class SlidNavContainer extends React.Component{

    fixedNavWrapRef = React.createRef()
    nav_ContainerRef = React.createRef()

    componentDidMount() {
        let nav =  this.fixedNavWrapRef.current
        // let nav_lis = this.nav_ContainerRef.current.childNodes
        move(nav,"left",0,3,10,null)
        setTimeout(function(){
            move(nav,"left",-660,3,20,null)
        },5000)
        // nav_lis[0].style.background = "#EEEEEE"
    }

    render() {
        let{name1,name2,name3,name4} = this.props
        return(
            <React.Fragment>

                <div className="fixed-nav-wrap out-addition"
                     ref = {this.fixedNavWrapRef}
                     onMouseMove={this.onMouseMoveControl}
                     onMouseOut={this.onMouseOutControl}
                >
                    <div className="fixed-nav-wrap-div">
                        <div className="close_menu">
                            <div className="level_1_menu">
                                <span className="iconfont">&#xe6d5;</span>
                                <a href={"#"+name1}>{name1}</a>
                            </div>
                            <ul className = "level_1_menu_ul">
                                <li><a href="#one/1">one1</a></li>
                                <li><a href="#one/2">one2</a></li>
                                <li><a href="#one/3">one3</a></li>
                                <li><a href="#one/4">one4</a></li>
                            </ul>
                        </div>
                        <div className="close_menu">
                            <div className="level_1_menu">
                                <span className="iconfont">&#xe6d5;</span>
                                <a href={"#"+name2}>{name2}</a>
                            </div>
                            <ul className = "level_1_menu_ul">
                                <li><a href="#">二级目录-1-2</a></li>
                                <li><a href="#">二级目录-2-2</a></li>
                                <li><a href="#">二级目录-3-2</a></li>
                                <li><a href="#">二级目录-4-2</a></li>
                                <li><a href="#">二级目录-5-2</a></li>
                            </ul>
                        </div>
                        <div className="close_menu">
                            <div className="level_1_menu">
                                <span className="iconfont">&#xe6d5;</span>
                                <a href={"#"+name3}>{name3}</a>
                            </div>
                            <ul className = "level_1_menu_ul">
                                <li className="close_menu">
                                    <div className="level_2_menu">二级目录-1</div>
                                    <ul className = "level_2_menu_ul">
                                        <li><a href="#">三级目录-1-1</a></li>
                                        <li><a href="#">三级目录-1-2</a></li>
                                        <li><a href="#">三级目录-1-3</a></li>
                                        <li><a href="#">三级目录-1-4</a></li>
                                    </ul>
                                </li>
                                <li className="close_menu">
                                    <div className="level_2_menu">二级目录-2</div>
                                    <ul className = "level_2_menu_ul">
                                        <li><a href="#">三级目录-2-1</a></li>
                                        <li><a href="#">三级目录-2-2</a></li>
                                        <li><a href="#">三级目录-2-3</a></li>
                                        <li><a href="#">三级目录-2-4</a></li>
                                    </ul>
                                </li>
                                <li className="close_menu">
                                    <div className="level_2_menu">二级目录-3</div>
                                    <ul className = "level_2_menu_ul">
                                        <li><a href="#">三级目录-3-1</a></li>
                                        <li><a href="#">三级目录-3-2</a></li>
                                        <li><a href="#">三级目录-3-3</a></li>
                                        <li><a href="#">三级目录-3-4</a></li>
                                    </ul>
                                </li>
                                <li className="close_menu">
                                    <div className="level_2_menu">二级目录-4</div>
                                    <ul className = "level_2_menu_ul">
                                        <li><a href="#">三级目录-4-1</a></li>
                                        <li><a href="#">三级目录-4-2</a></li>
                                        <li><a href="#">三级目录-4-3</a></li>
                                        <li><a href="#">三级目录-4-4</a></li>
                                    </ul>
                                </li>
                                <li className="close_menu">
                                    <div className="level_2_menu">二级目录-5</div>
                                    <ul className = "level_2_menu_ul">
                                        <li><a href="#">三级目录-5-1</a></li>
                                        <li><a href="#">三级目录-5-2</a></li>
                                        <li><a href="#">三级目录-5-3</a></li>
                                        <li><a href="#">三级目录-5-4</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="close_menu">
                            <div className="level_1_menu">
                                <span className="iconfont">&#xe6d5;</span>
                                <a href={"#"+name4}>{name4}</a>
                            </div>
                            <ul className = "level_1_menu_ul">
                                <li><a href="#">二级目录-1-4</a></li>
                                <li><a href="#">二级目录-2-4</a></li>
                                <li><a href="#">二级目录-3-4</a></li>
                                <li><a href="#">二级目录-4-4</a></li>
                                <li><a href="#">二级目录-5-4</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="fixed-nav-wrap in-addition" onMouseOver={this.navOnMouseOverControl}/>

                {/*<ul onClick = {this.navTargetControl}*/}
                {/*    ref = {this.nav_ContainerRef}*/}
                {/*>*/}
                {/*    <li><a id = "0" href={"#"+name1}>{name1}</a></li>*/}
                {/*    <li><a id = "1" href={"#"+name2}>{name2}</a></li>*/}
                {/*    <li><a id = "2" href={"#"+name3}>{name3}</a></li>*/}
                {/*    <li><a id = "3" href={"#"+name4}>{name4}</a></li>*/}
                {/*    <li><a id = "3" href={"#"+name4}>{name4}</a></li>*/}
                {/*    <li><a id = "3" href={"#"+name4}>{name4}</a></li>*/}
                {/*</ul>*/}
            </React.Fragment>
        )
    }


    navOnMouseOverControl=()=>{
        let nav =  this.fixedNavWrapRef.current
        move(nav,"left",0,20,5,null)
    }
    onMouseMoveControl =()=>{
        let nav =  this.fixedNavWrapRef.current
        move(nav,"left",0,10,10,null)
    }
    onMouseOutControl =()=>{
        let nav =  this.fixedNavWrapRef.current
        move(nav,"left",-660,3,20,null)
    }
    //点击导航条导航变样式
    navTargetControl =(e)=>{
        let navs = this.nav_ContainerRef.current.childNodes
        navs.forEach(i=>{i.style.background = ''})
        let element = e.target.parentNode
        element.style.backgroundColor = "#EEEEEE"
    }

}