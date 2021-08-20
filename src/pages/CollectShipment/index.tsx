import React, { useState } from 'react';

import { Button, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';

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
          </div>
        </form>
      </div>

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
    </div>
  );
};

export default CollectShipment;
