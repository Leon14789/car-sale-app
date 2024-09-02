import React from 'react'
import { changeAlert } from '../../store/actions/alert.action'
import { Modal, Typography } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { MdError, MdCheckCircle } from 'react-icons/md'

export default function Alert() {
  
  const Dispatch = useDispatch();
  const alert = useSelector(state => state.alertReducer);

  if (alert.open) {
    setTimeout(() => {
      Dispatch( changeAlert({open: false}) )
    }, alert.time);
  }

  return (
   <Modal
      open={alert.open}
      onClose={() => Dispatch( changeAlert({open:false}) )}
      className="d-flex flex-column align-items-center justify-content-center h-100"
   >
      <div className='bg-white rounded-lg d-flex align-items-center p-3' style={{ outline: 'none' }}>
        {(alert.class === 'success')  &&   
            <MdCheckCircle style={{fontSize: '2.5rem'}} className=" text-success"/>

        }   {(alert.class === 'error')  &&   
          <MdError style={{fontSize: '2.5rem'}} className=" text-danger "/>

      }
            <Typography style={{marginLeft: '0.5rem'}} variant='subtitle2' >{alert.msg} </Typography>
      </div>
    </Modal>
  )
}
