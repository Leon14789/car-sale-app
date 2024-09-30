import { Http } from "../../config/Http"
import { changeLoading } from "./loading.action"
import { changeNotify } from "./notify.action"

export const actionTypes = {
    CHANGE: 'AUTH_CHANGE',
    SUCCESS: 'AUTH_SUCCESS'
}

export const chage = (payload) => ({
  type: actionTypes.CHANGE,
  payload
})


export const success = (payload) => ({
  type: actionTypes.SUCCESS,
  payload
})

export const setUserToken = token => dispatch => {
    localStorage.setItem('access_token', token);

    dispatch( change({
        email: '',
        password: '',
    }) )

    dispatch( success(true) );
} 


export const login = crendentials => dispatch => {

dispatch(changeLoading({
    open: true,
    msg: "Autenticando Usuario..."
}))

    return Http.POST('/oauth/authorize', {
        grant_type: 'password',
        client_id: '1',
        client_secret: '79i0WceZC952KqL8mCJU93OQzIBodpcR82dZOJJ8',
        username: crendentials.email,
        password: crendentials.password

    }).then(res => {
        dispatch(changeLoading({ open: false }))

        if (typeof res !== 'undefined') {
            if (res.data.access_token) {
                dispatch(setUserToken(res.data.access_token))
            }
        }
    }).catch(error =>{
        dispatch(changeLoading({ open: false }))

        if (typeof error.response !== 'undefined') {
            if (error.response.status === 401 || error.response.status === 400 ) {
                dispatch( changeNotify({
                    open: true,
                    class: 'error',
                    msg: "Email ou Senha Invalidos"
                }) )
            }   
        } else {
            dispatch( changeNotify({
                open: true,
                class: 'error',
                msg: "Erro ao se conectar com o servidor, entre em contato com o suporte."
            }) )
        }
    })

}