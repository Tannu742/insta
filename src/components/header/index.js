import React from 'react';
import logo from '../../assets/img/Instagram_logo.png'
import Search from '../search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faComment, faHeart, faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import avatar from '../../assets/img/avatar.jpg';

const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <div className='row justify-content-between'>
                    <div className='col header_logo'>
                        <img src={logo} alt="" />
                    </div>
                    <div className='col header_srch align-content-center'>
                        <Search />
                    </div>
                    <div className='col header_icons'>
                        <ul>
                            <li><FontAwesomeIcon icon={faHouse} /></li>
                            <li><FontAwesomeIcon icon={faComment} /></li>
                            <li><FontAwesomeIcon icon={faHeart} /></li>
                            <li><FontAwesomeIcon icon={faSquarePlus} /></li>
                            <li><img src={avatar} alt="" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
