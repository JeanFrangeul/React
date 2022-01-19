import React from 'react'
import styled from 'styled-components/macro'

const Toast = () => {
    const theme = 'light'

    return (
        <Wrapper theme={theme}>
            Le message a bien été envoyé
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: fixed;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    background: ${props => props.theme === 'light' ? '#EEE' : 'black'};
    color: ${props => props.theme === 'light' ? 'black' : '#EEE' };
    border-radius: 4px;
    padding: 1rem 4rem;
    font-weight: bold;
`

export default Toast
