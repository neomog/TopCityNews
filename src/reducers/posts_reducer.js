const initialState = {
    items: [],
    item: {}
}
export default function (state = initialState, action) {
    // console.log("action boy", action.type = 'FETCH_POSTS', action.payload)
    switch(action.type) {
        case 'FETCH_POSTS':
            return {
                ...state,
                items: action.payload
            }
        default: 
            return state
    }
}