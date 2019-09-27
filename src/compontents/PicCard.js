import React from "react";
import PicTitle from "./PicTitle";
// import PicImage from "./PicImage";

export default function Card({ title, date, expl, url }) {
  return (
    <div className="pic-card">
      <PicTitle title={title} />
      {/* <PicImage src={url} /> */}
      <img className="img" src={url} alt="nasa shot of the day" />
      <div className="expl">{expl}</div>
    </div>
  );
}
