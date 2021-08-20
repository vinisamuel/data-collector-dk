import React from 'react';

import { ArrowBack, Done } from '@material-ui/icons';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';

const CollectWarehouse: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Coleta do Embarque</h1>

      <div className={classes.formContainer}>
        <form
          className={classes.root}
          noValidate
          autoComplete='off'
          title='COLETA DO EMBARQUE'
        >
          <div className={classes.content}>
            <TextField
              id='outlined-error-helper-text'
              label='Depósito'
              placeholder='DEP'
              variant='outlined'
            />
            <br />
            <TextField
              id='outlined-error-helper-text'
              label='Localização'
              placeholder='LOC-123'
              variant='outlined'
            />
          </div>
        </form>
      </div>

      <div className={classes.groupButton}>
        <Link to='/collect-shipment'>
          <ArrowBack color='action' />
        </Link>
        <Link to='/' style={{ color: '#0D7A3E' }}>
          <Done />
        </Link>
      </div>
    </div>
  );
};

export default CollectWarehouse;
