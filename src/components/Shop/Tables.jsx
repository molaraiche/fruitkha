import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";

import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../../styles/Table.css";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F28123",
    color: theme.palette.common.white,
    fontWeight: "600",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    fontFamily: "Poppins",
  },
}));

const Tables = ({ cartId, cartName, cartQt, cartPrice, added, setAdded, setcartQt }) => {
  const deleteHandler = (e) => {
    e.preventDefault();
    e.target.parentElement.parentElement.remove();
    setAdded(0);
    setcartQt(0)
  };
  return (
    <TableContainer
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        margin: "20px",
      }}
      component={Paper}>
      <Table
        sx={{
          minWidth: "99%",
          width: "99%",
        }}
        aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">ID</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Quantity</StyledTableCell>
            <StyledTableCell align="center">Price</StyledTableCell>
            <StyledTableCell align="center">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartId > 0 ? 
            <TableRow>
              <StyledTableCell align="center"> {cartId} </StyledTableCell>
              <StyledTableCell align="center"> {cartName} </StyledTableCell>
              <StyledTableCell align="center"> {cartQt} </StyledTableCell>
              <StyledTableCell align="center"> {cartPrice} </StyledTableCell>
              <StyledTableCell align="center">
                <button onClick={deleteHandler} className="delBtn">
                  Delete
                </button>
              </StyledTableCell>
            </TableRow> : null
          }
        
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tables;
