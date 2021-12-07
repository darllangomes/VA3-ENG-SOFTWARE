import { BrowserRouter, Route } from "react-router-dom";
import { Renda } from "./Pages/Renda";
import { Despesa } from "./Pages/Despesa";
import { Home } from "../src/Pages/Home";
import { createContext, useState } from "react";

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
        </testContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
