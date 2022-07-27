export const fetchPosts = () => dispatch => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(response => response.json())
    .then(posts => dispatch({
        type: 'FETCH_POSTS',
        payload: posts
    }))
    .then(data => console.log("store data", data))
}