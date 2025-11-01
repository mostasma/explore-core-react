import React from "react";
import "./Banner.css";

export default function Banner({ inProgressCount, resolvedCount }) {
  return (
    <div className="banner-wrapper">
      <div className="banner-card purple">
        <h4>In-Progress</h4>
        <p>{inProgressCount}</p>
      </div>

      <div className="banner-card green">
        <h4>Resolved</h4>
        <p>{resolvedCount}</p>
      </div>
    </div>
  );
}
