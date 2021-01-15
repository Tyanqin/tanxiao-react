import React from 'react'
import {add,sub,even} from '../redux/actions/count_action'
import {connect} from 'react-redux'

export default connect(
    state => ({count: state.counter}),{
        add:add,
        sub:sub,
        even:even
    })(
    class CountContainer extends React.Component{
        componentDidMount() {
            console.log("this.props=====>   ",this.props)
        }

        myRef = React.createRef()
        add=()=>{
            let value =   this.myRef.current.value
            this.props.add(value)
        }
        sub=()=>{
            let value = this.myRef.current.value
            this.props.sub(value)
        }
        evenNumber=()=>{
            let value = this.myRef.current.value
            this.props.even(value)
        }

        render () {
            let value = this.props.count
            return (
                <div className="App">
                    <div className="wrap">
                        <h1>当前结果为{value}</h1>
                        <select  ref = {this.myRef} name="number" id="number" defaultValue="1">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        <button onClick={this.add}>加法</button>
                        <button onClick={this.sub}>减法</button>
                        <button onClick={this.evenNumber}>当为奇数加法</button>
                    </div>
                </div>
            )
        }
    }
)

