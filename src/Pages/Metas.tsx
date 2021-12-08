import { InputAdornment, TextField, Typography } from '@material-ui/core';
import  { ChangeEvent, useState, useEffect } from 'react';
import "../styles/Metas.scss";
import axios from 'axios';
import {Button} from '../Components/Button';
import { useHistory } from "react-router-dom";




export function Metas(){

 

    const [meta, setMeta] = useState('');
    const [renda, setRenda] = useState({
        id: "",
        value: "",
    });
    const history = useHistory();

    useEffect(
        () => {
            axios.get('http://localhost:3004/renda')
                .then((response) => {
                   setRenda(response.data)
                })
        }
    , []);


    const submitMeta = () => {
        const res =  axios.post('http://localhost:3004/meta/1', {"porcentagem": parseInt(meta)})
        console.log(res)
    }

    const onClickBackButton = () =>{
        history.push('/');
    }    

    const onChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
        let leftTrimmedValue = event.target.value.trimLeft();
        let newValue = leftTrimmedValue.replace(/[^-0-9]/g, '');
        setMeta(newValue);
      }
      console.log(renda.value);

    return(
        <div className={"Container"}>
            <div className={"titulo"}>
                <Typography variant="h3">
                    Defina uma meta de gastos mensal
                </Typography>
                <Typography variant ='h5'>
                    Ao exceder o limite de gastos percentual em relação à sua renda, alertaremos no seu Dashboard.
                </Typography>
                <div className={"body"}>
                    <Typography variant="h5">Sua renda mensal atual é</Typography>
                    <TextField 
                     InputProps={{
                        startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                      }}
                    size="medium" margin = 'dense' value={renda.value} 
                    />

                    <form>
                        <Typography variant="h5">Limite de gasto de você deseja configurar</Typography>
                        <TextField 
                        InputProps={{
                            startAdornment: <InputAdornment position="end">%</InputAdornment>,
                        }}
                        size="medium" margin = 'dense' value={meta}
                        onChange={onChangeEvent}
                        />
                    </form>
                    <div className={'footer'}> <Button onClick={submitMeta}>Enviar dados</Button>
                    <Button onClick={onClickBackButton}>Voltar</Button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}