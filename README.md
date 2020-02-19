This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### Dice Component Structure

Make two components:

1. RollDice - a parent component rendered by App that renders the dice and a button to roll
2. Die - an individual die that takes props and displays the correct face of the die based on props

MAKING DICE
How are we going to render Die?
We could get the different image files, but there is a better way.
Font Awesome has handy dice classes for us https://fontawesome.com/icons/dice-one?style=solid
<i class="fas fa-dice-one"></i>

fas fa-dice-one through fas fa-dice-six represents dice with different faces, 1 - 6.
To install font awesome for your react application, go into public/index.html and in the <head>
tag insert the font-awesome CDN.

This gives you access to any FA classes in the JSX.

Your Die.jsx would just be an icon that dynamically changes its class to the proper die face
based on props from the parent components state.

ROLLING DICE
The RollDice component should have:

1. the state for both of the dice
2. a roll() method that rolls them to randomly get a new result.
   You can use defaultProps to set an array of six possible faces for each die.

Your roll method can pick a random element from the array for each die, then update the state, causing the dice to re-render to the appropriate values.

Remember that these values will have to be translated into fas fa-dice-one through fas fa-dice-six for the child component to receive the appropriate className through its props.

Do you have to store each className in the array or can you programmatically decide which one the Die components should have?

FURTHER STUDY

ANIMATION
The solution displays an animation every time the dice are rolled.
A new piece of state is necessary to say whether the dice are currently rolling or not.
This is done by appending a class containing a css animation, and then removing it after one second (hint: setTimeout)
