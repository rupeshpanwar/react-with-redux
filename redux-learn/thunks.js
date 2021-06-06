import redux from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

const ADD_TASK = 'ADD_TASK';
const ADD_USER = 'ADD_USER';
const GET_TODOS = 'GET_TODOS';
// action creator
const addTask = (payload) => {
    return {
        type: ADD_TASK,
        payload
    }
}

const addUser = (payload) => {
    return {
        type: ADD_USER,
        payload
    }
}

const getTodos = () => {
    return async (dispatch) => {
        const result = await axios.get('https://jsonplaceholder.typicode.com/todos');
        dispatch({
            type: GET_TODOS,
            payload: result.data.splice(0, 5)
        });
    }
}

const taskInitialState = {
    taskList: []
}

const userInitialState = {
    userList: []
}

const todoInitialState = {
    todoList: []
}

const taskReducer = (state = taskInitialState, { type, payload }) => {
    switch (type) {
        case ADD_TASK:
            return {
                ...state,
                taskList: [...state.taskList, payload]
            }
        default:
            return state;
    }
}

const userReducer = (state = userInitialState, { type, payload }) => {
    switch (type) {
        case ADD_USER:
            return {
                ...state,
                userList: [...state.userList, payload]
            }
        default:
            return state;
    }
}

const todoReducer = (state = todoInitialState, { type, payload }) => {
    switch (type) {
        case GET_TODOS:
            return {
                ...state,
                todoList: payload
            }
        default:
            return state;
    }
}

const reducer = combineReducers({
    task: taskReducer,
    user: userReducer,
    todo: todoReducer
})

const myLoggerMiddleware = (store) => (next) => (action) => {
    console.log('****action type dispatched***', action.type);
    return next(action);
}

const store = createStore(reducer, undefined, applyMiddleware(myLoggerMiddleware, thunk));

console.log('Initial State', store.getState());

const unsubscribe = store.subscribe(() => console.log('store updated', JSON.stringify(store.getState())));

store.dispatch(addTask({
    title: 'CODING',
    isCompleted: false
}));

store.dispatch(addTask({
    title: 'Dinner',
    isCompleted: false
}));

store.dispatch(addTask({
    title: 'Shopping',
    isCompleted: true
}));

store.dispatch(addUser({
    name: 'David',
    age: 25
}));

store.dispatch(addUser({
    name: 'John',
    age: 30
}));

store.dispatch(getTodos());
