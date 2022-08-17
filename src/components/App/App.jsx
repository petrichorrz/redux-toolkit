import React from "react";
import { Provider as ReduxProvider } from 'react-redux'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from '../../store'

import Todo from "../../pages/Todo";
import RootLayout from "./RootLayout";
import Page404 from "../../pages/Error/404";

const App = () => {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route path="/" element={<Todo />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ReduxProvider>

  );
};

export default App;
