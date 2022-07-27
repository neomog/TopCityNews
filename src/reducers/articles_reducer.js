export default function (state={}, action) {
    switch(action.type) {
        case 'GET_LATEST':
            return {
                ...state,
                latest: action.payload
            }
        case 'GET_OTHER':
            return {
                ...state,
                other: action.payload
            }
        case 'HANDLE_LIKES_ARTICLE':
            return {
                ...state,
                likes: [action.payload]
            }
        default: 
            return state
    }
}