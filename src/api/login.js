import instance from './MyAxios'
import {ACCESS_ADDRESS} from '../conf/conf'
import qs from 'querystring'

//==================================login=======================================================================================
export const reqLogin =(params)=>(instance.post(`${ACCESS_ADDRESS}/user/login`,params))
//==================================fixedRole===================================================================================
export const getUserSource=(params)=>(instance.get(`${ACCESS_ADDRESS}/metadata/page?${qs.stringify(params)}`))
//=============================经济运行监测=====================================================================================
//获取年份
export const economicGetYear=(params)=>(instance.get(`${ACCESS_ADDRESS}/economicMonitor/yearList?${qs.stringify(params)}`))
//获取数据
export const economicGetData=(params)=>(instance.get(`${ACCESS_ADDRESS}/economicMonitor/economicOperation?${qs.stringify(params)}`))
//获取排序
export const economicGetScore=(params)=>(instance.get(`${ACCESS_ADDRESS}/economicMonitor/cityRankData?${qs.stringify(params)}`))
