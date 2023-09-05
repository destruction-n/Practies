import styled from 'styled-components'

export const UserInfoWrapper = styled('div')`
    height: 100%;
    width: 190px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 2px solid ${(props) => props.theme.palette.Line.paper};

`
export const UserInitialsWrapper = styled('div')`
    width: 38px;
    height: 38px;
    background-color: ${(props) => props.theme.palette.BgHeaderInit.main};
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;

`
export const UserNameText = styled('p')`
    color: ${(props) => props.theme.palette.TextHeader.main};
    margin-left: 20px;
`
export const MainUserInfoWrapper = styled('div')`
    display: flex;
    flex-direction: row;
    align-items: center;
`