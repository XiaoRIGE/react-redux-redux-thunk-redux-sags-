import React, { Component } from 'react';
import {getTodoList,getsagaTodoList} from '../store/actionCreator'
import store from '../store/index'
import axios from 'axios'
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.InputChangeValue = this.InputChangeValue.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        this.stateChange = this.stateChange.bind(this)
        
        this.state = store.getState();
        store.subscribe(this.stateChange)
    }
    componentDidMount(){
       
        // axios.get('http://rap2api.taobao.org/app/mock/244569/example/getTodolist')
        //     .then((res)=>{
        //         console.log(res)
        //         const action ={
        //             type:'getList',
        //             value:res.data.list
        //         }
        //         store.dispatch(action)
        //     }).catch((e)=>{
        //         console.log(e)
        //     })

        //thunk方式
        // const action =getTodoList()
        // store.dispatch(action)
        
        //saga方式
        const action = getsagaTodoList()
        store.dispatch(action)
        
    }
    componentWillUnmount() {
        console.log("组件即将卸载")
      }
    
    render() {
        return (
            <div>
                <div>
                    <input placeholder="请输入点什么吧" value={this.state.inputValue} onChange={this.InputChangeValue} />
                    <button onClick={this.clickBtn}>新增</button>
                </div>
                <ul>
                {
                    this.state.list.map((v, i) => {
                        return (
                            <li key={i}>{v}</li>
                        )
                    })
                }
                </ul>
            </div>
        );
    }
    InputChangeValue(e) {
        const action ={
            type:'inputChange',
            value:e.target.value
        }
        store.dispatch(action)
    }
    clickBtn(){
        const action ={
            type:'addItem'
        }
        store.dispatch(action)
    }
    stateChange(){
        this.setState(store.getState())
    }
}

export default TodoList;