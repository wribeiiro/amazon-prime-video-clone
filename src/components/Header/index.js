import React from 'react';

import {Container, Menu, Search, User } from "./styles";
import logoPrime from "../../assets/logo-prime.svg";
import logoUser from "../../assets/user.png";

const Header = () =>(
    <Container>
        <div className="nav-wrapper">
            <img className="brand-logo" src={logoPrime} alt="logo" />
            <Menu>
                <a href="#" className="active-link">Início</a>
                <a href="#" className="">Séries</a>
                <a href="#" className="">Filmes</a>
                <a href="#" className="">Infantil</a>
                <a href="#" className="">Canais</a>
            </Menu>
        </div>

        <div className="actions">
            <Search>
                <input type="text" placeholder="Busca" />
            </Search>
            
            <User>
                <img className="user-logo" src={logoUser} alt="logo" />
                <span>Wellisson Ribeiro</span>
                <i className="fa fa-caret-down arrow-icon" />
            </User>
        </div>
    </Container>
);

export default Header;