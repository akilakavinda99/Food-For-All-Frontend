import React from "react";
import "../offline/offline.css";
import img from "../offline/noConnections.gif";

export default function OfflinePage() {
  return (
    <>
      <div class="bbdy">
        <img src={img} alt="" />
      </div>
    </>
  );
}
