import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InitializeRepo from "./Pages/InitializeRepo";
import Branch from "./Pages/Branch";
import SetRemoteOrigin from "./Pages/SetRemoteOrigin";
import Clone from "./Pages/Clone";
import SSHKey from "./Pages/SSHKey";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
         
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
