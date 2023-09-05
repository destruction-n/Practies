import React from 'react';
import { StyledHeader } from './styles'
import { BurgerBtn } from '../../BurgerMenu/styles';
import BurgerMenu from '../../BurgerMenu/BurgerMenu';
import UserInfo from '../../UserInfo/UserInfo';

const Header = () => {
    return (
        <StyledHeader>
            <BurgerMenu></BurgerMenu>
            <UserInfo id="1" />
        </StyledHeader>
    );
};

export default Header;