export default function (state={}, action) {
    switch(action.type) {
        case 'GET_SELECTED_NEWS':
            return {
                ...state,
                news: action.payload
            }
        case 'CLEAR_SELECTED_NEWS':
            return {
                ...state,
                news: {}
            }
        default:
            return state
    }
}