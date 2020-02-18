//sagas.js   必须使用Generator写法
//使用Generator（异步处理）写法

// 业务逻辑文件

//saga api规定使用这个方法
import {takeEvery,put} from 'redux-saga/effects' 

import Axios from 'axios';

import {getListAction,getsagaTodoList} from './actionCreator'

function* mySaga() {
    //等待 监听到getsagaTodoList 执行getList方法
    yield takeEvery('getsagaTodoList',getList)
}
function* getList(){
    const res =  yield Axios.get('http://rap2api.taobao.org/app/mock/244569/example/getTodolist')
    const action = getListAction(res.data.list);
    // //saga 使用put提交action
    yield put(action)
}
export default mySaga;