import React from "react";
import classes from "./DashCard.module.css";
import { Link } from "react-router-dom";

const DashCard = () => {
  return (
    <div className={classes.DashCard0}>
    <div className={classes.DashCard}>
      <div className={classes.Card1}>
        <div className={classes.CardHeading}>New Organization Register Requests </div>
        <div className={classes.CardData}>
          <div className={classes.Count}>5</div>
        </div>
        <div className={classes.CardHeading}>New Fundraisar Program Requests </div>
        <div className={classes.CardData}>
          <div className={classes.Count}>4</div>
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
