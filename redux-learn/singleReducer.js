import redux from 'redux';

const createStore = redux.createStore
const Add_Task = 'Add_Task'

//action creator
const addTask = (payload) => {
    return {
        type: Add_Task,
        payload
    }
}

const initialState = {
    taskList: []
}
//reducer
// access to (prevState, action) => newState
const reducer = (state = initialState, { type, payload }) => {
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

//update the store 
const store = createStore(reducer, undefined)

console.log('initial state', store.getState())

const unsubscribe = store.subscribe(() => console.log('store updated', store.getState()))

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


unsubscribe()
