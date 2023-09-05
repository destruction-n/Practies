export enum ThemeModes {
    LIGHT = 'light',
    DARK = 'dark',
}

const palettes = {
    [ThemeModes.DARK]: {
        primary: {
            main: '#1436be'
        },
        background: {
            paper: '#000'
        },
        action: {
            active: "#fff"
        },
        Line: {
            paper: '#fff'
        },
        TextHeader: {
            main: '#fff'
        },
        BgHeaderInit: {
            main: '#d9d9d9'
        },
        TextMainPage: {
            main: "#fff"
        },
        BgStyledModal: {
            main: '#fff'
        },
        ActivePageColor: {
            main: '#05a7f7'
        }
    },
    [ThemeModes.LIGHT]: {
        primary: {
            main: '#2c71ca'
        },
        background: {
            paper: '#FFF'
        },
        action: {
            active: "#fff"
        },
        IconWrapper: {
            dark: '#bfbbbb'
        },
        Line: {
            paper: '#bcbcbc'
        },
        TextHeader: {
            main: '#fff'
        },
        BgHeaderInit: {
            main: '#d9d9d9'
        },
        TextMainPage: {
            main: "#000"
        },
        BgStyledModal: {
            main: '#d3dceb'
        },
        ActivePageColor: {
            main: '#05a7f7'
        }
    },
}


export const createTheme = (mode: ThemeModes) => {
    return {
        themeMode: mode,
        palette: {
            mode: mode,
            ...palettes[mode],
        },
    };
};