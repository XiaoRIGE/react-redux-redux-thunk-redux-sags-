import axios from 'axios'


export const getListAction = (value)=>({
    type:'getList' ,
    value
})


//异步操作 saga方式
export const getsagaTodoList=()=>({
    type:'getsagaTodoList'//懒得去actionTypes写 实际项目建议按照规范来
})

//异步操作 thunk方式
export const getTodoList = ()=>{
    //返回函数
    return (dispatch)=>{
        axios.get('http://rap2api.taobao.org/app/mock/244569/example/getTodolist').then((res)=>{
            const action = getListAction(res.data.list);
            
            dispatch(action)
        }).catch((e)=>{
            console.log("失败")
        })
    }
} 
