import React, { Component } from 'react';
import Navbar from '../components/NavBar/NavBar';

import styles from '../styles/Home.scss';

class Home extends Component {

    render(){
        return(
            <div className={styles.home}>
                <Navbar />
            </div>
        );
    }
}

export default Home;