import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/postAction'
import { bindActionCreators } from 'redux';

class Posts extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }
    
  render() {
    const postItems = this.props.posts.map(post => {
        
        return(
            <div key={post.id}>
                {/* {console.log(post)} */}
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        )})
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    )
  }
}

// function mapStateToProps (state) {
//     console.log("postify", state)
//     return{
//         posts: state.posts.items
//     }
// };
// function mapStateToProps (state) {
//     console.log("postify", state)
//     return{
//         posts: state.posts.items
//     }
// };
function mapStateToProps (state) {
    console.log("postify", state)
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchPosts }, dispatch)
  }

//   const mapDispatchToProps = {
//     fetchPosts
//   }

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
