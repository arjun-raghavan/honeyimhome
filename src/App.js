import React, { Fragment } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import {
  Switch,
  Route,
  NavLink,
  BrowserRouter as Router,
} from 'react-router-dom';
import {
  Home,
  About,
  Recipes,
  LifeStyle,
  Community,
  Tips,
  PageNotFound,
} from './pages';
import logo from './common/assets/logo.png';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  tab: {
    fontWeight: theme.typography.fontWeightBold,
    '&:active': {
      opacity: 1,
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.primary.contrastText,
    },
    '&:hover': {
      opacity: 1,
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.contrastText,
    },
  },
}));

const Logo = () => (
  <Button component={NavLink} to={'/'}>
    <img src={logo} height='50' />
  </Button>
);
export default function App() {
  const classes = useStyles();

  const allTabs = [
    '/',
    '/about',
    '/recipes',
    '/lifestyle',
    'community',
    '/tips',
  ];

  return (
    <Router>
      <div className='App'>
        <Route
          path='/'
          render={({ location }) => (
            <Fragment>
              <Box display={{ xs: 'block', sm: 'none' }} borderBottom={2}>
                <Logo />
              </Box>
              <Tabs
                value={location.pathname}
                variant='scrollable'
                borderTop={1}
                scrollButtons='auto'
                selectionFollowsFocus={true}
              >
                <Container maxWidth='lg' className={classes.container}>
                  <Box display={{ xs: 'none', sm: 'block' }}>
                    <Logo />
                  </Box>
                  <Box display='flex' alignItems='flex-end'>
                    <Tab
                      label='KNOW ME'
                      value='/about'
                      component={NavLink}
                      to={allTabs[1]}
                      {...a11yProps(0)}
                      className={classes.tab}
                    />
                    <Tab
                      label='RECIPES'
                      value='/recipes'
                      component={NavLink}
                      to={allTabs[2]}
                      {...a11yProps(1)}
                      className={classes.tab}
                    />
                    <Tab
                      label='LIFESTYLE/TRAVEL'
                      value='/lifestyle'
                      component={NavLink}
                      to={allTabs[3]}
                      {...a11yProps(2)}
                      className={classes.tab}
                    />
                    <Tab
                      label='COMMUNITY'
                      value='/community'
                      component={NavLink}
                      to={allTabs[4]}
                      {...a11yProps(3)}
                      className={classes.tab}
                    />
                    <Tab
                      label='TRICKS & TIPS'
                      value='/tips'
                      component={NavLink}
                      to={allTabs[5]}
                      {...a11yProps(4)}
                      className={classes.tab}
                    />
                  </Box>
                </Container>
              </Tabs>
              <Switch>
                <Route exact path={allTabs[1]}>
                  <About />
                </Route>
                <Route exact path={allTabs[2]}>
                  <Recipes />
                </Route>
                <Route exact path={allTabs[3]}>
                  <LifeStyle />
                </Route>
                <Route exact path={allTabs[4]}>
                  <Community />
                </Route>
                <Route exact path={allTabs[5]}>
                  <Tips />
                </Route>
                <Route exact path={allTabs[0]}>
                  <Home />
                </Route>
                <Route>
                  <PageNotFound />
                </Route>
              </Switch>
            </Fragment>
          )}
        />
      </div>
    </Router>
  );
}
