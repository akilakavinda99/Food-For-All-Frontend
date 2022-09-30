import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { MDBDataTableV5 } from 'mdbreact'
import SideNav from "./sideNav";
import classes from "./dashTable/dashTable.module.css";
import NavButton from "./orgrequestlist/NavButton";


import axios from "axios";

export default function OrganizationRequestList() {

    const toggleSidenav = (e) => {
        e.preventDefault();
        document.body.classList.remove("g-sidenav-pinned");
    };

    const navigate = useNavigate()
    const [datatable, setDatatable] = useState([]);
    const [search,setSearch]=useState("");

    const getReqOrgList=async()=>{
        try{
            const data=await axios.get(`http://localhost:8070/admin/approvedorg`);
            setDatatable(data.data)

        }catch(e){
            console.log(e)
        }
    }

    const onView=(id)=>{
        const oid=id;
        navigate(`/admin/editorg/${oid}`)
        console.log(oid);
    }

    useEffect(()=>{
        getReqOrgList();
    },[]);



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
                        <h2>Registered Organizations</h2>
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
            <th>Name</th>
            <th>Address</th>
            <th>Reg Date</th>
            <th id={classes.ActionSec}>Edit</th>
          </tr>
          {datatable.filter((org)=>{
            if (search==""){
            return org;
            }else if (org.name.toLowerCase().includes(search.toLocaleLowerCase())){
                return org
            }
          })
          
          .map((org)=>{
                return(

                    <tr>
                        <td>{org.name}</td>
                        <td>{org.address}</td>
                        <td>{(org.registrationDate).substring(0,10)}</td>
                        <td>
                        <div className={classes.ActionBtnSec}>
                        <button className="btn btn-outline-primary" onClick={()=>{onView(org._id)}}>Edit</button>

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
