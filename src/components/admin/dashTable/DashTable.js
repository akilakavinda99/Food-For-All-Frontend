import React from "react";
import classes from "./dashTable.module.css";

const DashTable = () => {
  return (
    <div className={classes.DashTable}>
      <div className={classes.TableBack}>
        <table className={classes.Table}>
          <tr>
            <th>Col 1</th>
            <th>Col 2</th>
            <th>Col 3</th>
            <th id={classes.ActionSec}>Col 4</th>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>
              <div className={classes.ActionBtnSec}>
                <button className={classes.ActionBtn1}>View</button>
                <button className={classes.ActionBtn2}>Delete</button>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default DashTable;
