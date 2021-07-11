import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import SocialMedia from './socialMedia';

const useStyles = makeStyles((theme) => ({
  mediaContainer: {
    marginRight: '0px',
  },
}));

export default function AppLayout(props) {
  return (
    <>
      <Box bgcolor='primary.main' display='flex' flexDirection='row-reverse'>
        <Container maxWidth='lg'>
          <SocialMedia />
        </Container>
      </Box>
      {props.children}
      <Box
        bgcolor='primary.main'
        color='primary.contrastText'
        display='flex'
        justifyContent='center'
        p={1}
      >
        @ 2021 Honey I'm Home
      </Box>
    </>
  );
}
