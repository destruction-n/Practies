import React, { useState } from 'react';
import { BurgerBtn, BurgerBtnWrapper, CrossBtn, StyledLi, StyledModal } from './styles';
import { NavLink } from 'react-router-dom';
import { userRoutes } from '../../UserRoutes/userRoutes';
import NavLinks from '../NavLinks/NavLinks';



const BurgerMenu = () => {
    const [opened, setOpened] = useState(false);

    const toggleOpen = () => {
        setOpened((opened) => !opened)
    }



    return (
        <div>
            <BurgerBtnWrapper onClick={toggleOpen}>
                {opened === true ? <CrossBtn /> : <BurgerBtn />}

            </BurgerBtnWrapper>
            {opened && <NavLinks />}
        </div>


    );
};

export default BurgerMenu;