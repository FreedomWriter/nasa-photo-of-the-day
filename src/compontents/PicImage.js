import React from "react";

export default function PicImage(props) {
  console.log(props.url + " hello");
  return <img className="img" src={props.url} alt="nasa shot of the day" />;
}
