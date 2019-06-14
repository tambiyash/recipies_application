# Frontend React Test
Hello! Thank you for taking the time to try out FrontEnd React test. The goal of this test is to help us assess your coding, UI, HTML and CSS skills.

Though the test is using [create-react-app](https://github.com/facebook/create-react-app) to help you get started faster, feel more than free to add any particular technique or algorithm at any point, which you think might enrich the overall quality of the end result.

Please complete the test promptly, however you should **engineer the test as you would in a production app**, we would like to assess all your skills!

_Note: While we love open source here at HelloFresh, please do not create a public repo with your test in! This challenge is only shared with people interviewing, and for obvious reasons we'd like it to remain this way._


### Instructions
1. Clone this repo.
2. Create a new `dev` branch.
3. Plan, Code, commit, repeat! (We won't be looking at the time each task took, but we'd love to see your train of thought reflected in the development timeline  through various commits).
4. When finished, write clear instructions and an explanation for your solution.
5. Create a Pull-Request to this repo.
6. After creating your pull request please send the link via email to our HR department in order for us to start the reviewing process.

Tips on How to Tackle the test:
1. Schedule a specific time to tackle the test
2. Be well rested and choose a quiet place with no interruptions
3. Read the instructions and requirements carefully, and feel free to ask any questions.
4. Identify technical decisions you need to make and sketch out an initial plan.
5. Organise your tasks in a todo list or a Trello board
6. Start coding and commit often!
7. [KISS, DRY and YAGNI](https://www.itexico.com/blog/software-development-kiss-yagni-dry-3-principles-to-simplify-your-life)
8. Enrich the code with comments and include clear instructions!

### Exercise:
In this test we will build an app for the recipes area, it will contain two pages:

#### [I. Recipe overview page](https://www.hellofresh.com/recipes/)
This will show all the recipes fetched from the provided endpoint.
The following should be true for this page:
* All the recipes are displayed
* The data of each recipe is displayed in a user-friendly way. the recipe card should display at least: recipe's name, headline, image, calories and time.
* Each recipe can be favorited or unfavorited
* Each recipe can be rated

#### [II. Recipe details page](https://www.hellofresh.com/recipes/quick-beef-ragu-spaghetti-5abd4797ae08b549e56a1502?locale=en-US)
The following should be true for this page:
* In addition to the details in the overview page, this page should display at least: description, ingredients, fats, calories, proteins, carbs and preparation time?
* Each recipe can be favorited or unfavorited
* Each recipe can be rated

#### API:
- recipes: https://s3-eu-west-1.amazonaws.com/frontend-dev-test/recipes.json

### FAQ:
0. Are there any minimal requirments for npm and node?

|Package|Version|
|---|---|
|npm|>= 5|
|node|>= 8|

1. Do I need to start the project from scratch?
The repo is already set up using [create-react-app](https://github.com/facebook/create-react-app) to help you get started faster.

2. Can I use create-react-app `eject`?
Please avoid `eject`ing create-react-app, we want to review your test without going through thousands of lines of the boilerplate's code.

3. What language can I use in the test?
You should write your test in english, this covers Components, variable names, comments...

4. What programming language can I use in the test?
You must write your test in Javascript (ES6 and beyond). Superset languages like TypeScript, CoffeeScript... won't be reviewed.

5. Should I use my own design?
Feel free to be creative with the design, but you could use our [website](https://www.hellofresh.com/recipes/)'s design instead.

6. Can I use a CSS/UI framework?
Bootstrap or any other CSS/UI framework should be avoided.

7. Can I use a utility package like lodash?
Using utility packages trusted and test by the community is recommended, please use them as you would in a production app.

8. What should I use for CSS?
You could use a pre-processor, post-processor, or [CSS-in-JS](https://github.com/MicheleBertoli/css-in-js) instead.

9. Should I write unit tests?
The app must contain unit tests, and aim for a good test coverage, but please avoid using snapshots (we understand that in real life are important, but to make the test easier to review).

_P.S: We'll automatically format the code before every commit using prettier. We want to focus the review in business logic, patterns and architecture decisions rather than styling._

### Evaluation Criteria:
#### Overarching Criteria:
- Clear instructions to run the app
- the app must run
- the code is well structured
#### Resilience:
- The app has unit tests
- Tests and Eslint need to pass
#### Features:
- Two routes are implmented (recipes overview, and recipe detail)
- Recipe rating is implemented. Please do not use any external library like `react-rating`.
- Recipe favouriting is implemented
#### UI:
- You implemented a proper grid.
- Your app is responsive.

### Bonus Point:
- Your code is well documented.
- Your app has server side rendering
- Your UI components have usable animations.
- Your app is deployed (you may use something like [Now](https://zeit.co/now))

Good luck, and have fun!

--------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------

### How to start- Since made with create-react-app, all we need to do is run npm install followed by npm start in the folder TAMBIYASH-FRONTEND-REACT-TEST.

First of all, a lot many apologies on extension of time. I am pretty much loaded with work at current workplace and therefore couldn't find much time everyday to work on this.

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

 6. **NEW_FEATURE = Implemented Searching Recipes based on a part of/complete name.**


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
