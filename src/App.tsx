import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

import { Container } from './styles/App';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <Container>
      <CssBaseline />
      <Router>
        <Routes />
      </Router>
    </Container>
  );
};

export default App;
