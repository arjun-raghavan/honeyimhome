import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#E5B299',
      light: '#FCDEC0',
      dark:'#B4846C',
      contrastText: '#fff',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    text: {
        primary: '#E3D0B9',
    }
  },
});

export default theme;