import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '300px',
    padding: '16px',
    background: '#f4f4f8',

    '& a': {
      color: '#f4f4f8',
      textDecoration: 'none',
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    display: 'flex',
    padding: '16px',
    marginBottom: '16px',
  },
  title: {
    fontSize: '24px',
  },
  groupButton: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
  },
}));
