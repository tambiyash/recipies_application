import React from 'react'
import styled, { css } from 'styled-components'
import {Loader} from './Loader';

/**
 * Contains styled-implementation of Buttons to adapt to modern day styling.
 */

const StyledButton = styled.button`
    width: ${props => props.fill ? '100%' : 'auto'};
    border-radius: 5px;
    background-color: ${props => (props.secondary ? '#d17a4d' : '#68aee8')};
    color: #fff;
    padding: ${props => props.big ? '10px 15px' : '5px 10px'};
    font-size: ${props => {
        if (props.big) return '20px'
        return '16px'
    }};
    outline: none;
    border: none;
    cursor: pointer;
    margin: ${props => props.fill ? '0px' : '15px'};

    ${props => {
        return (
            props.inverse &&
            css`
                background-color: #fff;
                color: #a1cdf1;
            `
        )
    }}

    :hover {
        background-color: ${props => props.secondary ? '#a0410e' : '#015396'}
    }
`

export const Button = ({ secondary, big, inverse, loading, fill, children, ...props }) => {
    return (
        <StyledButton secondary={secondary} big={big} fill={fill} inverse={inverse} {...props}>
            {loading ? <Loader small white /> : children}
        </StyledButton>
    )
}
