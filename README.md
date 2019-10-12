INSTRUCTIONS <br />
<br />
1 Enter the folder "zen-api" <br />
2 Run "rails s -p 3001" <br />
3 Enter the folder "client" <br />
4 Run "npm start" <br />

QUESTIONS <br />
<br />
1 The function componentDidMount is called only once and before the API call <br />
promise is solved. Inserting into the props into the render will force a  <br />
re-rendering when the props change <br />

2 The state is declared only when the component is started, and is never updated<br />
on its change. React lifecycle "componentWillReceiveProps" will be triggered <br />
just before the eventual re-rendering every times the received props from the <br />
component will change. A function to set a new state with the received props will <br />
change the state and force and the render will be triggered again <br />

6 The child component of the client side is using the same state of its parent, <br />
so it would make more sense to have it connected to redux store, or use directly <br />
the props into the render to avoid a useless state. Actions could be refactored to avoid <br />
repetition of code. Multiple components in the App file could make the code more readable.
