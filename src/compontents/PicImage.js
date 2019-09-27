import React from "react";

export default function PicImage(props) {
  console.log(`${props.url} hello from Picimage`);
  return <img src={props.url} className="img" alt="nasa of the day"></img>;
}
