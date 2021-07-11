import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import YouTubeCard from './youTube';
import CursiveHeading from '../cursiveHeading';

const useStyles = makeStyles((theme) => ({
  list: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    [theme.breakpoints.up('lg')]: {
      flexDirection: 'column',
    },
  },
  card: {
    width: '49%',
    [theme.breakpoints.up('lg')]: {
      width: '100%',
      marginBottom: theme.spacing(1),
    },
  },
}));

export default function MediaCardList(props) {
  const classes = useStyles();
  const {
    data: { youTubeIds, title },
  } = props;

  return (
    <Box display='flex' flexDirection='column' alignItems='center'>
      <CursiveHeading content={title} showDivider />
      <Box className={classes.list}>
        {youTubeIds.map((youTubeId) => (
          <YouTubeCard youTubeId={youTubeId} className={classes.card} />
        ))}
      </Box>
    </Box>
  );
}
