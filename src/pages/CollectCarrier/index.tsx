import React from 'react';
import { ArrowBack, Done } from '@material-ui/icons';
import TextField from '@material-ui/core/TextField';
import MuiAlert from '@material-ui/lab/Alert';
import { Link, useHistory } from 'react-router-dom';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
} from '@material-ui/core';
import { useStyles } from './styles';

const CollectCarrier: React.FC = () => {
  const classes = useStyles();

  const history = useHistory();

  const [messageError, setMessageError] = React.useState('');
  const [openError, setOpenError] = React.useState(false);
  const [carrier, setCarrier] = React.useState(0);
  const [plate, setPlate] = React.useState('');
  const [driver, setDriver] = React.useState('');

  const handleCarrierChange = (
    event: React.ChangeEvent<{ value: unknown }>,
  ) => {
    setCarrier(event.target.value as number);

    console.log('Transp:', event.target.value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.id === 'plate') {
      setPlate(event.target.value);
      if (plate.toUpperCase() !== 'ABC1234') {
        setMessageError('Placa inválida');
      }
    } else if (event.target.id === 'driver') {
      setDriver(event.target.value);
      if (driver === '') {
        setMessageError('Motorista inválido');
      }
    }
  };

  const handleSubmit = React.useCallback(
    (event: React.SyntheticEvent) => {
      if (carrier < 1 || carrier > 3) {
        setMessageError('Transportadora inválida');
      } else if (plate.toUpperCase() !== 'ABC1234') {
        setMessageError('Placa inválida');
      } else if (driver === '') {
        setMessageError('Motorista inválido');
      }

      console.log('carrier', carrier);
      console.log('plate', plate);
      console.log('driver', driver);
      console.log('messageError', messageError);

      if (messageError === '') {
        history.push('collect-shipment');
      } else {
        setOpenError(true);
      }
    },
    [carrier, driver, plate, history, messageError],
  );

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenError(false);
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Dados de Transporte</h1>

      <div className={classes.formContainer}>
        <form
          className={classes.root}
          noValidate
          autoComplete='off'
          title='Dados de Transporte'
        >
          <div className={classes.content}>
            <FormControl variant='outlined' className={classes.formControl}>
              <InputLabel id='carrier-select-label'>Transportadora</InputLabel>
              <Select
                labelId='carrier-select-label'
                id='carrier-select'
                value={carrier}
                label='Transportadora'
                onChange={handleCarrierChange}
              >
                <MenuItem value=''>
                  <em>Nenhum</em>
                </MenuItem>
                <MenuItem value={1}>Transp. 01</MenuItem>
                <MenuItem value={2}>Transp. 02</MenuItem>
                <MenuItem value={3}>Transp. 03</MenuItem>
              </Select>
            </FormControl>
            <br />
            <TextField
              id='plate'
              label='Placa'
              value={plate}
              placeholder='ABC 1234'
              onChange={handleChange}
              variant='outlined'
            />
            <br />
            <TextField
              id='driver'
              label='Motorista'
              value={driver}
              placeholder='João da Silva'
              onChange={handleChange}
              variant='outlined'
            />
            <br />
          </div>
        </form>
      </div>

      <div className={classes.groupButton}>
        <Button
          variant='contained'
          color='secondary'
          onClick={() => history.goBack()}
        >
          Voltar
        </Button>
        <Button variant='contained' color='primary' onClick={handleSubmit}>
          Próximo
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
            {messageError}
          </MuiAlert>
        </Snackbar>
      </div>
    </div>
  );
};

export default CollectCarrier;
