import logo from "./logo.svg";
import Login from "./components/login/login";
import Maker from "./components/maker/maker";
import styles from "./app.module.css";
import { Switch, BrowserRouter, Route } from 'react-router-dom';

function App({ authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
          <Route path="/maker">
            <Maker />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
