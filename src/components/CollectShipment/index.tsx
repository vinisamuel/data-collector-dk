import React, { useState } from 'react';

import { Button, Snackbar } from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import { Link } from 'react-router-dom';
import { Container, Content, FormContainer, Title } from './styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const CollectShipment: React.FC = () => {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [open, setOpen] = React.useState(false);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

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
              label='Número do Embarque'
              placeholder='123456'
              variant='outlined'
            />
            <br />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant='inline'
                format='MM/dd/yyyy'
                margin='normal'
                id='date-picker-inline'
                label='Data da Coleta'
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
          </Content>
        </form>
      </FormContainer>

      <Button variant='contained' color='primary'>
        <Link to='/collect-warehouse'>Confirmar</Link>
      </Button>
      <br />
      <Button variant='contained' color='secondary' onClick={handleClick}>
        Mostrar Erro
      </Button>
      <Snackbar
        open={open}
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
          Embarque inválido!
        </MuiAlert>
      </Snackbar>
    </Container>
  );
};

export default CollectShipment;
