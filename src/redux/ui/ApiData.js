import React, { useEffect, useState } from 'react';
import { DataGrid} from '@material-ui/data-grid';
import { useSelector, useDispatch } from 'react-redux'
import { fetchDetail } from '../action/Action';
import { makeStyles } from '@material-ui/core';
import ModalComponent from './Modal';

const columns = [
  { field: 'id', title: "ID", width: 400 },
  { field: 'name', title: "Name", width: 400 },
  { field: 'email', title: "Email", width: 400 },
  { field: 'phone', title: "Phone", width: 400 },
]
const useStyles = makeStyles((theme) => ({
  fontData: {
    fontSize: "18px",
  }
}))
const ApiData = () => {
  const classes = useStyles();
  const [modalInfo, setModalInfo] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [open, setShow] = useState(false)
  const handleShow = () => setShow(true)

  const RowClickss = (rows) => {
    console.log(rows)
    setShowModal(true)
    setModalInfo(rows)
    toogleTrueFalse()
  }
  const toogleTrueFalse = () => {
    setShowModal(handleShow())
  }
  const mystate = useSelector((state) => state.userReducer.userinfo)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDetail())
  },[])
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={mystate} columns={columns} pageSize={5} className={classes.fontData} onRowClick={RowClickss} />
      <ModalComponent open={open} modalInfo={modalInfo} setShow={setShow} />
    </div>
  );
}
export default ApiData;

