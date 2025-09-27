
## 1. What is JSX, and why is it used?
### => **JSX** (JavaScript XML) is a syntax extension for JavaScript used mainly in React. It allows developers to write UI structure in a way that looks like HTML but works inside JavaScript. It is used because it makes code more readable, easier to write, and combines the power of JavaScript with the clarity of HTML when building user interfaces.


## 2. What is the difference between State and Props?
### => **State** : A component’s own data, managed internally. It can change over time (mutable) using hooks like useState, and re-renders the component when updated. Used for things like user input, counters, or toggles. **Props **: External data passed from a parent component to a child. They are immutable (read-only) and make components reusable by allowing dynamic values. Controlled by the parent, not the child.


## 3. What is the useState hook, and how does it work?
### => **useState** is a React Hook that lets functional components manage state (data that changes over time).
* It provides a **state variable** and a **function to update it**.
* When the update function is called, React re-renders the component with the new state value.
* Syntax: `const [value, setValue] = useState(initialValue)`
* Example use cases: counters, form inputs, toggles, or any dynamic data in the UI.


## 4. How can you share state between components in React?
### => Sharing State Between Components in React:
**1. Lift State Up**
- Move the shared state to the closest common parent of the components that need it.
- Pass the state and its update function down as props to child components.
Example: A parent component holds a counter, and two child components read or update it via props.
**2. Context API**
- React’s built-in Context lets you share state across multiple components without prop drilling.
- Useful for global state like themes, user authentication, or settings.
**3. State Management Libraries**
Libraries like Redux, Zustand, or Recoil allow sharing and managing state across the entire app.
Useful for large applications with complex state requirements.


## 5. How is event handling done in React?
### => React handles events using **camelCase attributes** and **functions as handlers**. Event objects are wrapped in **SyntheticEvent** for cross-browser consistency.
