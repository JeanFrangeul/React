import { createStore, combineReducers } from 'redux'

const initialState = {
    posts: [
        {
            id: Math.random,
            title: 'Lorem ipsum',
            content: 'Lorem ipsum contentus'
        }
    ],
    archives: [
        {
            id: Math.random(),
            category: 'Janvier 2018'
        }
    ]
}

/*const addPost = {
    type: 'ADD_POST',
    payload: { 
        id: Math.random(),
        title: 'Mon second post',
        content: 'Le contenu de mon second post'
    }
}*/

const blogReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_POST':
            return {
                ...state,
                post: [...state.posts, action.payload]
            }
        case 'REMOVE_ALL_POSTS' :
            return {
                ...state,
                post: []
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    blog: blogReducer,
    user: userReducer
})

const useReducer = (state, action) => state

const store = createStore(rootReducer)

export default store