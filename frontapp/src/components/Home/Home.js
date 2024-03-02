import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Pagination } from '@mui/lab';
import axios from 'axios';
import "./Home.css"
import { Select, MenuItem, FormControl } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Navbar from '../NavBar/Navbar';
import { Table, TableHead, TableBody, TableRow, TableCell, TableSortLabel } from '@mui/material';
import ApiService from '../../services/ApiService';
const Home=()=> {
  const nav=useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [sortBy, setSortBy] = useState('id');
  const [sortOrder, setSortOrder] = useState('asc');
  const [Watchs, setWatchs] = useState([])
  useEffect(() => {
      getAllWatchs();
  }, [currentPage,itemsPerPage,sortBy,sortOrder])

  const getAllWatchs = () => {
      axios.get(`http://localhost:8080/watches/${currentPage}/${itemsPerPage}/${sortBy}/${sortOrder}`).then((response) => {
      const{content,totalPages}=response.data;   
      setWatchs(response.data)
      setTotalPages(totalPages);
          console.log(response.data);
      }).catch(error =>{
          console.log(error);
      })
  }
  const handleSort = (column) => {
    if (column === sortBy) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  const deleteWatch = (watchId) => {
    if(window.confirm("Sure to Delete?")){
     ApiService.deleteWatch(watchId).then((response) =>{
      getAllWatchs();

     }).catch(error =>{
         console.log(error);
     })
    }
  }
  const deleteAllWatch = () => {
    if(window.confirm("Sure to Delete All Watchs?")){
     ApiService.deleteAllWatch().then((response) =>{
      getAllWatchs();

     }).catch(error =>{
         console.log(error);
     })
    }
  }
  const LogoutHandler=()=>{
    if(window.confirm("Sure to Logout?")){
      nav("/")
    }
  }
  const handlePageChange = (event, ptype) => {
    setCurrentPage(ptype);
  };
  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(event.target.value);
  };
  const getSortDirection = (column) => {
    if (sortBy === column) {
      return sortOrder;
    }
    return 'asc';
  };

  return (
    <div>
    <Navbar/>
    <div id="view_container">
    <Link to="/add"><button id="addbtn">Add Watchs</button></Link>
    <button id="delbtn" onClick={deleteAllWatch} >Delete All Watchs</button> <br/><br/>
    <FormControl className="page_num">
    <p>Item Per Page</p>
      <Select value={itemsPerPage} onChange={handleItemsPerPageChange}>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={7}>7</MenuItem>
        <MenuItem value={9}>9</MenuItem>
        <MenuItem value={11}>11</MenuItem>
        <MenuItem value={13}>13</MenuItem>
      </Select>
    </FormControl>
  
    <Table id="view_table">
          <TableHead id="view_head">
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={sortBy === 'id'}
                  direction={getSortDirection('id')}
                  onClick={() => handleSort('id')}
                >
                  Id
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortBy === 'name'}
                  direction={getSortDirection('name')}
                  onClick={() => handleSort('name')}
                >
                  Name
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortBy === 'type'}
                  direction={getSortDirection('type')}
                  onClick={() => handleSort('type')}
                >
                  Type
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortBy === 'price'}
                  direction={getSortDirection('price')}
                  onClick={() => handleSort('price')}
                >
                  Price
                </TableSortLabel>
              </TableCell>
              <TableCell>Color</TableCell>
              <TableCell>Specs</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody id="view_body">
            {Watchs.content &&
              Watchs.content.map((Watch) => (
                <TableRow key={Watch.id}>
                  <TableCell id="id">{Watch.id}</TableCell>
                  <TableCell id="name">{Watch.name}</TableCell>
                  <TableCell id="type">{Watch.type}</TableCell>
                  <TableCell id="price">{Watch.price}</TableCell>
                  <TableCell id="color">{Watch.color}</TableCell>
                  <TableCell id="specs">{Watch.specs}</TableCell>
                  <TableCell id="action">
                    <Link to={`/update/${Watch.id}`}>
                      <button id="actions"><EditIcon/></button>
                    </Link>
                    <button id="action-del" onClick={() => deleteWatch(Watch.id)}>
                      <DeleteIcon/>
                    </button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
            <Pagination className='page'
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
          />
    <button id="logout" onClick={LogoutHandler}>Logout</button>
        
    </div>
    </div>
  )
}

export default Home