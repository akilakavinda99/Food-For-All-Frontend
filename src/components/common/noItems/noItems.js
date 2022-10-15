import React from "react";
import "./noItems.css";

export default function NoItems(props) {
  return (
    <>
      <div className="">
        <div className="col-sm mt-5">
          <h4 className="noItemsHeader">{props.message}</h4>
          {/* <iframe title="No item" src="https://embed.lottiefiles.com/animation/106840"></iframe> */}
        </div>
      </div>
    </>
  );
}
