import styled from "styled-components";

export const MainPostsWrapper = styled('div')`
    min-width: 1200px;
    display: flex;
    justify-content: center;
    margin-top: 50px;
`
export const PostWrapper = styled('div')`
    display: flex;
    color: ${(props) => props.theme.palette.TextMainPage.main};
    margin-bottom: 10px;
    border-bottom: 2px solid black;
`
export const AdditionalWrapper = styled('div')`
    color: ${(props) => props.theme.palette.TextMainPage.main};
    margin-bottom: 10px;
`