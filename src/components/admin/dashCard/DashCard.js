import React,{useState,useEffect} from "react";
import classes from "./DashCard.module.css";
import { Link } from "react-router-dom";
import axios from "axios";




const DashCard = () => {

const [datatable, setDatatable] = useState([]);
const [datatable2,setDatatable2]=useState([]);

const getReqOrgList=async()=>{
  try{
      const data=await axios.get(`http://localhost:8070/admin/reqorglist`);
      setDatatable(data.data)

  }catch(e){
      console.log(e)
  }
}

const getReqFundList=async()=>{
  try{
      const data2=await axios.get(`http://localhost:8070/admin/reqfunds`);
      setDatatable2(data2.data2)

  }catch(e){
      console.log(e)
  }
}

useEffect(()=>{
  getReqOrgList();
  getReqFundList();
},[]);


const length=datatable.length;

console.log(datatable2);


  return (
    <div className={classes.DashCard0}>
    <div className={classes.DashCard}>
      <div className={classes.Card1}>
        <div className={classes.CardHeading}>New Organization Register Requests </div>
        <div className={classes.CardData}>
          <div className={classes.Count}>{length}</div>
        </div>
        <div className={classes.CardHeading}>New Fundraisar Program Requests </div>
        <div className={classes.CardData}>
          <div className={classes.Count}>{}</div>
        </div>
      </div>
      <div className={classes.Card2}>
        <div className={classes.CardHeading2}><Link to={"/admin/reqorglist"}>View Organization Register Requests</Link></div>
        <div className={classes.CardData}>
          
        </div>
      </div>
      <div className={classes.Card2}>
        <div className={classes.CardHeading2}><Link to={"/admin/reqfund"}>View Fundraisar Program<br/> Requests</Link></div>
        <div className={classes.CardData}>
          
        </div>
      </div>
      <div className={classes.Card2}>
        <div className={classes.CardHeading2}><Link to={"/admin/reqdon"}>View Donation Requests<br/> Requests</Link></div>
        <div className={classes.CardData}>
          
        </div>
      </div>
      <div className={classes.Card2}>
        <div className={classes.CardHeading}>View Active Fundraisar Programs</div>
        <div className={classes.CardData}>
          <div className={classes.Count}>10</div>
        </div>
      </div>
  
    </div>
    </div>
  );
};

export default DashCard;
