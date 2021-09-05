import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  cardWrapper: {
    position: 'relative',
    paddingBottom: '56.25%' /* 16:9 */,
    paddingTop: 25,
    height: 0,
    width: '100%',
  },
  card: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
}));

export default function YouTube(props) {
  const classes = useStyles();
  const { youTubeId, className = '' } = props;

  return (
    <Box className={`${classes.cardWrapper} ${className}`}>
      <CardMedia
        className={classes.card}
        component='iframe'
        src={`https://www.youtube.com/embed/${youTubeId}`}
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />
      sadasdsa
    </Box>
  );
}
