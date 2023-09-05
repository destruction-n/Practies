import styled from "styled-components"

export const StyledHeader = styled('header')`
    background-color: ${(props) => props.theme.palette.primary.main};
    width:100%;
    height:60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;