import {
  Button,
  Container, Grid, Paper, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 1560,
  },
  menuButton: {
    marginRight: 8,
  },
  title: {
    flexGrow: 1,
  },
  mainFeaturePost: {
    position: 'relative',
    color: 'white',
    marginBottom: 24,

    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  mainFeaturePostContent: {
    position: 'relative',
    padding: 90,
  },
});

export const Intro: React.FC = () => {
  const classes = useStyles();

  return (
    <main>
      <Paper className={classes.mainFeaturePost} style={{ backgroundImage: 'url(https://source.unsplash.com/random)' }}>
        <Container fixed className={classes.root}>
          <div className={classes.overlay} />
          <Grid container>
            <Grid item md={6}>
              <div className={classes.mainFeaturePostContent}>
                <Typography
                  component="h1"
                  variant="h3"
                  color="inherit"
                  gutterBottom
                >
                  Cinema Shop
                </Typography>
                <Typography
                  component="h5"
                  color="inherit"
                  gutterBottom
                >
                  Lorem ipsum dolor sit
                  amet consectetur, adipisicing
                  elit. Ducimus ab maiores modi, quisquam
                  tempora itaque sapiente commodi minima nisi
                  quaerat culpa veniam distinctio accusantium
                  repudiandae repellendus optio maxime ut voluptates?
                </Typography>
                <Button variant="contained" color="secondary" style={{ marginTop: 24 }}>
                  Learn more
                </Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </main>
  );
};
