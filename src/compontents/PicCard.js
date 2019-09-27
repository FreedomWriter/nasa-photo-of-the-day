import React from "react";
import PicTitle from "./PicTitle";
import PicImage from "./PicImage";
import PicExp from "./PicExp";

export default function PicCard({ title, date, expl, url }) {
  console.log(`${url} - title from PicCard`);
  return (
    <div className="pic-card">
      <PicTitle title={title} />
      <PicImage url={url} />
      <PicExp expl={expl} />
      {/* <div className="expl">{expl}</div> */}
    </div>
  );
}
