import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import { TablePagination } from "@mui/material";
import NavBar from './../Components/NavBar';
import { useState,useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

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

// function createData(name, id, status, views) {
//   return { name, id, status, views };
// }

// const rows = [
//   createData("Customer 1", "12345", "Approved"),
//   createData("Customer 2", "67890", "Pending"),
//   createData("Customer 3", "54321", "Incomplete"),
//   createData("Customer 4", "98765", "Rejected"),
//   createData("Customer 5", "11111", "Approved"),
//   createData("Customer 6", "11431", "Rejected"),
//   createData("Customer 7", "54646", "Pending"),
//   createData("Customer 8", "64566", "Incomplete"),
//   createData("Customer 9", "23424", "Approved"),
// ];
async function fetchUserData() {
  try {
    const response = await fetch('http://localhost:4000/user');
    if (response.ok) {
  
      const data = await response.json();
      return data;
    } else {
      throw new Error('Failed to fetch data');
    } 
  } catch (error) {
    console.error('Error fetching User data: ', error);
    return [];
  }
}
export default function Approval() {
  const [users, setUsers] =useState([]);
  const { setUserInfo,userInfo } = useContext(UserContext);
  const [formData, setForm] = useState({});
  const [currentId, setCurrentId] = useState(null);
  const URL = "http://localhost:4000/resetpassword"
  const url = "http://localhost:4000/deleteuser"

  const rpassword = (id) => {
    console.log("View Form for ID by rpassword:", id);
    setCurrentId(id);
   // console.log(formData)
    uploadingData(URL, { email: id });
  };

  const handleViewForm = (id) => {
    console.log("View Form for ID:", id);
    setCurrentId(id);
    deletingData(url, { email: id });
  };

  async function uploadingData(URL, data) {
    try {
        const response = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(data),
        });
      
        if (!response.ok) {
            console.error("Error:", response.status, await response.json());
            alert("Error")
        } else {
            console.log("Success:", response.status, await response.json());
            alert("Reset Success")
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

async function deletingData(URL, data) {
  try {
      const response = await fetch(URL, {
          method: "POST",
          headers: {
              "Content-type": "application/json",
          },
          body: JSON.stringify(data),
      });
    
      if (!response.ok) {
          console.error("Error:", response.status, await response.json());
          alert("Error")
      } else {
          console.log("Success:", response.status, await response.json());
          alert("Delete Success")
          window.location.reload();
      }
  } catch (error) {
      console.error("Error:", error);
  }
}




  useEffect(()=>{
    async function fetchData() {
      const data = await fetchUserData();
      setUsers(data);
    }
    fetchData();
  }, []);

  

  
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, users.length - page * rowsPerPage);

  const slicedRows = users.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <div>
    <NavBar />
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        justifyContent: "center",
        mt: "3rem",
      }}
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
          <TableRow>
                <StyledTableCell align="center"> Name</StyledTableCell>
                <StyledTableCell align="center">Email-Id</StyledTableCell>
                <StyledTableCell align="center">Contact No</StyledTableCell>
                <StyledTableCell align="center">Department</StyledTableCell>
                <StyledTableCell align="center">Position</StyledTableCell>
                <StyledTableCell align="center">Reset Password</StyledTableCell>
                <StyledTableCell align="center">Delete User</StyledTableCell>

              </TableRow>
          </TableHead>
          <TableBody>
            {slicedRows.map((users) => (
              <StyledTableRow key={users.name}>
                <StyledTableCell component="th" scope="row">
                  {users.name}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {users.email}
                </StyledTableCell>
                <StyledTableCell align="center">{users.number}</StyledTableCell>
                <StyledTableCell align="center">
                    {users.department}
                </StyledTableCell>
                <StyledTableCell align="center">
                    {users.role}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    variant="contained"
                    style={{ background: "success", minWidth: "100px" }}
                    onClick={() => rpassword(users.email)}
                  >
                    Reset Password
                  </Button>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    variant="contained"
                    
                    style={{backgroundColor: "#DC143C", minWidth: "100px" }}
                    onClick={() => handleViewForm(users.email)}
                    disabled={users.email === "admin123"}
                  >
                    Delete
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <StyledTableCell colSpan={4} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 50, 100]}
        component="div"
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Rows per page"
        labelDisplayedRows={({ from, to, count }) =>
          `${from}-${to} of ${count}`
        }
        backIconButtonText="Previous Page"
        nextIconButtonText="Next Page"
      />
    </Container>
    </div>
  );
}
