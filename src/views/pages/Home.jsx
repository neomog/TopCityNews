// REACT IMPORTS
import React, { Component } from 'react';
import propTypes from 'prop-types'

// REDUX IMPORTS
import { connect } from 'react-redux';
import { latestNews, otherNews, latestGallery } from '../../actions';
import { bindActionCreators } from 'redux';

// COMPONENT IMPORTS
import LatestNews from '../components/home/Latest';
import OtherNews from '../components/home/OtherNews';
import Gallery from '../components/home/Gallery';

// STYLE IMPORTS
import './Home.css';

class Home extends Component {
  
  componentDidMount() {
    this.props.latestNews();
    this.props.otherNews();
    this.props.latestGallery()
  }

  render() {
    return (
      <div>
        <LatestNews 
        latest={this.props?.articles?.latest} />
        <OtherNews otherNews={this.props.articles.other} />
        <Gallery latestGallery={this.props.gallery.gallery}/>
      </div>
    )
  }
}

// export default Home;
Home.propTypes = {
  // LATEST NEWS
  latestNews: propTypes.func.isRequired,
  articles: propTypes.object.isRequired,

  // OTHER NEWS
  otherNews: propTypes.func.isRequired,

  // GALLERY
  latestGallery: propTypes.func.isRequired,
  gallery: propTypes.object.isRequired
}

function mapStateToProps (state)  {
  return {
    articles: state.articles,
    gallery: state.galleries
  }
  
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({latestNews, otherNews, latestGallery}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);