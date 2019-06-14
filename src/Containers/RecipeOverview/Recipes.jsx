import React, { Component } from 'react';
import {Link as RouterLink} from 'react-router-dom';
import { connect } from "react-redux";
import { fetchRecipesAction, rateRecipeAction, updateFavoriteAction, fetchRecipeByQuery } from './action';
import { getRecipes, getRecipesError, getRecipesPending } from './reducers';
import {CalorieTag, CardSection, CardSectionWrapper, SectionHeading, SectionDetails, SectionSubheading, RecipeGridContainer, LayoutWrapper } from './UIComponents';
import {StyledCard, Loader, Rating, Button, LikeControl, GridItem, Tag} from '../../ComponentLibrary/';
import { getTimeValue } from '../../Utils/helpers';
import SearchBox from '../../ComponentLibrary/SearchBox';

// creating mapStateToProps and mapDispatchToProps for interaction with reducers(through selectors) updateFavoriteAction   and actions respectively.
const mapStateToProps = (state) => ({
    error: getRecipesError(state),
    recipes: getRecipes(state),
    pending: getRecipesPending(state),
});

const mapDispatchToProps = (dispatch) => ({
    fetchRecipes: () => dispatch(fetchRecipesAction()),
    updateRating: (id, rating) => dispatch(rateRecipeAction(id, rating)),
    updateFavorite: (id, favorite) => dispatch(updateFavoriteAction(id, favorite)),
    fetchSearchedRecipes: (query) => dispatch(fetchRecipeByQuery(query))
});

class RecipeList extends Component {
    constructor(props) {
        super(props);
        this.renderLoader = this.renderLoader.bind(this);
    }

    componentDidMount() {
        this.props.fetchRecipes();
    }

   renderLoader = () => {
    const {pending} = this.props;
    return !pending ? true : false;
   }

    render() {
        const {pending, recipes} = this.props;

        return (
            <React.Fragment>
                {pending && <Loader big />}
                {!pending &&
                    <LayoutWrapper>
                        <SearchBox value={''} onSubmit={this.searchSubmitHandler}/>
                        <RecipeGridContainer columns={'1fr 1fr 1fr'} columnGap={100} rowGap={65}>
                            {recipes.map((recipe, index) => {
                                return (
                                    <GridItem key={index} padding={5}>
                                        <StyledCard noMargin bgImageUrl={recipe.thumb} key={index} delay={index * 150}>
                                        {
                                          recipe.calories &&
                                            <CalorieTag>
                                                <div>{`${recipe.calories}`}</div>
                                            </CalorieTag>
                                        }
                                            <LikeControl onCard id={recipe.id} liked={recipe.isFavorite} value={recipe.favorites} onChange={this.handleFavoriteChange} />
                                            <CardSectionWrapper>
                                                <CardSection>
                                                    <SectionHeading h4>{recipe.name}</SectionHeading>
                                                    <SectionSubheading>{recipe.headline}</SectionSubheading>
                                                    <SectionDetails>
                                                        <Tag>{getTimeValue(recipe.time)}</Tag>
                                                        <Rating onCard min={1} max={5} id={recipe.id} value={recipe.rating} onChange={this.handleRatingChange} />
                                                    </SectionDetails>
                                                    <RouterLink to={`/recipes/${recipe.id}`}>
                                                        <Button fill primary>Show Details</Button>
                                                    </RouterLink>
                                                </CardSection>
                                            </CardSectionWrapper>
                                        </StyledCard>
                                    </GridItem>
                                );
                            })}
                        </RecipeGridContainer>
                    </LayoutWrapper>
                }  
            </React.Fragment>
        )
    }

    handleRatingChange = (rating, id) => {
        const { updateRating } = this.props;
        console.log(rating, id);
        updateRating(id, parseInt(rating));
    }

    handleFavoriteChange = (favorite, id) => {
        const { updateFavorite } = this.props;
        console.log(favorite, id);
        updateFavorite(id, favorite);
    }

    searchSubmitHandler = (query) => {
        const { fetchSearchedRecipes } = this.props;
        fetchSearchedRecipes(query);
      }
}

export const Recipes = connect(
    mapStateToProps,
    mapDispatchToProps,
)(RecipeList)
