// REACT IMPORTS
import React, { Component } from 'react';
import propTypes from 'prop-types';

// REDUX IMPORTS
import { connect } from 'react-redux';
import { selectedGallery, clearSelectedGallery } from '../../../actions';
import { bindActionCreators } from 'redux';

// THIRD PARTY LIBRARIES
import Slider from 'react-slick';

// COMPONENTS IMPORTS
import Counter from '../../../views/components/ratings/LikesCounter';

// STYLES IMPORT
import './Gallery.css'

const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500
}

class Gallery extends Component {
    componentDidMount() {
        const pathname = window.location.pathname;
        const id = pathname.replace(/[^0-9]/g, '');
        this.props.selectedGallery(id);
    }

    componentWillUnmount() {
        this.props.clearSelectedGallery();
    }

    renderSlider = ({selected}) => {
        if(selected) {
            const gallery = selected[0];
            return (
                <div>
                    <h3>The best of {gallery.artist}</h3>
                    <Slider {...settings}>
                        {gallery.images.map((item, index) => {
                            return (
                                <div key={index} className='slider-item'>
                                   <div>
                                    <div className="image" style={{background: `url(/images/galleries/${item.img})`}}></div>
                                    <div className="description">
                                        <span>{item.desc}</span>
                                    </div>
                                   </div>
                                </div>
                            )
                        })}
                    </Slider>
                    <Counter 
                    articleId={gallery.id}
                    likes={gallery.likes[0]}
                    dislikes={gallery.likes[1]}
                    type='HANDLE_LIKES_GALLERY'
                    section='galleries'
                  />
                </div>
            )
        }
    }

    render() {
        const item = this.props.gallery
        return (
        <div className='slider-item-wrap'>
            {this.renderSlider(item)}
        </div>
        )
    }
}

// PROPTYPES DECLARATION
Gallery.propTypes = {
    // REDUX || ACTIONS || STATES
    selectedGallery: propTypes.func.isRequired,
    clearSelectedGallery: propTypes.func.isRequired,
    gallery: propTypes.object.isRequired,

    // METHODS
    renderSlider: propTypes.any
}

function mapStateToProps(state) {
    return {
        gallery: state.galleries
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectedGallery, clearSelectedGallery }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);