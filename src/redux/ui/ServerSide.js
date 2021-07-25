import React, { useEffect, useState } from 'react';
import { DataGrid, GridRowParams } from '@material-ui/data-grid';
import { useSelector, useDispatch } from 'react-redux'
import { fetchDetail } from '../action/Action';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core'
import { useHistory, useLocation } from "react-router-dom";
import { makeStyles } from '@material-ui/core'


const columns = [
  { field: 'name', title: "Name", width: 1700 },
  
]
const useStyles = makeStyles((theme) => ({
  paper: {
    // width: 400,
    // height:400,
    backgroundColor: theme.palette.background.paper,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#000000ad",
    color: "white",
    width: 500,
    height: 500,
    margin: "auto",
    position: "relative"
  },
  btn:{
    backgroundColor:"white",
    fontSize:14,
    '&:hover': {
      background: "white",
   },
  }
}));

const ServerSide = () => {
  const classes = useStyles();
 

  const [modalInfo, setModalInfo] = useState([])

  const [showModal, setShowModal] = useState(false)

  // const [row, setRow] = useState()

  const [open, setShow] = useState(false)

  const handleClose = () => setShow(false)

  const handleShow = () => setShow(true)

  const history = useHistory();
  
  const mystate = useSelector((state) => state.userReducer.userinfo)
  const data = mystate
  console.log(data, "mystate here")
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchDetail())
  }, [])


  const RowClickss = (rows) => {
    console.log(rows)
    setShowModal(true)
    setModalInfo(rows)
    toogleTrueFalse()
  }
  const toogleTrueFalse = () => {
    setShowModal(handleShow())
  }

  const ModalContent = () => {
    console.log(modalInfo, 'row data')
    return (
      <Modal open={open} onClose={handleClose} className={classes.modal}>
        <div>
          <ul>
            <li>
              <p>Name: {modalInfo.row.name}</p>
            </li>
            <li>
              <p>Contact:{modalInfo.row.phone}</p>
            </li>
            <li>
              <p>Id: {modalInfo.row.id}</p>
            </li>
            <li>
              <p>UserName: {modalInfo.row.username}</p>
            </li>
            
            <Button className={classes.btn} onClick={handleClose}>Close</Button>
          </ul>
        </div>
      </Modal>
    )
  }
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={data} columns={columns} pageSize={5} onRowClick={RowClickss} />
      {open ? <ModalContent /> : null}

    </div>

  );
}
export default ServerSide;

