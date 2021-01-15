import React from 'react'
import {connect} from 'react-redux'
import EchartBarContainer from '../echarBarContainer/EchartBarContainer'
import { Tabs } from 'antd';
import './css/index.css'
const { TabPane } = Tabs;

export default connect(state=>({}),{})(

    class EconomicOperationContainer extends React.Component{
        render() {
            return(
                <React.Fragment>
                    <div className="economic_operation_wrap">
                        <Tabs defaultActiveKey="1"
                              tabBarStyle = {{borderBottom:'none'}}
                              centered = "true"
                              onChange={this.callback}
                              className="economic_operation_tabs"
                        >
                            <TabPane tab="航运指数" key="1">
                                <Tabs type="card">
                                    <TabPane tab="图表" key="1">
                                        {/*<EchartBarContainer/>*/}
                                    </TabPane>
                                    <TabPane tab="表格" key="2">
                                        <p>Content of Tab Pane 2</p>
                                    </TabPane>
                                </Tabs>
                            </TabPane>
                            <TabPane tab="物流指数" key="2">
                                <Tabs type="card">
                                    <TabPane tab="图表" key="1">
                                        <p>Content of Tab Pane 1</p>
                                    </TabPane>
                                    <TabPane tab="表格" key="2">
                                        <p>Content of Tab Pane 2</p>
                                    </TabPane>
                                </Tabs>
                            </TabPane>
                            <TabPane tab="旅游指数" key="3">
                                <Tabs type="card">
                                    <TabPane tab="图表" key="1">
                                        <p>Content of Tab Pane 1</p>
                                    </TabPane>
                                    <TabPane tab="表格" key="2">
                                        <p>Content of Tab Pane 2</p>
                                    </TabPane>
                                </Tabs>
                            </TabPane>
                        </Tabs>
                        <div className = "economic_operation_content">
                            长江沿线各城市的经济运行监测指数，主要划分航运指数、物流指数和旅游指数三大类。选用熵权法和层次分析法为各指标赋权并求得各城市的分值。

                            航运指数指标包括内河航道总里程、港口泊位数、民用运输船舶拥有量、港口货运吞吐量和人均水路客运量；

                            物流指数指标包括货物运输周转量、等级公路路网密度、人均机场客运量、人均铁路客运量、人均快递数和人均交通运输投资；

                            旅游指数指标包括每万人游客数、人均旅游收入、A级景区旅游资源、人均城市绿地面积和星级饭店数量。
                        </div>
                    </div>
                </React.Fragment>
            )
        }

        callback=(key)=>{
            console.log(key);
        }
    }
)

