import styled from 'styled-components'

export const BurgerBtn = styled('div')`
    width: 25px;
    height: 2px;
    position: relative;
    
    background-color: ${props => props.theme.palette.action.active};
    &::after{
        content: ' ';
        position: absolute;
        top: 10px;
        width: 25px;
        background-color: ${props => props.theme.palette.action.active};
        height: 2px;
    }
    &::before{
        content: ' ';
        position: absolute;
        bottom: 10px;
        width: 25px;
        background-color: ${props => props.theme.palette.action.active};
        height: 2px;
        
    }
`
export const BurgerBtnWrapper = styled('div')`
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content:center;
    margin-left: 25px;
    position: relative;
`

export const CrossBtn = styled('div')`
    position: relative;
    width: 22px;
    height: 2px;
    background-color: ${props => props.theme.palette.action.active};
    transform: rotate(45deg);
    &::after{
        position: absolute;
        content: ' ';
        width: 22px;
        height: 2px;
        background-color: ${props => props.theme.palette.action.active};
        transform: rotate(90deg);
    }

`
export const StyledModal = styled('div')`
    height: calc(100vh - 120px);
    width: 250px;
    left: -25px;
    top:60px;
    background-color: ${props => props.theme.palette.BgStyledModal.main};
    position: absolute;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
`
export const StyledLi = styled('li')`
     list-style-type: none;
     display: flex;
     justify-content: center;
     align-items: center;
     height: 50px;
     border-bottom: 1px solid ${(props) => props.theme.palette.Line.main};
     
    &:hover{
        background-color: ${(props) => props.theme.palette.BgHeaderInit.main};
    }

     & a {
        text-decoration: none;
        &.active{
            color: ${(props) => props.theme.palette.ActivePageColor.main};
        }
     }
`