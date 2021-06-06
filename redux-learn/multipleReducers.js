import redux from 'redux';

const createStore = redux.createStore
const combineReducers = redux.combineReducers

const Add_Task = 'Add_Task'
const Add_User = 'Add_User'

//action creator
const addTask = (payload) => {
    return {
        type: Add_Task,
        payload
    }
}

const addUser = (payload) => {
    return {
        type: Add_User,
        payload
    }
}

const intialTaskState = {
    taskList: []
}

const initialUserState = {
    userList: []
}

//reducer
// access to (prevState, action) => newState
const taskReducer = (state = intialTaskState, { type, payload }) => {
    switch (type) {
        case Add_Task:
            return {
                ...state,
                taskList: [...state.taskList, payload]
            }
        default:
            return state
    }
}

const userReducer = (state = initialUserState, { type, payload }) => {
    switch (type) {
        case Add_User:
            return {
                ...state,
                userList: [...state.userList, payload]
            }
        default:
            return state
    }
}

//combined reducer
const reducer = combineReducers({
    task: taskReducer,
    user: userReducer
})

//update the store 
const store = createStore(reducer, undefined)

console.log('initial state', store.getState())

const unsubscribe = store.subscribe(() =>
    console.log('store updated',
        JSON.stringify(store.getState())
    ))

store.dispatch(addTask({
    title: 'coding',
    isCompleted: false
}))

store.dispatch(addTask({
    title: 'lunch',
    isCompleted: 'pending'
}))

store.dispatch(addTask({
    title: 'redux',
    isCompleted: false
}))

store.dispatch(addUser({
    name: 'Rupee',
    age: 39
}))

store.dispatch(addUser({
    name: 'Onu',
    age: 7
}))

unsubscribe()
