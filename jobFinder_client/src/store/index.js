import { createStore } from "redux";

const initialState = {
    userToken : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NzA4MDQ0M2YzZDYzNjgxNGE1ZGRmMyIsImlhdCI6MTcxODk5Mjg3Nn0.M8sgBWMJlhoI2RL5srMpOMFn9RUWx575bVdUkrvQIqM' ,
    count : 0
}

const reducer = (state = initialState , action) => {
    if(action.type == 'DELETETOKEN'){
        return {
            ...state ,
            userToken: ''
        }
    }
    if(action.type == 'ADDTOKEN'){
        return {
            ...state ,
            userToken: action.payload
        }
    }
}

const store = createStore(reducer)

export default store