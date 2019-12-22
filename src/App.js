import React from "react";
import NavBar from "./components/NavBar";

// New - import the React Router components, and the Profile page component
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
{/*import ExternalApi from "./views/ExternalApi";*/}

const useStyles = makeStyles( theme => ({
  center : {
    width : '98vw',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
}) )


function App() {
  const classes = useStyles()
  return (
    <div className="App">
      {/* Don't forget to include the history module */}
      <Router history={history}>
        <header>
          <NavBar />
        </header>
        <Switch>
          <div className={classes.center}>
          <Route path="/" exact />
          <PrivateRoute path="/profile" component={Profile} />
          {/*<PrivateRoute path="/external-api" component={ExternalApi} />*/}
          <div>
            <Typography className={classes.root} styles={{padding: '20px', color: '#fff'}}>Created by: Cdbz, source: <a href='https://github.com/cdbolivarz/Auth0React' target="_blank">Click here.</a></Typography>
          </div>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;