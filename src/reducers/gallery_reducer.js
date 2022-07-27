export default function (state={}, action) {
    switch(action.type) {
        case 'GET_LATEST_GALLERY':
            return {
                ...state,
                gallery: action.payload
            }
        case 'GET_SELECTED_GALLERY':
            return {
                ...state,
                selected: action.payload
            }
        case 'CLEAR_SELECTED_GALLERY':
            return {
                ...state,
                selected: []
            }
        case 'HANDLE_LIKES_GALLERY':
            return {
                ...state,
                likes: [action.payload]
            }
        default:
            return state
    }
}