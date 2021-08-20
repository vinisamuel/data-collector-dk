import React, { useState } from 'react';

import { Button, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

import TextField from '@material-ui/core/TextField';

import { useHistory } from 'react-router-dom';
import { useStyles } from './styles';

const Login: React.FC = () => {
  const classes = useStyles();

  const history = useHistory();

  const [openError, setOpenError] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.SyntheticEvent) => {
    if (username !== 'admin' || password !== 'admin') {
      setOpenError(true);
    } else {
      history.push('collect-shipment');
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.id === 'username') {
      setUsername(event.target.value);
    } else if (event.target.id === 'password') {
      setPassword(event.target.value);
    }
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenError(false);
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Faça seu login!</h1>

      <div className={classes.formContainer}>
        <form className={classes.root} autoComplete='off'>
          <div className={classes.content}>
            <TextField
              id='username'
              label='Usuário'
              variant='outlined'
              size='small'
              required
              onChange={handleChange}
            />
            <br />
            <TextField
              id='password'
              label='Senha'
              type='password'
              variant='outlined'
              size='small'
              required
              onChange={handleChange}
            />
          </div>
        </form>
      </div>

      <Button
        variant='contained'
        color='primary'
        style={{ background: '#15a028' }}
        onClick={handleSubmit}
      >
        Entrar
      </Button>
      <Snackbar
        open={openError}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <MuiAlert
          elevation={6}
          variant='filled'
          onClose={handleClose}
          severity='error'
        >
          Credenciais inválidas
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default Login;
