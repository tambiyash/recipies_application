import React from 'react';
import styled, { css } from "styled-components";
import { Heading, StyledCard, GridContainer } from '../../ComponentLibrary';
import { ResponsiveBreakpoints } from '../../Utils/constants';

export const LayoutWrapper = styled.div`
    margin-left: 3em;
    margin-right: 3em;
`;

export const RecipeGridContainer = styled(GridContainer)`
    @media (max-width: ${ResponsiveBreakpoints.Mobile}px) {
        grid-template-columns: 1fr;
    }

    @media (max-width: ${ResponsiveBreakpoints.Tablet}px) and (min-width: ${ResponsiveBreakpoints.Mobile}px) {
        grid-template-columns: 1fr 1fr ;
    }   
`;

const overflowStyles = css`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: block;
`;

/**
 * This file contains all the UI related dumb components for Recipe Details view.
 */
export class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            animated: false,
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState(() => {
                return { animated: true }
            })
        }, this.props.delay)
    }

    render() {
        const { delay = 0, primary, noMargin, navigateTo, width, ...props } = this.props
        return (
                <StyledCard
                animated={this.state.animated}
                delay={delay}
                primary={primary}
                width={width}
                noMargin={noMargin}
                {...props}
            >
                {this.props.children}
            </StyledCard>            
        )
    }
}

export const CalorieTag = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color: #77d7b9;
    color: white;
    padding: 0.8em;
    text-align: center;
    text-shadow: 2px 3px 2px rgba(0, 0, 0, 0.18);

    :first-child {
        font-weight: 700;
        font-size: 24px;
    }
`;

export const CardSectionWrapper = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    transform: translateY(calc(150px + 1em));
    transition: transform 0.3s;

    ${StyledCard}:hover & {
        transform: translateY(0);
      }
`;

export const CardSection = styled.div`
    padding: 0.5em;
    position: relative;
    z-index: 1;
    height: 200px;
    max-height: 250px;
    background-color: #d8d8d8;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
`;

export const SectionHeading = styled(Heading)`
    text-align: center;
    ${overflowStyles};
    margin-bottom: 5px;

    :after {
        content: '';
        display: block;
        margin: auto;
        height: 3px;
        width: 0px;
        background: transparent;
        transition: width .5s ease, background-color .5s ease;
    }

    ${StyledCard}:hover & {
        :after {
        width: 90%;
	    background: #0dba84;
        }
    }
`;

export const SectionDetails = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
`;

export const SectionSubheading = styled.div`
    color: black;
    margin: 0;
    height: auto;
    display: block;
    padding: 0px 10px;
    align-items: center;
    font-size: 15px;
    font-weight: 600;
    color: #5b5a5a;
`;