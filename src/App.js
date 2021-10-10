import React from "react";

import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import { UserDataForm } from "./components/UserDataForm";
import PhoneBookList from "./components/PhoneBookList";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserDataForm />
        <PhoneBookList />
      </div>
    </Provider>
  );
}

export default App;
