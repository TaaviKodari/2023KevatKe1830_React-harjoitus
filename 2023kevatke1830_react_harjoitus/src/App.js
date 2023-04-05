import React from "react";
import {Message} from "./pages/Message";
import{Buttons} from "./pages/Buttons";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import { Router } from "./pages/Router";
import { Counters } from "./pages/Counters";
import { Items } from "./pages/Items";
import { List } from "./pages/List";
import { TicTacToe } from "./TicTacToe/TicTacToe";

function App() {
  return (
    <BrowserRouter>
      <div >
        <Routes>
          <Route path='/' element={<Router/>}>
              <Route index element={<Message/>}/>
              <Route path="Buttons" element={<Buttons/>}/>
              <Route path="Counters" element={<Counters/>}/>
              <Route path="Items" element={<Items/>}/>
              <Route path="List" element={<List/>}/>
              <Route path="TicTacToe" element={<TicTacToe/>}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
