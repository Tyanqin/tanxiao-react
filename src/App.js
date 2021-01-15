import React, { Fragment,Component } from 'react'
import './App.less'
import {CombineRoutes} from './router/index'

export default class App extends Component {
    // state = {
    //     show:false   //控制第二面板的显示与隐藏
    // }

    render () {
        return (
            <Fragment>
                <CombineRoutes/>
            </Fragment>
        )
    }
}