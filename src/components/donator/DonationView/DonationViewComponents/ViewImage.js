import React from "react";

export default function ViewImage(props) {
  return (
    <>
      <div
        className="viewImage"
        style={{
          width: 1000,
          height: 380,
          borderRadius: 20,
          backgroundImage: `url(${props.image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      />
    </>
  );
}
