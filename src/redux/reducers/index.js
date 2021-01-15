import CountReducer from './count_reducer'
import LoginReducer from "../../container/loginContainer/loginReducer/login_reducer";
import {combineReducers} from 'redux'

export default combineReducers({
    counter:CountReducer,                      //示例
    login:LoginReducer,                        // 登录
})