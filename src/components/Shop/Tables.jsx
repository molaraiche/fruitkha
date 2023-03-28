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

const Tables = ({ id, name, prdQt, price }) => {
  console.log(prdQt);
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
          <TableRow>
            <StyledTableCell align="center"> {id} </StyledTableCell>
            <StyledTableCell align="center"> {name} </StyledTableCell>
            <StyledTableCell align="center"> {prdQt} </StyledTableCell>
            <StyledTableCell align="center"> {price} </StyledTableCell>
            <StyledTableCell align="center">
              <button className="delBtn">Delete</button>
            </StyledTableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tables;
