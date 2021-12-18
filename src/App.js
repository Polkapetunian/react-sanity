import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllPosts from "./components/AllPosts.js";
import OnePost from "./components/OnePost.js";


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route element={<AllPosts />} path="/" />
          <Route element={<OnePost />} path=":slug" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
