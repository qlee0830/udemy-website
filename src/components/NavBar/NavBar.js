import React from 'react';
import Cat from './Cat';
import User from './User';

import '../../styles/NavBar.scss';

const NavBar = () => {

    return (
        <div className='nav-bar'>
            <div className='logo'> {/* Udemy logo */}
                <h3>Logo</h3>
            </div>
            <Cat /> {/* Categories */}
            <div className='search-box'> {/* search box */}
                <input
                    className='search-text'
                    type='text'
                    name=''
                    placeholder='Search for anything' />
                <div></div>
            </div>
            <ul> {/* the rest of navigation items */}
                {NavItems.map((item, index) => {
                    return(
                        <li key={index}>
                            <a className={item.link} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
            <User />
        </div>
    )
}

const NavItems = [
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
    },
    {
        title: 'Wishlist',
        url: '#',
        link: 'nav-link'
    },
    {
        title: 'Cart',
        url: '#',
        link: 'nav-link'
    },
    {
        title: 'Noti',
        url: '#',
        link: 'nav-link'
    },
]

export default NavBar;