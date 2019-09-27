import React from "react";

export default function PicTitle(props) {
  //   console.log(props.title + " hello");
  return (
    <h2 className="title" title={props.title}>
      {props.title}
    </h2>
  );
}
