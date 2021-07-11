import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import YouTube from './youTube';
import CursiveHeading from '../cursiveHeading';
import { Button } from '@material-ui/core';
import { Fragment } from 'react';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    [theme.breakpoints.up('lg')]: {
      flexDirection: 'column',
    },
  },
  content: {},
  video: {
    [theme.breakpoints.up('sm')]: {
      width: '60%',
      marginBottom: theme.spacing(1),
    },
  },
}));

const MobileView = (props) => {
  const { youTubeId, title, subTitle, description } = props;
  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
    >
      <CursiveHeading content={title} showDivider />
      <YouTube youTubeId={youTubeId} />
      <Box
        bgcolor='background.secondary'
        color='textPrimary'
        textAlign='left'
        width='100%'
      >
        <Typography gutterBottom>{subTitle}</Typography>
        <Typography gutterBottom>{description}</Typography>
      </Box>
    </Box>
  );
};

const DesktopView = (props) => {
  const { title, subTitle, description, buttonTitle, buttonLink, youTubeId } =
    props;

  return (
    <Box display='flex'>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        width='50%'
        padding={2}
        bgcolor='background.secondary'
        textAlign='center'
      >
        <CursiveHeading content={title} variant={'h3'} />
        <Typography color='textSecondary' gutterBottom>
          {subTitle}
        </Typography>
        <Typography color='textSecondary' gutterBottom>
          {description}
        </Typography>
        <Button variant='contained' color='primary'>
          {buttonTitle}
        </Button>
      </Box>
      <YouTube youTubeId={youTubeId} width='50%' />
    </Box>
  );
};

export default function YouTubeCard(props) {
  const { data } = props;
  return (
    <Fragment>
      <Box display={{ xs: 'block', sm: 'none' }} mb={2}>
        <MobileView {...data} />
      </Box>
      <Box display={{ xs: 'none', sm: 'block' }} mb={4}>
        <DesktopView {...data} />
      </Box>
    </Fragment>
  );
}
