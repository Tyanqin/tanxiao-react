import {ECONOMIC_SET_YEAR,ECONOMIC_SET_DATA,ECONOMIC_SET_SCORE} from '../../../../redux/action_types'

export const economicSetYear =(value)=>({type:ECONOMIC_SET_YEAR,data:value})

export const economicSetData =(value)=>({type:ECONOMIC_SET_DATA,data:value})

export const economicSetScore =(value)=>({type:ECONOMIC_SET_SCORE,data:value})