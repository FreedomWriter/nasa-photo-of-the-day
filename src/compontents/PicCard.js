import React from "react";

export default function Card({ title, date, expl, url }) {
  return (
    <div className="pic-card">
      <h2 className="title">{title}</h2>
      <img className="img" src={url} alt="nasa shot of the day" />
      <div className="expl">{expl}</div>
    </div>
  );
}
