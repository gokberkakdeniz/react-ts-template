import { Route, Switch } from "react-router-dom";

import Counter from "./pages/Counter";
import Home from "./pages/Home";

const App = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/counter">
        <Counter />
      </Route>
    </Switch>
  );
};

export default App;
