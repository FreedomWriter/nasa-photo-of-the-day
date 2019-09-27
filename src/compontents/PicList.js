import React, { useState, useEffect } from "react";
import axios from "axios";
import PicCard from "./PicCard";
// import PicTitle from "./PicTitle";

export default function PicList() {
  const [pics, setPics] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=Ou2QnLFt6enMC3ntomdPBUX0QMVoai9YRZvJTqlV"
      )
      .then(result => {
        setPics(result.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  console.log(`${pics.expl} + from the PicList Component`);
  return (
    <div>
      <PicCard
        title={pics.title}
        date={pics.date}
        expl={pics.explanation}
        url={pics.url}
      />
    </div>
  );
}
