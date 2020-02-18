//定义初始状态

const defaultState = {
    inputValue:'',
    list:['初始值1','初始值2']
}

export default (state=defaultState,action)=>{
    if(action.type==='inputChange'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value;
        return newState
    }
    else if(action.type==='addItem'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = '';
        return newState
    }else if(action.type==='getList'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list = action.value
        console.log("newState",newState)
        return newState
    }
    return state;
}