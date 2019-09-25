import React from "react";

export default function Card({ title, date, expl, url }) {
  //   console.log(date);
  //   console.log(expl);
  //   console.log(url);
  //   console.log(title);
  //   const [pic, setPic] = useState([]);
  return (
    <div className="pic-card">
      <div className="title">{title}</div>
      <img className="img" src={url} alt="nasa shot of the day" />
      <div className="expl">{expl}</div>
    </div>
  );
}
