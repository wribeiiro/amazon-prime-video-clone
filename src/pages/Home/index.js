import React, { Fragment } from 'react'
import styled from 'styled-components'

import Header from '../../components/Header/index';
import Slide from '../../components/Slide/index';

import './styles.js';

function Home() {
    return ( 
        <Fragment>
            <Header/>
            <Slide/>
        </Fragment>
    ) 
}

export default Home