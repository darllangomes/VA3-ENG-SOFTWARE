
import Constants from '../Constants';
import { Button } from '../Components/Button';
import '../styles/despesa.scss';
import { Link } from 'react-router-dom';
import { FormControl, InputAdornment, InputLabel, makeStyles, Typography, TextField } from '@material-ui/core';
import React, { ChangeEvent, useState } from 'react';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
}));

export function Renda(){
  const classes = useStyles();

  const [value, setValue] = useState<string>(Constants.EMPTY_STRING);
  const [ocorrencia, setOcorrencia] = useState('');


  const onChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
    let leftTrimmedValue = event.target.value.trimLeft();
    let newValue = leftTrimmedValue.replace(/[^-0-9]/g, '');
    setValue(newValue)
    setOcorrencia("MENSAL")
  }
  const sendRenda = () =>{
    
  }
  console.log(value)
  console.log(ocorrencia)
  return (
    <>
          <div className='container'>
            <Typography variant='h3'>Informe sua renda mensal</Typography>
        </div>
        <div className='form'>
            <form>
                <FormControl fullWidth className={classes.margin}>
                    <TextField
                    id="standard-adornment-amount"
                    value={value}
                    onChange={onChangeEvent}
                    InputProps={{
                      startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                    }}
                    />
                    <Button onClick={sendRenda}>Enviar</Button>
                </FormControl>

            </form>
        </div>
    </>

  );
}