import {
  Card, CardActions, CardContent, CardMedia, Container, Grid, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { Button } from 'react-bootstrap';

const useStyles = makeStyles({
  cardMedia: {
    paddingTop: '56.25%',
  },
  cardContent: {
    flexGrow: 1,

  },
  cardGrid: {
    marginTop: 24,
  },
});

type Props = {
  movies: Movie[]
};

export const MoviesList: React.FC<Props> = ({ movies }) => {
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="lg">
      <Grid container spacing={4}>
        {movies.map(movie => (
          <Grid item key={movie.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/random"
                title={movie.title}
              />
              <CardContent className={classes.cardContent}>
                <Typography variant="h5" gutterBottom>
                  {movie.title}
                </Typography>
                <Typography>
                  {movie.categories.map((categorie: Categorie) => (
                    <span key={categorie.id}>{categorie.name}</span>
                  ))}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="sm">
                  {`Buy ${movie.buyRate}`}
                </Button>
                <Button size="sm">
                  {`Rental ${movie.rentalRate}`}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
