import React, { useContext } from 'react';
import { AppContext } from '../../../App';
import { StyledWrapper } from './styled';
import { DarkMode, LightMode } from '@mui/icons-material';
import { ThemeModes } from '../../../Styles/theme';

const ThemeToggler = () => {
    const { toggleTheme, themeMode } = useContext(AppContext)
    const isDarkMode = themeMode === ThemeModes.DARK
    return (
        <StyledWrapper>
            <button onClick={() => toggleTheme(ThemeModes.DARK)}>
                <DarkMode color={isDarkMode ? 'primary' : 'info'} />
            </button>
            <button onClick={() => toggleTheme(ThemeModes.LIGHT)}>
                <LightMode color={isDarkMode ? 'info' : 'primary'} />
            </button>
        </StyledWrapper>
    );
};

export default ThemeToggler;