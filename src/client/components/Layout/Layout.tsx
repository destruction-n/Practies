import React, { FC, PropsWithChildren } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { ContentWrapper } from './styles';
import { BurgerBtn } from '../BurgerMenu/styles';
import { Outlet } from 'react-router-dom';

const Layout: FC<PropsWithChildren> = () => {
    return (
        <div>
            <Header></Header>
            <ContentWrapper><Outlet></Outlet></ContentWrapper>
            <Footer></Footer>
        </div>
    );
};

export default Layout;