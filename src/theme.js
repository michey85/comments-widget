import { createTheme } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: 'hsl(238, 40%, 52%)',
      light: 'hsl(239, 57%, 85%)',
    },
    secondary: {
      main: 'hsl(358, 79%, 66%)',
      light: 'hsl(357, 100%, 86%)',
    },
    grey: {
      50: 'hsl(0, 0%, 100%)',
      100: 'hsl(228, 33%, 97%)',
      200: 'hsl(223, 19%, 93%)',
      500: 'hsl(211, 10%, 45%)',
      700: 'hsl(212, 24%, 26%)',
    },
    background: {
      paper: 'hsl(0, 0%, 100%)',
      default: 'hsl(223, 19%, 93%)',
    }
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Rubik',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontSize: 14,
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    button: {
      fontWeight: 400,
    },
  },
});

theme = createTheme(theme, {
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
      variants: [{
        props: {variant: 'contained'},
        style: {
          '&:hover': {
            backgroundColor: theme.palette.primary.light,
          }
        }
      }]
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          // background: 'black',
          '& *:hover': {
            cursor: 'pointer',
          },
        }
      }
    }
  }
})

export {theme};