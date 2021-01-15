import instance from './MyAxios'
import {ACCESS_ADDRESS} from '../conf/conf'
import qs from 'querystring'

//==================================login====================================================
export const reqLogin =(params)=>(instance.post(`${ACCESS_ADDRESS}/user/login`,params))
//==================================fixedRole================================================
export const getUserSource=(params)=>(instance.get(`${ACCESS_ADDRESS}/metadata/page?${qs.stringify(params)}`))
