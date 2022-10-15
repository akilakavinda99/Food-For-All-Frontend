import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { MDBDataTableV5 } from 'mdbreact'
import SideNav from "./sideNav";
import classes from "./dashTable/dashTable.module.css";
import NavButton from "./orgrequestlist/NavButton";
import swal from "sweetalert";
import axios from "axios";
import jspdf from "jspdf";
import "jspdf-autotable";

export default function OrganizationRequestList() {

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
            const data=await axios.get(`http://localhost:8070/admin/reqorglist`);
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
        navigate(`/admin/revieworg/${oid}`)
        console.log(oid);
    }


    const generateCompletedReport = (tickets) => {
        const doc = new jspdf();
        const tableColumn = [
          "Organization ID",
          "Organization Name",
          "Email",
          "Contact Number",
          "Reg Date",
        ];
        const tableRows = [];
    
        tickets.map((ticket) => {
          const ticketData = [
            ticket._id,
            ticket.name,
            ticket.email,
            ticket.contactNumber,
            ticket.registrationDate,
          ];
          tableRows.push(ticketData);
        });
            doc.text("Organization Report", 14, 15).setFontSize(12)
            const date = Date().split(" ")
            const dateStr = date[1] + "-" + date[2] + "-" + date[3]
            // right down width height
            // doc.addImage(img, "JPEG", 170, 8, 25, 15)
            doc.autoTable(tableColumn, tableRows, {
            styles: { fontSize: 8 },
            startY: 35,
            })
            doc.text(`Report Genarated Date - ${dateStr}`, 14, 23)
            doc.save(`Inventory_report_.pdf`)
    }
    

    const onDelete = (id)=>{
        swal({
            title: "Are you sure?",
            text: "The Organization Register Request Will be Removed from the System",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          }).then((willDelete) => {
            if (willDelete) {
              axios
                .delete(`http://localhost:8070/admin/deletereqorg/${id}`)
                .then(() => {
                  if (willDelete) {
                    swal("The Organization Register Request Has Been Successfully Deleted!", { icon: "success" })
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
                        <h2>Requested Organizations</h2>

                        
                    </div>
                </div>
                <button  onClick={() => generateCompletedReport(datatable)}>Generate Report</button>
                <div className="row">
                    <div className={"searchbar"}>
                <div class="input-group searchbar">
                    <div className={classes.searchbarposition}>
                    <div id="search-autocomplete" class="form-outline searchbar" >
                    <div className={classes.searchbar}>
                        <input type="search" id="form1" class="form-control searchbar" placeholder="   Search" onChange={(e)=>{
                            setSearch(e.target.value);
                        }}/>
                        
                            
                        </div>
                        {/* <label class="form-label" for="form1">Search</label> */}
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
            <th id={classes.ActionSec}>Col 4</th>
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
                        <td>{org.name}</td>
                        <td>{org.address}</td>
                        <td>{(org.registrationDate).substring(0,10)}</td>
                        <td>
                        <div className={classes.ActionBtnSec}>
                            <button className="btn btn-outline-success" onClick={()=>{onView(org._id)}}>View</button>
                            <button className="btn btn-outline-danger" onClick={()=>{onDelete(org._id)}}>Decline</button>
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
