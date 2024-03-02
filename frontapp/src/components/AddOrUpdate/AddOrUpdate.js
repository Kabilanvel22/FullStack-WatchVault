import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import "./AddOrUpdate.css"
import ApiService from '../../services/ApiService';


const AddOrUpdate=()=> {
  const nav=useNavigate();
  const[name,setname]=useState('');
  const[type,settype]=useState('');
  const[color,setcolor]=useState('');
  const[specs,setspecs]=useState('');
  const[price,setprice]=useState('');
  const {id} = useParams();
    const saveOrUpdateWatch = (e) => {
      e.preventDefault();
      if(type.length==0||price.length==0||specs.length==0||name.length==0||color.length==0){
        alert("Enter All fields")
      }
      else{
      if (window.confirm("Confirm Details!") == true) {
        e.preventDefault();
          const employee = {id,name,type,color,price,specs}
          if(id){
              ApiService.updateWatch(id, employee).then((response) => {
                  nav('/list')
              }).catch(error => {
                  console.log(error)
              })
  
          }else{
              ApiService.createWatch(employee).then((response) =>{
                  console.log(response.data)
                  nav('/list');
              }).catch(error => {
                  console.log(error)
              })
          }
        }
      }
    } 
  
      useEffect(() => {
         ApiService.getWatchById(id).then((response) =>{
              setname(response.data.name)
              settype(response.data.type)
              setcolor(response.data.color)
              setprice(response.data.price)
              setspecs(response.data.specs)
          }).catch(error => {
              console.log(error)
          })
      }, [])
      const title = () => {

        if(id){
            return <h1>Update Watch</h1>
        }else{
            return <h1>Add Watch</h1>
        }
    }
  return (
    <div id="add_body">
    <div className="add-form">
    <div className="add_container">
      <div className="add_header">
        {title()}
        <p>Enter Watch Details</p>
      </div>
      <form>
  <div className="add_value">
    <input
      type="text"
      placeholder="Watch name..."
      value={name}
      onChange={(e) => setname(e.target.value)}
    />
  </div>
  <div className="add_value">
    <input
      type="text"
      placeholder="Watch color..."
      value={color}
      onChange={(e) => setcolor(e.target.value)}
    />
  </div>
  <div className="add_value">
    <input
      type="text"
      placeholder="Watch type..."
      value={type}
      maxLength="20"
      onChange={(e) => settype(e.target.value)}
    />
  </div>
  <div className="add_value">
  <input
  type="text"
  placeholder="Specs..."
  value={specs}
  onChange={(e) => setspecs(e.target.value)}
  />
  </div>
  <div className="add_value">
    <input
      type="number"
      placeholder="Watch price..."
      value={price}
      onChange={(e) => setprice(e.target.value)}
    />
  </div>
  <input
    onClick={saveOrUpdateWatch}
    className="e-add-btn"
    type="submit"
    value="Submit"
  />
  <Link to="/list">
    <button className="e-exit-btn">Cancel</button>
  </Link>
</form>

    </div>
  </div>
    </div>
  )
}

export default AddOrUpdate