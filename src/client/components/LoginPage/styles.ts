import styled from 'styled-components'

export const SignUpWrapper = styled('div')`
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-direction: column;
    color: ${(props) => props.theme.palette.TextMainPage.main};
`