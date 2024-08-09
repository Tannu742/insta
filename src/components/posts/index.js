import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faComment, faPaperPlane, faBookmark } from '@fortawesome/free-regular-svg-icons';

const Posts = ({ thumbnail, title, url }) => {
    return (
        <div className='post'>
            <div className='row justify-content-between align-items-center text-center'>
                <div className='col-8'>
                    <img className='thumbnail' src={thumbnail} alt="thumbnail" />
                    <span>{title}</span>
                </div>
                <div className='col-2'>
                    <FontAwesomeIcon icon={faEllipsis} />
                </div>
            </div>
            <div className='post_Img'>
                <img src={url} alt="" />
            </div>
            <div className='post_Icon d-flex py-2'>
                <div className='col'>
                    <ul className=' d-flex'>
                        <li><FontAwesomeIcon icon={faHeart} /></li>
                        <li><FontAwesomeIcon icon={faComment} /></li>
                        <li><FontAwesomeIcon icon={faPaperPlane} /></li>
                    </ul>
                </div>
                <div className='col last_ul'>
                    <ul>
                    <li><FontAwesomeIcon icon={faBookmark} /></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
Posts.protoTypes = {
    title: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    id: PropTypes.number,
    handleImg: PropTypes.func.isRequired
}
export default Posts;
