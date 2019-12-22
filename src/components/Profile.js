// src/components/Profile.js

import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 400,
  },
  center : {
    width : '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  }
});

const Profile = () => {
  const classes = useStyles();
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <div className={classes.center}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={user.picture}
            title="Img profile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {user.name}
            </Typography>
            <Typography gutterBottom variant="subtitle" component="subtitle">
            {user.email}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {JSON.stringify(user, null, 2)}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </div>
  );
};

export default Profile;