import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import YouTubeCard from './youTube';
import CursiveHeading from '../cursiveHeading';

const useStyles = makeStyles((theme) => ({
  list: {
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
    <div>
      <CursiveHeading content={title} showDivider />
      <div className={classes.list}>
        {youTubeIds.map((youTubeId) => (
          <YouTubeCard youTubeId={youTubeId} className={classes.card} />
        ))}
      </div>
    </div>
  );
}
