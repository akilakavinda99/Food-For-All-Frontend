import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MDBDataTableV5 } from 'mdbreact'
import SideNav from "../sideNav";
import classes from "../dashTable/dashTable.module.css";
import NavButton from "../orgrequestlist/NavButton";
import swal from "sweetalert";
import axios from "axios";

export default function GetAcceptedDonations() {

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
            const data=await axios.get(`http://localhost:8070/admin/getaccepteddon/`);
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

    const onDelete = (id)=>{
        swal({
            title: "Are you sure?",
            text: "The Donation Request Will be Rejected",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          }).then((willDelete) => {
            if (willDelete) {
              axios
                .put(`http://localhost:8070/admin/rejectdonation/${id}`)
                .then(() => {
                  if (willDelete) {
                    swal("The Donation Request Has Been Rejected!", { icon: "success" })
                    setTimeout(function () {
                      window.location.reload()
                    }, 3000)
                  } else {
                    swal("File Is Not Deleted")
                  }
                })
            }
          })
        

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
                        <h2>Accepted Donations</h2>
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
            <th>DonationTitle</th>
            <th>Email</th>
            <th>Description</th>
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
                        <td>{org.donationTitle}</td>
                        <td>{org.email}</td>
                        <td>{org.donationDescription}</td>
                        <td>
                        <div className={classes.ActionBtnSec}>
                        <Link
                              to={"/donator/view/" + org._id}
                              state={{
                                fromAdmin: true,
                                accepted:true,
                              }}
                            >
                            <button className="btn btn-outline-info" >View</button>
                            </Link>

                            <button className="btn btn-outline-danger" onClick={()=>{onDelete(org._id)}} >Reject</button>
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
