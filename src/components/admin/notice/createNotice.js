import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import FileBase64 from "react-file-base64";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import orgView from "./orgView.css"

export default function createNotice(){
    const[title,setTitle]=useState("");
    const [description,setDescription]=useState("");

    return(

        <>
        <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
          {/* <span class="mask bg-gradient-dark opacity-6"></span> */}
          <div class="container my-auto" style={{ paddingTop: 30 }}>
            <div class="row">
              <div class="mx-auto">
                <div class="card z-index-0 fadeIn3 fadeInBottom">
                  <div class="card-body">
                    <form role="form" class="text-start" onSubmit={createNotice} >
                      <div class="d-flex justify-content-center">
                        <h4>Create New Notice</h4>
                      </div>
                      <div class="d-flex justify-content-between">
                        <div></div>
                        <div></div>
                        <h6>* Required Fields</h6>
                      </div>
                      <label className={orgView.lable}>Title </label> 
                      <div class="input-group mb-3 input-group input-group-outline mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Donation Title*"
                          aria-label="Donation Title"
                          aria-describedby="basic-addon1"
                          value={OrgId}
                          disabled
                          required
                        />
                      </div>
    
                      <label className={orgView.lable}>Description </label> 
                      <div class="input-group mb-3 input-group input-group-outline mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Donation Title*"
                          aria-label="Donation Title"
                          aria-describedby="basic-addon1"
                          value={OrgName}
                          onChange={(e) => { 
                            setOrgName(e.target.value) 
                          }}
                          required
                        />
                      </div>    
                      <div class="text-center">
                        <button type="submit" class="btn btn-primary">
                          Update Details
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </main>
        </>




    )

}