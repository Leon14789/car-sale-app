import React from 'react'
import { TextField, Typography, Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { change, register } from '../../store/actions/register.action';

export default function Register() {
    const dispatch = useDispatch();
    const {user, error, success} = useSelector(state => state.registerReducer);
  return (
    <div className='d-flex bg-white min-vh-100'>
        <div className='container mt-5'>
            <div className='row d-flex justify-content-center'>
                <div className='col-md-4'>
                    <div className='form-group text-center'>
                        <Typography variant='h6' component="h1">
                                Crie sua conta, teste gratis!
                        </Typography>
                    </div>

                    <TextField 
                        error={(error.name) && true}
                        margin='normal'
                        label="Nome"
                        value={user.name}
                        onChange={ text => {
                            dispatch(change({name: text.target.value}));
                            if (error.name && delete error.name);
                        }}
                    />
                    {(error.name) && 
                        <strong className='text-danger'>{error.name[0]}</strong>
                    }

                    <TextField 
                        error={(error.email) && true}
                        margin='normal'
                        label="Email"
                        type='email'
                        autoComplete='email'
                        value={user.email}
                        onChange={ text => {
                            dispatch(change({email: text.target.value}));
                            if (error.email && delete error.email);
                        }}
                    />
                    {(error.email) && 
                        <strong className='text-danger'>{error.email[0]}</strong>
                    }

                    <TextField 
                         error={(error.password) && true}
                        margin='normal'
                        label="Senha"
                        type='password'
                        value={user.password}
                        onChange={ text => {
                            dispatch(change({password: text.target.value}));
                            if (error.password && delete error.password);
                        }}
                    />
                    {(error.password) && 
                        <strong className='text-danger'>{error.password[0]}</strong>
                    }

                <Button
                    variant='contained'
                    fullWidth
                    color='success'
                    size='large'
                    className='mt-3 mb-3'
                    onClick={() => dispatch(register({user}))}
                >
                    Criar Conta
                  </Button>
                </div>
            </div>
        </div>
    </div>
  )
}
