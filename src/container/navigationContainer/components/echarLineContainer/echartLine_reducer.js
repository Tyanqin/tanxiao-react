import {ECONOMIC_SET_YEAR,ECONOMIC_SET_DATA,ECONOMIC_SET_SCORE} from '../../../../redux/action_types'
let initState = {}
export default function EchartLineReducer(preState = initState,action){
    let {type,data} = action

    console.log("action==data==>    ",data)

    switch (type) {
        case ECONOMIC_SET_YEAR:
            return preState
        case ECONOMIC_SET_DATA:
            return data
        case ECONOMIC_SET_SCORE:
            return preState
        default:
            return preState
    }

}