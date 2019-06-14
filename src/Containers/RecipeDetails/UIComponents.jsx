import React from 'react';
import styled from 'styled-components';
import {StyledCard} from '../../ComponentLibrary';
import {Flex, Heading, GridContainer, GridItem} from '../../ComponentLibrary';
import { ResponsiveBreakpoints } from '../../Utils/constants';

/** This module conatins all the UI related changes for Recipe Details view.
 *  It does not have any generic UI components, only specific to Recipe Detail Container, they all go in ComponentLibrary
 */

export const StyledImage = styled.div`
    width: 100%;
    min-height: 200%;
    position: absolute;
    background-image: url(${props => props.source});
    background-attachment: fixed;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: ${ResponsiveBreakpoints.Mobile}px) {
        min-height: 360%;
    }

    @media (max-width: ${ResponsiveBreakpoints.Tablet}px) and (min-width: ${ResponsiveBreakpoints.Mobile}px) {
        grid-template-columns: 1fr 1fr ;
    }
`;

// Renders parallax image on view
export const ParallaxImage = (props) => {
    return (
        <StyledImage {...props}/>
    );   
}

export const StyledGridContainer = styled(GridContainer)`
    margin: 4em 3em;
    padding-top: ${props => props.mainContainer && '15em'};

    ${StyledCard} {
        background-color: white;
    }

    @media (max-width: ${ResponsiveBreakpoints.LargeMobile}px) {
        grid-template-columns: 1fr;
    } 
`;

export const StyledGridItem = styled(GridItem)`
    align-self: flex-end;
    justify-self: flex-start;
    span {
        margin-bottom: 2em;
    }
    div {
        margin-bottom: 0.5em;
    } 
`;

export const Description = styled.p`
    font-style: italic;
    line-height: 1.6;
    color: #015396;
    text-align: start;
`;

export const DetailTypeLabel = styled(Heading)`
    color: #4c4c4c;
`;

export const StyledRecipeName = styled(Flex)`
  font-weight: 800;

  h1 {
    font-weight: 800;
    text-align: start;
  }

  h4 {
    color: #A9A9A9;
    text-align: start;
  }
`;

export const renderIngredients = (ingredients) => {
    return ingredients.map((ingredient, index) => <GridItem padding={20} key={index}>{ingredient}</GridItem>)
}
