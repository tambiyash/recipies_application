import React, { Component } from 'react';
import { connect } from "react-redux";
import {
          ParallaxImage,
          renderIngredients,
          Description,
          DetailTypeLabel,
          StyledGridContainer,
          StyledGridItem,
          StyledRecipeName,
        } from './UIComponents';
        
import {
          Heading,
          Flex, 
          Column,
          Tag,
          GridContainer,
          StyledCard,
          LikeControl,
          Rating,
          Loader,
        } from '../../ComponentLibrary';
import { getTimeValue } from '../../Utils/helpers';
import { getRecipe } from './reducers';
import { rateRecipeDetailsAction, updateFavoriteDetailsAction, setRecipeToStoreAction } from './action';

/**
 * creating mapStateToProps and mapDispatchToProps for interaction with reducers
 *  (through selectors) updateFavoriteAction and actions respectively.
 * @param {*} state 
 */

const mapStateToProps = (state) => {
    return ({
        recipe: getRecipe(state),
    });
}

const mapDispatchToProps = (dispatch) => ({
    setRecipe: (recipeId) => dispatch(setRecipeToStoreAction(recipeId)),
    updateRating: (id, rating) => dispatch(rateRecipeDetailsAction(id, rating)),
    updateFavorite: (id, favorite) => dispatch(updateFavoriteDetailsAction(id, favorite))
});

class RecipeDetails extends Component {
  componentDidMount() {
    const { match: { params : { recipeId } }, setRecipe } = this.props;
    setRecipe(recipeId);
  }

  render() {
    const {recipe} = this.props;

    if(!recipe || !Object.keys(recipe).length) {
        return <Loader big />
    }

    return (
          <React.Fragment>
            <ParallaxImage source={recipe.image} />
            <StyledGridContainer mainContainer columns={'4fr 1fr'} columnGap={50} rowGap={50}>
                <StyledGridItem columnStart={1} columnSpan={2}>
                    <StyledCard>
                        <StyledRecipeName justifyBetween>
                            <div>
                                <Heading h1>{recipe.name}</Heading>
                                <Heading h4>{recipe.headline}</Heading>
                            </div>
                            <Rating min={1} max={5} id={recipe.id} value={recipe.rating} onChange={this.handleRatingChange} />
                            <LikeControl id={recipe.id} liked={recipe.isFavorite} value={recipe.favorites} onChange={this.handleFavoriteChange} />
                        </StyledRecipeName>
                        <Flex noWrap alignEnd>
                            <Column width={'60%'}>
                                <Description>{recipe.description}</Description>
                            </Column>
                            <Column width={'40%'}>
                            <Flex column justifyAround contentEnd>
                                <div>
                                    <span><strong>Prepares in- </strong></span>
                                    <Tag>{getTimeValue(recipe.time)}</Tag>
                                </div>
                                <div>

                                </div>
                            </Flex>  
                            </Column>
                        </Flex>
                    </StyledCard>
                </StyledGridItem>
            </StyledGridContainer>
            <StyledGridContainer columns={'3fr 2fr'} columnGap={50}>
                <StyledGridItem>
                    <StyledCard>
                        <GridContainer columns={'1fr 1fr'} justifyItems={'space-between'}>
                            <StyledGridItem columnStart={1} columnSpan={2}>
                                <DetailTypeLabel h4>Ingredients-</DetailTypeLabel>
                            </StyledGridItem>
                            {renderIngredients(recipe.ingredients)}
                        </GridContainer>
                    </StyledCard>
                </StyledGridItem>
                <StyledGridItem>
                    <StyledCard>
                        <GridContainer columns={'1fr 1fr'} justifyItems={'flex-start'}>
                            <StyledGridItem padding={10} columnStart={1} columnSpan={2}>
                                <DetailTypeLabel h4>Nutritional Value-</DetailTypeLabel>
                            </StyledGridItem>
                            <StyledGridItem padding={10}>Protein</StyledGridItem>
                            <StyledGridItem padding={10}>{recipe.proteins}</StyledGridItem>
                            <StyledGridItem padding={10}>Carbohydrates</StyledGridItem>
                            <StyledGridItem padding={10}>{recipe.carbos}</StyledGridItem>
                            <StyledGridItem padding={10}>Fats</StyledGridItem>
                            <StyledGridItem padding={10}>{recipe.fats}</StyledGridItem>
                        </GridContainer>
                    </StyledCard>
                </StyledGridItem>
            </StyledGridContainer>
        </React.Fragment>
    );
  }

    handleRatingChange = (rating, id) => {
        const { updateRating } = this.props;
        console.log(rating, id);
        updateRating(rating, id);
    }

    handleFavoriteChange = (favorite, id) => {
        const { updateFavorite } = this.props;
        console.log(favorite, id);
        updateFavorite(favorite, id);
    }
}

export const Recipe = connect(
    mapStateToProps,
    mapDispatchToProps,
)(RecipeDetails);
