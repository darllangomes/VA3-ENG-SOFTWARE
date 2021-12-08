import { BrowserRouter, Route } from "react-router-dom";
import { Renda } from "./Pages/Renda";
import { Despesa } from "./Pages/Despesa";
import {Metas} from "./Pages/Metas"
import { Home } from "../src/Pages/Home";
import { createContext, useState } from "react";
import {Dashboard} from "./Pages/Dashboard";

const testContext = createContext({});

function App() {
  const [value, setValue] = useState("");
  return (
    <div>
      <BrowserRouter>
        <testContext.Provider value={{ value, setValue }}>
          <Route path="/" exact component={Home}>
            <Home />
          </Route>
          <Route path="/renda" component={Renda}>
            <Renda />
          </Route>
          <Route path="/despesa" component={Despesa}>
            <Despesa />
          </Route>
          <Route path="/metas" component={Metas}>
            <Metas />
          </Route>
          <Route path="/dashboard" component={Dashboard}>
            <Dashboard />
          </Route>
        </testContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
