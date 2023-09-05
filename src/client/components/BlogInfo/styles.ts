import styled from 'styled-components';

export const MainWrapperBlog = styled('div')`
    min-width: 1200px;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`;

export const NameDateWrapper = styled('div')`
    display: flex;
    flex-direction: row;
`;

export const NameBlog = styled('p')`
    &::after{
        position: absolute;
        content: ' ';
        background-color: grey;
        width: 2px;
        height: 19px;
        left: calc(50% - 555px);
        
    };
    padding-right: 20px;
    margin-bottom: 25px;
`;

export const MainBlogTitle = styled('p')`
    font-size: 20px;
    margin-bottom: 20px;
    font-weight: bold;
`;

export const ImgWrapper = styled('div')`
    display:flex;
    justify-content: center;
    margin-bottom: 25px;
`;

export const BlogImg = styled('img')`
    min-width: 900px;
    height: 370px;
`;

export const BlogTextWrapper = styled('div')`
    display: flex;
    align-items:center;
    margin-bottom: 25px;
    flex-direction: column;
   
`;

export const BlogText = styled('p')`
    text-align: left;
    max-width: 800px;
    margin-bottom: 30px;
`;

export const ActivitesWrapper = styled('div')`
    min-width: 900px;
    
`;

export const WrapperForTextIcons = styled('div')`
min-width: 800px;
display: flex;
flex-direction: row;
gap: 20px;

`
export const LikeDislakeWrapper = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 30px;
    background-color: ${props => props.theme.palette.IconWrapper.dark}
    
    
`