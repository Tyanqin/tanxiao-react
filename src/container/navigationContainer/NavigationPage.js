import React from 'react'
import ReactFullpage from "@fullpage/react-fullpage";
import SlidNavContainer from "../../container/slidNavContainer/SlidNav_Container"
import EconomicOperationContainer from './components/EconomicOperationContainer/EconomicOperationContainer'
import './css/index.css'

let that = ''
export default class NavigationPage extends React.Component {
    slide_Nav_ContainerRef = React.createRef()
    constructor(props) {
        super(props);
        that = this
    }

    componentDidMount() {
        // let navs = this.slide_Nav_ContainerRef.current.nav_ContainerRef.current.childNodes
        // navs[0].style.backgroundColor = "#EEEEEE"
    }
    render() {
        return (
            <React.Fragment>
                <div style={{display:this.props.nav_display}}>
                    <SlidNavContainer
                        ref={this.slide_Nav_ContainerRef}
                        name1 = "economic"
                        name2 = "two"
                        name3 = "three"
                        name4 = "four"
                    />
                    <div className="navigation_wrap">
                        <ReactFullpage
                            // verticalCentered:true/false; //用来设置每一页的内容是否垂直居中；
                            // resize:字体是否随窗口缩放;
                            // scrollingSpeed: 设置滚动速度，默认单位为毫秒，默认700；
                            // lockAnchors:是否锁定锚链接，也就是让anchors属性失效;
                            // 也可以给某屏添加Class为active来设置默认屏幕;
                            //navigationPosition={'right'}//导航小圆点的位置
                            // navigationTooltips={['MonitoringProgram', 'two', 'three', 'four']}//导航小圆点的提示
                            // showActiveTooltip={true}//是否显示当前页面的tooltip信息
                            // controlArrowColor={"rgba(255,255,255,.0)"}
                            // scrollOverflow={true}
                            // slidesNavigation={true}//是否显示横向幻灯片的导航，默认为false
                            // slidesNavPosition={'bottom'}//横向导航的位置，默认为bottom，可以设置为top或bottom
                            recordHistory={true}//是否记录历史，默认为true,浏览器的前进后退可导航。若autoScrolling:false,那么这个属性将被关闭
                            menu={true}
                            loopBottom={false}                //滚动到最底部后是否滚回顶部
                            anchors={['economic', 'two', 'three', 'four']}//anchors定义锚链接，默认为[]
                            resize={true}
                            licenseKey={'YOUR_KEY_HERE'}
                            css3={true}
                            fitToSection={true}//设置是否自适应整个窗口的空间，默认值：true
                            sectionsColor={['#FFFFFF', 'pink', 'green', 'orange']}//为每个section设置background-color属性
                            scrollingSpeed={1000}
                            paddingTop={"48px"}
                            controlArrows={false}              //隐藏水平箭头
                            // scrollBar={true}                  //显示滚动条
                            scrollOverflow ={true}//内容超过一屏幕显示滚动条
                            navigation = {true}   //是否显示导航原点
                            afterLoad={this.scrollControlAfter.bind(that)}
                            render={({state, fullpageApi}) => {
                                return (
                                    <ReactFullpage.Wrapper>
                                        <div className="section">
                                            <div className="slide c_slide">
                                                <EconomicOperationContainer/>
                                            </div>
                                            <div className="slide">11</div>
                                            <div className="slide">12</div>
                                            <div className="slide">13</div>
                                            <div className="slide">14</div>
                                        </div>
                                        <div className="section">
                                            two
                                        </div>
                                        <div className="section">
                                            three
                                        </div>
                                        <div className="section">
                                            four
                                        </div>
                                    </ReactFullpage.Wrapper>
                                );
                            }}
                        />
                    </div>
                </div>
            </React.Fragment>
        )
    }
    //滚动进度条导航条变样式
    scrollControlAfter=(anchorLink,index)=>{
        // let navs = that.slide_Nav_ContainerRef.current.nav_ContainerRef.current.childNodes
        // navs.forEach(i=>{i.style.background = ''})
        // let point = index.index
        // navs[point].style.backgroundColor = "#EEEEEE"
    }

}