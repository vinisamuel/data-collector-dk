import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

import { useStyles } from './styles/App';

import Routes from './routes';

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <CssBaseline />
      <Router>
        <Routes />
      </Router>
    </div>
  );
};

export default App;
