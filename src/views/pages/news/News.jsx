// REACT IMPORTS
import React, { Component } from 'react';
import propTypes from 'prop-types';

// REDUX IMPORTS
import { connect } from 'react-redux';
import { selectedNews, clearSelectedNews } from '../../../actions';
import { bindActionCreators } from 'redux';

// COMPONENTS IMPORTS
import Counter from '../../../views/components/ratings/LikesCounter';

// STYLES IMPORT
import './News.css';

class News extends Component {

  componentDidMount() {
    const pathname = window.location.pathname;
    const id = pathname.replace(/[^0-9]/g, '')
    this.props.selectedNews(id);
  }

  componentWillUnmount() {
    this.props.clearSelectedNews();
  }

  renderNews = ({news}) => {
    if(news) {
      return news.map((item) => {
        return (
          <div key={item.id}>
             <div className="tags">
                  <span>
                    <i className="fa fa-eye">{item.views}</i>
                  </span>
                  <span>
                    <i className="fa fa-thumbs-up">{item.likes[0]}</i>
                  </span>
                  <span>
                    <i className="fa fa-thumbs-down">{item.likes[1]}</i>
                  </span>
             </div>
             <div className="top">
              <h2>{item.title}</h2>
              <span>
                Article by: <strong>{item.author}</strong>
              </span>
             </div>
             <img alt={item.title} src={`/images/articles/${item.img}`} />
             <div className="body-news">
                {item.body}
             </div>
             <div>
                 <Counter 
                 articleId={item.id}
                 likes={item.likes[0]}
                 dislikes={item.likes[1]}
                 type='HANDLE_LIKES_ARTICLE'
                 section='articles'
                  />
             </div>
          </div>
        )
      })
    }
  }

  render() {
    return (
      <div className='news-container'>
        {this.renderNews(this.props.news)}
      </div>
    )
  }
}

// PROPTYPES DECLERATION
News.propTypes = {
  // SELECTED NEWS
  selectedNews: propTypes.func.isRequired,
  clearSelectedNews: propTypes.func.isRequired,
  news: propTypes.object.isRequired
}

function mapStateToProps(state) {
    return {
        news: state.news
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectedNews, clearSelectedNews }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(News);
