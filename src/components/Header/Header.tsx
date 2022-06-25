import {
  AppBar, Box, Button, Container, Toolbar, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import Search from './SearchBar';

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
});

export const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" style={{ backgroundColor: '#262626', boxShadow: 'none' }}>
      <Container fixed className={classes.root}>
        <Toolbar>

          <Typography className={classes.title} variant="h6">CinemaShop</Typography>
          <Box mr={3}>
            <Search />
          </Box>
          <Box mr={3}>
            <Button color="inherit" variant="outlined">Log in</Button>
          </Box>
          <Button color="secondary" variant="outlined">Sign up</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
