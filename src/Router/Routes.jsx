import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Recipes } from '../Containers/RecipeOverview';
import { Recipe } from '../Containers/RecipeDetails/Recipe';
import HelloFreshIcon from '../hellofresh-logo.svg';
import { Header, Nav } from '../ComponentLibrary/Header';

/**
 * Route component to render differnt routes. Here I've implemented
 * 2 routes, one for Home View with Recipe Lists and another one for Details page
 * having Recipe details.
 */

class Routes extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <Header>
                        <Nav to={'/'}>
                            <img src={HelloFreshIcon} alt="Hellofresh logo" />
                        </Nav>
                    </Header>
                    <Switch>
                        <Route exact path="/" component={Recipes} />
                        <Route path="/recipes/:recipeId" component={Recipe} />
                    </Switch>
                </React.Fragment>               
            </BrowserRouter>
        );
    }
}

export default Routes