import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { MDBDataTableV5 } from 'mdbreact'
import SideNav from "../sideNav";
import classes from "../dashTable/dashTable.module.css";
import NavButton from "../orgrequestlist/NavButton";
import swal from "sweetalert";
import axios from "axios";

export default function GetUserList() {

    const toggleSidenav = (e) => {
        e.preventDefault();
        document.body.classList.remove("g-sidenav-pinned");
    };
    const navigate = useNavigate()
    // const navigateTo=()=> useNavigate.push('/admin/orgview/id')


    const [datatable, setDatatable] = useState([]);
    const [search,setSearch]=useState("");

    const getReqOrgList=async()=>{
        try{
            const data=await axios.get(`http://localhost:8070/admin/getusers`);
            setDatatable(data.data)

        }catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
        getReqOrgList();
    },[]);


    const onView=(id)=>{
        const oid=id;
        navigate(`/admin/viewreqfund/${oid}`)
        console.log(oid);
    }

 
    
    



    return (

        <>
        {/* <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                <SideNav/>
                <div className="container-fluid py-4" onClick={toggleSidenav}>
                    <div className="row">
                        <h1>Admin Dashboard</h1>
                    </div>
                    <div className="row">
            <MDBDataTableV5
                hover
                entriesOptions={[5, 10, 20, 25]}
                entries={10}
                pagesAmount={4}
                data={datatable}
                searchTop
                searchBottom={false} />
        </div>


                </div>
            </main> */}


<main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                <NavButton />
                <div className="container-fluid py-4" onClick={toggleSidenav}>
                    <div className="row">
                        <h2>User List</h2>
                    </div>
                </div>
                <div className="row">
                    <div className={"searchbar"}>
                <div class="input-group searchbar">
                    <div className={classes.searchbarposition}>
                    <div id="search-autocomplete" class="form-outline searchbar" >
                    <div className={classes.searchbar}>
                        <input type="search" id="form1" class="form-control searchbar" onChange={(e)=>{
                            setSearch(e.target.value);
                        }}/>
                        
                            
                        </div>
                        <label class="form-label" for="form1">Search</label>
                    </div>
                    </div>
                    <button type="button" class="btn btn-primary">
                        <i class="fas fa-search"></i>
                    </button>
                    </div>
                    </div>
                    </div>
                    <div className="row">
<div className={classes.DashTable}>
      <div className={classes.TableBack}>
        <table className={classes.Table}>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th id={classes.ActionSec}>Actions</th>
          </tr>
          {datatable.filter((org)=>{
            if (search==""){
            console.log(org)
            return org;
            }else if (org.name.toLowerCase().includes(search.toLocaleLowerCase())){
                return org
            }
          })
          
          .map((org)=>{
                return(

                    <tr>
                        <td>{org.firstName}</td>
                        <td>{org.lastName}</td>
                        <td>{org.email}</td>
                        <td>
                        <div className={classes.ActionBtnSec}>
                            <button className="btn btn-outline-info" onClick={()=>{onView(org._id)}} >View</button>
                        </div>
                        </td>
                    </tr>

                );
            })}

        </table>
      </div>
    </div>
    </div>
    </main>
            

            
        
        </>

        
    )
}
