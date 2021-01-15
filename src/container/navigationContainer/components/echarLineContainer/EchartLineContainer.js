import React from 'react'
import {connect} from 'react-redux'
import * as echarts from 'echarts'
import {economicGetYear,economicGetData,economicGetScore} from '../../../../api/login'
import Serie from './serie'
import {economicSetData} from './echartLine_action'
import './index.css'


export default connect(state=>({
    echartLineData:state.echartLineData
}),{
    economicSetData:economicSetData
})(

    class EchartBarContainer extends React.Component{

        mainRef = React.createRef()

        componentDidMount() {
            this.initData()
        }

         render() {
             return(
                 <React.Fragment>
                     <div ref = {this.mainRef} className = "line-wrap"></div>
                 </React.Fragment>
             )
         }
         initData =async ()=>{
             let params = {moudle: 1, classify: 0}
             const years = await  economicGetYear(params)
             if(years.status){
                  let legendData = years.data
                  const result = await economicGetData(params)
                  if(result.status){
                      let xAxis = []
                      let series = []

                      let resultList =  result.data
                      legendData.map(Y_item=>{
                          let seriesData = []
                          let serie = new Serie()
                          serie.setType("line")
                          resultList.map(V_item=>{
                              if(V_item.year === Y_item){
                                  serie.setName(V_item.year)
                                  seriesData.push(V_item.value)
                                  console.log("V_item.value=======>     ",V_item.value)
                              }
                          })
                          serie.setData(seriesData)
                          series.push(serie)
                      })
                      let cistyList = []
                      legendData.map(Y_item=>{cistyList.push(resultList.filter(V_item=>V_item.year === Y_item))})
                      cistyList[0].map(item=>{xAxis.push(item.city)})
                      this.props.economicSetData({xAxis,series,legendData})
                      let element = this.mainRef.current
                      let myChart = echarts.init(element);
                      myChart.setOption(this.getOption(xAxis,series,legendData))
                  }
              }
         }


         getOption =(xAxisData,series,legendData)=>{
            return(
                {
                    color: ['#CDC9C9', '#000000','#8B7D6B','#CDB7B5'],
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        orient:'vertical',
                        left:'center',
                        bottom:'bottom',
                        data: legendData,
                        icon: "diamond",   //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
                        itemWidth: 16,  // 设置宽度
                        itemHeight: 16, // 设置高度
                        itemGap: 30 // 设置间距
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '10%',
                        containLabel: true
                    },
                    toolbox: {
                        feature: {
                            // saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: xAxisData,
                        axisTick: {
                            show: false // 去除刻度线
                        },
                        axisLine: {
                            show: false // 去除轴线
                        },
                        axisLabel: {
                            interval: 0,
                            color: '#000000',
                            formatter:function(value)
                            {
                                return value.split("").join("\n");
                            }
                        }
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: series
                }
            )
         }
    }
)
