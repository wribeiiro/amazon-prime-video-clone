import React, { Fragment } from 'react'
import styled from 'styled-components'

import Header from '../../components/Header/index';
import Movie from '../../components/Movie';
import Slide from '../../components/Slide/index';

import './styles.js';

function Home() {
    return ( 
        <Fragment>
            <Header/>
            <Slide/>
            <Movie
                title="Assista a seguir"
            />
            <Movie
                title="Prime Video Channels"
            />
        </Fragment>
    ) 
}

export default Home