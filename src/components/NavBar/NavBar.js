import React from 'react';
import Cat from './Cat';
import User from './User';

import '../../styles/NavBar.scss';
import logo from '../../assets/udemy-logo.svg';

const NavBar = () => {

    return (
        <div className='nav-bar'>
            <div className='logo'> {/* Udemy logo */}
                <a href='https://www.udemy.com/home/my-courses/learning/'>
                    <img src={logo} alt='Logo' height='30px' width='100px' />
                </a>
            </div>
            <Cat /> {/* Categories */}
            <div className='search-container'> {/* search box */}
                <button type='submit'><i class="fas fa-search"></i></button>
                <input
                    className='search-text'
                    type='text'
                    name=''
                    placeholder='Search for anything' />
            </div>
            <ul> {/* the rest of navigation items */}
                {NavItems_A.map((item, index) => {
                    return(
                        <li key={index}>
                            <a className={item.link} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
            <User /> {/* User profile */}
        </div>
    )
}

const NavItems_A = [
    {
        title: 'Udemy for Business',
        url: '#',
        link: 'nav-link'
    },
    {
        title: 'Teach on Udemy',
        url: '#',
        link: 'nav-link'
    },
    {
        title: 'My courses',
        url: '#',
        link: 'nav-link'
    }
]

export default NavBar;