import styled, { css } from 'styled-components';

/**
 * Extended card div's to be used to render short and multiple contents. 
 * Along with using animations and delay to make UI look good and responsive. It can be 
 * checked out on home page where recipe cards use Card Animations to render
 */

const animatedCss = css`
    opacity: 1;
    transform: translateY(50px);
`

const primaryCss = css`
    background-color: #008bf8;
    color: #fff;
`

const imageCardCss = css`
    display: block;
    min-height: 400px;
    position: relative;
    overflow: hidden;
    transition: all .3s ease-out;
    :hover {
        transform: scale(1.1);
    }
`;

export const StyledCard = styled.div`
    width: ${props => (props.width ? props.width : 'auto')};
    padding: 15px;
    opacity: ${props => props.animated ? 0 : 1};
    margin: ${props => (props.noMargin ? 0 : '15px')};
    box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 1);
    border-radius: 5px;
    background: ${props => props.bgImageUrl && `url(${props.bgImageUrl}) center/cover no-repeat`};
    transition: 500ms all ease-in-out;
    transform: translateY(0);
    
    ${props => props.animated && animatedCss}
    ${props => props.primary && primaryCss}
    ${props => props.bgImageUrl && imageCardCss}
`;