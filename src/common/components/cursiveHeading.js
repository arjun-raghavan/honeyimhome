import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import { Fragment } from 'react';

const useStyles = makeStyles((theme) => ({
  mediaContainer: {
    marginRight: '0px',
    fontFamily: 'Italianno',
    fontStyle: 'italic',
    fontWeight: theme.typography.fontWeightBold,
  },
  divider: {
    marginBottom: '16px',
    width: '60%',
    height: '1px',
  },
}));

export default function CursiveHeading(props) {
  const classes = useStyles();
  const { content, variant, component, showDivider } = props;
  return (
    <Fragment>
      <Typography
        variant={variant || 'h6'}
        component={component || 'h2'}
        gutterBottom
        className={classes.mediaContainer}
      >
        {content}
      </Typography>
      {showDivider && (
        <Divider
          variant='middle'
          orientation='horizontal'
          className={classes.divider}
        />
      )}
    </Fragment>
  );
}
