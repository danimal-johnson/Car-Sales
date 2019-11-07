import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";  // New
import { Provider } from "react-redux"; // New
import "./index.css";

// 2. Create a Mock Reducer
//    A reducer is a function that returns an object (simplest form)
//    Returned object represents the state tree
function reducer() {
  return {
    title: "Hello world! I'm in the Redux store!"
  };
}

// 1. Create the store.
const store = createStore(reducer); // Takes in a reducer

// 3. Wrap App in a provider
ReactDOM.render(
  <Provider store={store}>  {/* The 2nd 'store' is the one we created in #1 */}
    <App />
  </Provider>,
  document.getElementById("root")
);

//===================================================
// CONNECT
// import { connect } from "react-redux";

// The actual component
const MovieList = props => {
  // ...
}

// mapStatetoProps tells connect which pieces of state
// to pass to the component.
// Takes state as an argument, returns an object.
// The properties in the returned object are what get
// passed to the component as props.
const mapStateToProps = state => {
  return {
    movies: state.movies,
    moviesToWatch: state.moviesToWatch,
    user: state.user
  };
}


export default connect(null, {})(MovieList);