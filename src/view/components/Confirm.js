import React from 'react'
import { Dialog, DialogActions, DialogTitle, Button } from '@mui/material'

export default function Confirm(props) {
    const {open, title, onClose, onConfirm} = props;



  return (


    <Dialog
        open={open}
        onClose={() => onClose()}
    >
        <DialogTitle disableTypogragraphy><h6>{title || "Tem certeza?"}</h6></DialogTitle>
        <DialogActions className='d-flex justify-contem-center mb-2'>
            <Button onClick={() => onClose()}>Não</Button>
            <Button onClick={() => {onClose(); onConfirm();}} variant="contained" color="info" >Sim</Button>

        </DialogActions>
    </Dialog>
  )
}
