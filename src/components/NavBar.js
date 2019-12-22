import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';
import CodeIcon from '@material-ui/icons/Code';
import Fab from '@material-ui/core/Fab';


const useStyles = makeStyles( theme => ({
  fullPage : {
    width: '100%',
    height: '20vh',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column'
  },
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  Buttons: {
    display: 'flex',
    justifyContent: 'space-evenly'
  }
}) )

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const classes = useStyles()

  return (
    <div className={classes.fullPage}>
        
        {!isAuthenticated && (
        <div className={classes.Buttons}>
          <Fab variant="extended" color="secondary" onClick={() => loginWithRedirect({})} aria-label="add" className={classes.margin}>
          <AccountCircleIcon className={classes.extendedIcon} />
            LOG IN
          </Fab>
        </div>
        )}
        


        {isAuthenticated && (
        <div className={classes.Buttons}>
          <Link to="/">
          <Fab variant="extended" color="secondary" aria-label="add" className={classes.margin}>
          <CodeIcon className={classes.extendedIcon} />
            SOURCE
          </Fab>
          </Link>

          <Link to="/profile">
          <Fab variant="extended" color="secondary" aria-label="add" className={classes.margin}>
          <PersonIcon className={classes.extendedIcon} />
            PROFILE
          </Fab>
          </Link>

          {/*<Link to="/external-api">External API</Link>*/}
          <Fab variant="extended" color="secondary" onClick={() => logout()} aria-label="add" className={classes.margin}>
          <ExitToAppIcon className={classes.extendedIcon} />
            LOG OUT
          </Fab>

        </div>
        )}

    </div>
  );
};

export default NavBar;