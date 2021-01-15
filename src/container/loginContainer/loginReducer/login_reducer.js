import {LOGIN} from '../../../redux/action_types'
let initState = {}
export default function LoginReducer(preSate = initState,action){
    let{type,data} = action
    let newState = {}
    switch (type) {
        case LOGIN:
            newState = data
            return newState
        default:
            return preSate
    }
}