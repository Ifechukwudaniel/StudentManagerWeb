import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';

export default {
  black,
  white,
  primary: {
    contrastText: white,
    dark: "#2B9934",
    main: "#2B9934",
    light: "#2B9934"
  },
  secondary: {
    contrastText: white,
    dark: colors.red['900'],
    main: colors.red['900'],
    light: colors.red["A400"]
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400]
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400]
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400]
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400]
  },
  text: {
    primary: colors.blueGrey[900],
    secondary: colors.blueGrey[600],
    link: colors.blue[600]
  },
  background: {
    default: '##f5f5f5',
    paper: white,
    tab:"#f4f6f4"
  },
  icon: colors.blueGrey[600],
  divider: colors.grey[200]
};
