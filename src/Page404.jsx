import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        width: "100%",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <h1>404 Page Not found</h1>
      <Link to={"/"}>
        <button className="home-btn">Back To Home</button>
      </Link>
    </div>
  );
};

export default Page404;
