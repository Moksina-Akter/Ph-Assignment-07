
## 1. What is JSX, and why is it used?
### => **JSX** (JavaScript XML) is a syntax extension for JavaScript used mainly in React. It allows developers to write UI structure in a way that looks like HTML but works inside JavaScript. It is used because it makes code more readable, easier to write, and combines the power of JavaScript with the clarity of HTML when building user interfaces.


## 2. What is the difference between State and Props?
### => State : A component’s own data, managed internally. It can change over time (mutable) using hooks like useState, and re-renders the component when updated. Used for things like user input, counters, or toggles. Props: External data passed from a parent component to a child. They are immutable (read-only) and make components reusable by allowing dynamic values. Controlled by the parent, not the child.


## 3. What is the useState hook, and how does it work?
### => useState is a React Hook that lets functional components manage state (data that changes over time). It provides a state variable and a function to update it. When the update function is called, React re-renders the component with the new state value. Syntax: const [value, setValue] = useState(initialValue). It is used for dynamic UI data like counters, form inputs, or toggles.

## 4. How can you share state between components in React?
### => Sharing State Between Components in React:
* **Lift State Up**: Move the shared state to the nearest common parent and pass it down as props to child components.
* **Context API**:React’s built-in Context allows state sharing across multiple components without prop drilling. Useful for global state like themes or user authentication.
* **State Management Libraries**:Libraries like Redux, Zustand, or Recoil manage and share state across the whole app, useful for large or complex applications.


## 5. How is event handling done in React?
### => React handles events using **camelCase attributes** and **functions as handlers**. Event objects are wrapped in **SyntheticEvent** for cross-browser consistency.
