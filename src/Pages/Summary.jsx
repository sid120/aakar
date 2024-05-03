import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#054470",
    color: theme.palette.common.white,
    textAlign: "center",
    fontSize: "18px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    border: `1px solid ${theme.palette.divider}`,
    padding: theme.spacing(1),
    textAlign: "center",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: `1px solid ${theme.palette.divider}`,
  },
}));

function createData(name,department,  time) {
  return { name,  department, time };
}

const rows = [
  createData("Vinayak Joshi",  "Information Technology", "26 Oct 2023 1:45 PM"),
  createData("Olivia Smith", "Human Resources","22 Oct 2023 12:05 PM"),
  createData("Liam Johnson", "Finance","5 Oct 2023 12:00 PM"),
  createData("Noah Davis",  "Research and Development","2 Oct 2023 2:45 PM"),
  createData("Ava Miller",  "Sales","25 Oct 2023 12:35 PM"),
  
];

export default function Summary() {
  
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "55vh",
        justifyContent: "center",
      }}
    >
       <Typography
                variant="subtitle1"
                sx={{
                  textAlign: "left",
                  color: "#054470",
                  fontWeight: "650",
                  fontSize: "2.2rem",
                  padding: "0.3rem",
                }}
              >
      Form Submitted Successfully!!
      </Typography>
      {/* <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center"> Name</StyledTableCell>
              <StyledTableCell align="center">Department</StyledTableCell>
              <StyledTableCell align="center">Time</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">{row.department}</StyledTableCell>
                <StyledTableCell align="center">{row.time}</StyledTableCell>

                
              </StyledTableRow>
            ))}

          </TableBody>
        </Table>
      </TableContainer> */}
      
    </Container>
  );
}