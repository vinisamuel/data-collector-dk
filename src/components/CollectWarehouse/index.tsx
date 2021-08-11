import React from 'react';

import { ArrowBack, Done } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import {
  Container,
  Content,
  FormContainer,
  Title,
  GroupButton,
} from './styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const CollectWarehouse: React.FC = () => {
  const classes = useStyles();

  return (
    <Container>
      <Title>Coleta do Embarque</Title>

      <FormContainer>
        <form
          className={classes.root}
          noValidate
          autoComplete='off'
          title='COLETA DO EMBARQUE'
        >
          <Content>
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
          </Content>
        </form>
      </FormContainer>

      <GroupButton>
        <Link to='/collect-shipment'>
          <ArrowBack color='action' />
        </Link>
        <Link to='/' style={{ color: '#0D7A3E' }}>
          <Done />
        </Link>
      </GroupButton>
    </Container>
  );
};

export default CollectWarehouse;
