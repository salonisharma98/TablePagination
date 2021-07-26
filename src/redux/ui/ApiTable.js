import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDetail } from '../action/Action';
import TablePagination from '@material-ui/core/TablePagination';
import ModalComponent from './ModalShow';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});
const ApiTable = () => {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const mystate = useSelector((state) => state.userReducer.userinfo)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDetail())
  }, [])
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, mystate.length - page * rowsPerPage);

  const [modalInfo, setModalInfo] = useState([])
  const [ ,setShowModal] = useState(false)
  const [open, setShow] = useState(false)
  const handleShow = () => setShow(true)

  const rowClick = (ev) => {
        const userData = ev.target.innerHTML
        const userSelected = mystate.find(user=>user.id === +userData || user.name === userData || user.contact === userData || user.phone === userData || user.company.name === userData)
        if(userSelected){
        setShowModal(true)
        setModalInfo(userSelected)
        toogleTrueFalse()
        }
      }
  const toogleTrueFalse = () => {
    setShowModal(handleShow())
  }
  
  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">ID</StyledTableCell>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center">Contact</StyledTableCell>
              <StyledTableCell align="center">Works at</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mystate.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user) => (
              <StyledTableRow key={user.id} onClick={rowClick}>
                <StyledTableCell align="center" >
                  {user.id}
                </StyledTableCell>
                <StyledTableCell align="center">{user.name}</StyledTableCell>
                <StyledTableCell  align="center">{user.phone}</StyledTableCell>
                <StyledTableCell  align="center">{user.company.name}</StyledTableCell>
              </StyledTableRow>           
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 48 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 8, 10]}
        component="div"
        count={mystate.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <ModalComponent open={open} modalInfo={modalInfo} setShow={setShow} />
    </div>
  );
}
export default ApiTable;
