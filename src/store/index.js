
import reducer from './reducer'

//引入
import {createStore,compose,applyMiddleware} from 'redux';

//applyMiddleware它是 Redux 的原生方法，作用是将所有中间件组成一个数组，依次执行

//使用中间件 thunk
import thunk from 'redux-thunk';

//使用中间件saga
//1.引入中间件saga
import createSagaMiddleware from 'redux-saga';
//2.saga管理文件
import mySagas from './sagas.js'
//3.创建saga
const sagaMiddleware =createSagaMiddleware();

//增强函数
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose;

//使用thunk
// const enhancer = composeEnhancers(applyMiddleware(thunk))

//5.使用saga
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

//第二个参数是为了使用redux-devtools插件
const store = createStore(
    reducer,
    enhancer
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
)

//6.使用saga必须使用run 调用自己的mysagas
sagaMiddleware.run(mySagas);

//暴露 导出
export default store;