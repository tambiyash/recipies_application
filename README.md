# Frontend React Test for Hellofresh

## Some of the things that I did are -

1.  Created Library of all the UI components used in a way that they can be use differently as per needs altering by props. You can check the out at src/ComponentLibrary.
    
2.  Used Container-Components approach to the heirarchy of my code. This seperates my app with it's UI (well, in most ways). Also if at a later time we needd to reove a functionality          entirely, it can be done by deleting the entire directory.

    My presentational components:
      1. Are concerned with how things look.
      2. Have no dependencies on the rest of the app, such as Redux actions or stores.
      3. Don’t specify how the data is loaded or mutated.
      4. Rarely have their own state (when they do, it’s UI state rather than data).
    Examples: Card, CssGridLayout, Flex, etc. They are present in src/ComponentLibrary.
    
    My containers:
      1. Are concerned with how things work.
      2. Provide the data and behavior to presentational or other container components.
      3. Are often stateful, and connected to Redux actions, store, etc.
      4. have their own action-actionCreator-reducer-selector package present inside them.
    Examples: Recipe, RecipeList, etc. They are present in src/Containers.

    My UiComponents:
      1. Are concerned with how concerned container view looks.
      2. Often use components from Component Library to modify their look and feel and feed to Container view.
    Examples: StyledGridContainer, Everything inside StyledCard rendered for every recipe in RecipeListView. They are present in src/Containers/{component_name}/UIComponents.
    
 3. Used styled-components (https://github.com/styled-components/styled-components):
    Almost got rid of using css/sass thus removing mapping between components and styles. USed css-in-js with this awesome package. You can check https://www.styled-components.com/docs/basics
    for a list of it's advantages. I love it !!
    
 4. Tried maintaining constants, helper functions seperately in src/Utils so that they can be used by components/containers all at once.
    
 5. Spent some time in improving the look and feel of UI. Although kept it simple with appropriate (not too much) animations and transitions.

 6. Implemented Searching Recipes based on a part of/complete name.


 # TODO-

Although I tried to do and achieve a lot of things, there are almost equal ideas which I thought of implementing but couldn't do because of time restriction. However, after assessing, if you guys feel to give me sometime to work on any/all of these changes, I'd be happy to do it.

 1. Improve the look and feel of Recipe Details Page and to some extent Recipe List page. I worked on Details page, towards the later days especially during the hassle, hence couldn't      work much on it's design.
    I think I lost the track of design between "whether I should keep it simple by using the components from Library" and "wow ! This feature looks nice, let's try that. Errrgghhhh, why does it not work".

 2. Need to look after handling Browser-Refresh of Recipe Details page. I know it will be coupled with API but need to make sure that the component always gets Recipe id, to get details   from store in DidMount.

 3. Rating should have transitions to show when changed.

 4. Filter to be implemented. Recipes have many properties like preparation time, difficulty, etc and can be filtered by any/some/all of these properties.

 5. Overall attention to look and feel. Library components can be extended to a more Generic approach handling everything by props.

 6. Many more !!! (Sky is the limit, Window will be overflown !!).


 All in all, it was a great assessment and turned out to be good. Thanks to all those one-nighters I pulled after work that made it happen.
 And again, apologies for extension on time.
