import styled from 'styled-components'

export const StyledFooter = styled('header')`
    display: flex;
    align-items:center;
    justify-content:space-between;
    background-color: ${(props) => props.theme.palette.primary.main};
    width:100%;
    height:60px;
    color:white;
    padding: 30px;
    
`;