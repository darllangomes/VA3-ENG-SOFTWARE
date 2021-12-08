
import Constants from '../Constants';
import { Button } from '../Components/Button';
import '../styles/despesa.css';
import { FormControl, InputAdornment, makeStyles, Typography, TextField, Select, MenuItem } from '@material-ui/core';
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

interface Gasto{
    titulo: string,
    valor: string,
    categoria: string
}

export function Despesa(){
  const classes = useStyles();

  const categorias = ["Educação","Saúde","Alimentação","Veículo","Contas","Aluguel","Condominio","Cartão de crédito"];
  


  /* const [value, setValue] = useState<string>(Constants.EMPTY_STRING); */
  const [despesa, setDespesa] = useState<Gasto[]>();
  const [titulo, setTitulo] = useState<string>(Constants.EMPTY_STRING);
  const [valor, setValor] = useState<string>(Constants.EMPTY_STRING); 
  const [categoria, setCategoria] = useState<string | unknown>();  
  console.log(categoria) 

  const handleDespesaChange = (event: ChangeEvent<HTMLInputElement>) => {
    let leftTrimmedValue = event.target.value.trimLeft();
    let newValue = leftTrimmedValue.replace(/[^-0-9]/g, '');
    setValor(newValue)
  }
  const handleTituloChange = (event: ChangeEvent<HTMLInputElement>) => {
    let leftTrimmedValue = event.target.value.trimLeft();
    setTitulo(leftTrimmedValue)
  }

  const handleCategoriaChange = (event: ChangeEvent<{ name?: string | undefined; value: unknown; }>) => {
      let categoria = event.target.value;
    setCategoria(categoria);
  }
  const sendData = () =>{

  }
  
  return (
    <>
          <div className='container'>
            <Typography variant='h3'>Informe seus gastos</Typography>
        </div>
        <div className='form'>
            <form>
                <FormControl fullWidth className={classes.margin}>
                <TextField
                    value={titulo}
                    onChange={handleTituloChange}
                    placeholder="Qual o nome da despesa?"
                    />
                    <div className='gambiarra'></div>

                    <TextField
                    id="standard-adornment-amount"
                    value={valor}
                    onChange={handleDespesaChange}
                    placeholder="Qual o valor?"
                    InputProps={{
                      startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                    }}
                    />
                     <div className='gambiarra'></div>
                     <p>Categoria do gasto</p>

                            <Select
                            defaultValue={categorias}
                                value={categoria}
                                onChange={handleCategoriaChange}
                            >
                                {
                                categorias && categorias.length > 0 && categorias.map(el => (
                                    <MenuItem  key={el} value={el}>
                                        {el}
                                    </MenuItem>
                                ))
                                }
                            </Select>
                            <Button onClick={sendData}>
                                Enviar Dados
                            </Button>
                </FormControl>

            </form>
        </div>
    </>

  );
}