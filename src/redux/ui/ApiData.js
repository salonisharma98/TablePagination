import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useSelector,useDispatch } from 'react-redux';
import {fetchDetail} from '../action/Action';
import Pagination from './Pagination';

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

const ApiData=()=> {
  const classes = useStyles();

  const myState=useSelector((state)=>state.userReducer)

  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(fetchDetail())
  },[])

  const [currentPage,setCurrentPage]=useState(1)
  const [postsPerPage,setPostsPerPage]=useState(10) 
  const indexOfLastPost=currentPage * postsPerPage;
  
  const indexOfFistPost=indexOfLastPost-postsPerPage;
  const datass=myState.userinfo;
  // console.log(datass,'data here')
  
  const currentPost=[datass].slice(indexOfFistPost,indexOfLastPost)
  // console.log(currentPost,'i am current post')

  //change page
  const paginate=(pageNumbers)=>setCurrentPage(pageNumbers)

  return myState.isloading ? (
        <h3>Loading...</h3>
      ) : myState.error ? (
        <h3>{myState.error}</h3>
      ) : (
        <div>
            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Account ID</StyledTableCell>
            <StyledTableCell>Title</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentPost && currentPost.items && currentPost.map((user) => (
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
                {user.content_license}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Pagination postsPerPage={postsPerPage} totalPosts={datass.length} paginate={paginate}/>
  </div>
  );
}

export default ApiData;
