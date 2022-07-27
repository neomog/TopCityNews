// DEVELOPMENT SERVER
// const URL = `http://localhost:3002`;

// PRODUCTION SERVER
const URL = `https://top-city-news-hosting.herokuapp.com/`;

// HOME PAGE
export const latestNews = () => dispatch => {
    fetch(`${URL}/articles?_order=desc&_end=3`, { method: 'GET' })
    .then(response => response.json())
    .then(articles => dispatch({
        type: 'GET_LATEST',
        payload: articles
    }))
}

export const otherNews = () => dispatch => {
    fetch(`${URL}/articles?_order=desc&_start=3&_end=10`, { method: 'GET' })
    .then(response => response.json())
    .then(others => dispatch({
        type: 'GET_OTHER',
        payload: others
    }))
}

export const latestGallery = () => dispatch => {
    fetch(`${URL}/galleries?_order=desc&_limit=2`, {method: 'GET'})
    .then(response => response.json())
    .then(gallery => dispatch({
        type: 'GET_LATEST_GALLERY',
        payload: gallery
    }))
}

// NEWS PAGE
export const selectedNews = (id) => dispatch => {
    fetch(`${URL}/articles?id=${id}`, {method: 'GET'})
    .then(response => response.json())
    .then(news => dispatch({
        type: 'GET_SELECTED_NEWS',
        payload: news
    }))
}

export const clearSelectedNews = () => dispatch => {
    return {
        type: 'CLEAR_SELECTED_NEWS',
        payload: []
    }
}


// GALLERY PAGE
export const selectedGallery = (id) => dispatch => {
    fetch(`${URL}/galleries?id=${id}`, { method: 'GET' })
    .then(response => response.json())
    .then(gallery => dispatch({
        type: 'GET_SELECTED_GALLERY',
        payload: gallery
    }))
}


export const clearSelectedGallery = () => dispatch => {
    return {
        type: 'CLEAR_SELECTED_GALLERY',
        payload: []
    }
} 

// LIKES ACTIONS
export const handleLikes = ( array, id, section, type ) => dispatch => {
    fetch(`${URL}/${section}/${id}`, { 
    method: 'PATCH',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({likes: array})
    })
    .then(response => response.json())
    .then(likes => dispatch({
        type: type,
        payload: likes
    }))
}