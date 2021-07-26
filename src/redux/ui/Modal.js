import React from 'react';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#29853ad1",
    color: "white",
    width: 400,
    height: 400,
    margin: "auto",
  },
  btn:{
    backgroundColor:"white",
    fontSize:14,
    '&:hover': {
      background: "white",
   },
   detaiOfUser:{
     fontSize:"18px"
   },
   
  }
}));

const ModalComponent=({open, modalInfo,setShow})=>{
  const classes = useStyles(); 
  const handleClose = () => setShow(false)
  const ModalContent = () => {
    return (
      <Modal open={open} onClose={handleClose} className={classes.modal}>
        <div>         
              <p className={classes.detaiOfUser}>
                <b>Id:</b> {modalInfo.row.id}
              </p>      
              <p className={classes.detaiOfUser}>
                <b>Name:</b> {modalInfo.row.name}
              </p>     
              <p className={classes.detaiOfUser}>
                <b>UserName:</b> {modalInfo.row.username}
              </p>       
              <p className={classes.detaiOfUser}>
                <b>Contact:</b>{modalInfo.row.phone}
              </p>            
              <p className={classes.detaiOfUser}>
                <b>Works at:</b> {modalInfo.row.company.name}
              </p>         
              <p className={classes.detaiOfUser}
              ><b>Address:</b> {modalInfo.row.address.street} {modalInfo.row.address.suite} {modalInfo.row.address.city}
              </p>                  
            <Button className={classes.btn} onClick={handleClose}>Close</Button>        
        </div>
      </Modal>
    )
  }
  return (
   <div>
       {open ? <ModalContent /> : null}
   </div>
  )
}
export default ModalComponent;