import React, { Component } from 'react';

import '../../styles/Cat.scss';

const Cat = () => {

    return(
        <div className='cat'>
            <button>Categories</button>
            <div className='dropdown-content'>
                {Items.map((item, index) => {
                    return(
                        <a className={item.link} href={item.url} key={index}>
                            {item.title}
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

const Items = [
    {
        title: 'Development',
        url: '#',
        link: 'nav-link'
    },
    {
        title: 'Business',
        url: '#',
        link: 'nav-link'
    },
    {
        title: 'Finance & Accounting',
        url: '#',
        link: 'nav-link'
    },
    {
        title: 'IT & Software',
        url: '#',
        link: 'nav-link'
    },
]

export default Cat;