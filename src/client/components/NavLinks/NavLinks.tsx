import React from 'react';
import { StyledLi, StyledModal } from '../BurgerMenu/styles';
import { NavLink } from 'react-router-dom';
import { userRoutes } from '../../UserRoutes/userRoutes';
import ThemeToggler from '../ThemeToggler/ThemeToggler';

const NavLinks = () => {
    return (
        <StyledModal>
            <ul>
                <StyledLi>
                    <NavLink to='/'>Main Page</NavLink>
                </StyledLi>
                {userRoutes.map(route => {
                    return <StyledLi>
                        <NavLink key={route.id} to={route.path}>{route.title || "unknown"}</NavLink>
                    </StyledLi>
                })}
            </ul>
            <ThemeToggler />
        </StyledModal>
    );
};

export default NavLinks;