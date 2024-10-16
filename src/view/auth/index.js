import React from 'react'
import { Typography, TextField, Button   } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { change, login } from '../../store/actions/auth.action';
import '../../global.css'; 
import { Navigate  } from 'react-router-dom';

export default function Auth() {

  const dispatch = useDispatch();
  const { crendentials, success } = useSelector( state => state.authReducer );
  return (
    <div className='d-flex bg-white min-vh-100'>
        <div className='container mt-5'>
            <div className='row justify-content-center'>
              <div className='col-md-4'>
                  <div className='form-group text-center'>
                      <Typography variant='h6' component="h1">Plataforma para Revenda de Veiculos</Typography>
                  </div>

                  <TextField
                     
                   margin='normal'
                    label="Email"
                    type='email'
                    autoComplete='email'
                    value={crendentials.email}
                    onChange={text => dispatch(change({email: text.target.value}))}

                  /> 

                    <TextField
                   margin='normal'
                    label="Senha"
                    type='password'
                    value={crendentials.password}
                    onChange={text => dispatch(change({password: text.target.value}))}

                  /> 

                  <Button
                    variant='contained'
                    fullWidth
                    color='success'
                    size='large'
                    className='mt-3 mb-3'
                    onClick={() => dispatch(login( crendentials ))}
                  >
                    Conectar
                  </Button>

                  {(success) &&
                        <Navigate  to="vehicles" />
                  }
              </div>
            </div>
        </div>
    </div>
  )
}
