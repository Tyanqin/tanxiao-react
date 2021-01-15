import CountReducer from './count_reducer'
import LoginReducer from "../../container/loginContainer/loginReducer/login_reducer";
import EchartLineReducer from '../../container/navigationContainer/components/echarLineContainer/echartLine_reducer'
import {combineReducers} from 'redux'

export default combineReducers({
    counter:CountReducer,                                 //示例
    login:LoginReducer,                                   //登录
    echartLineData: EchartLineReducer             //经济监测线状图
})