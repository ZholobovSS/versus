import {Switch, Route} from 'react-router-dom';
import styles from "./main.module.css";
import Activtournament from './Activ/Activtournament';

const Main = () => {
  return (
    <div className={styles.main}>
      <h1>Main page</h1>
      <Switch>
        <Route>
          <Activtournament />
        </Route>
        <Route>
          <Activtournament />
        </Route>
        <Route>
          <Activtournament />
        </Route>
      </Switch>
    </div>
    );
};

export default Main;
