
import Constants from '../Constants';
import { Button } from '../Components/Button';
import '../styles/despesa.css';
import { Link } from 'react-router-dom';
import { FormControl, InputAdornment, InputLabel, makeStyles, Typography, TextField } from '@material-ui/core';
import React, { ChangeEvent, useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";


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
  const history = useHistory();

  const onClickBackButton = () =>{
    history.push('/');
}    


  const onChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
    let leftTrimmedValue = event.target.value.trimLeft();
    let newValue = leftTrimmedValue.replace(/[^-0-9]/g, '');
    setValue(newValue)
    setOcorrencia("MENSAL")
  }
  const sendRenda = () =>{
    const res =  axios.post('http://localhost:3004/renda', { "id":1,"value": value})
    console.log(res)
  }
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
        <div className={'footer'}> 
                  <Button onClick={onClickBackButton}>Voltar</Button>
                </div>
    </>

  );
}