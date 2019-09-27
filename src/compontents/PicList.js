import React, { useState, useEffect } from "react";
import axios from "axios";
import PicCard from "./PicCard";

export default function PicList() {
  const [pics, setPics] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(result => {
        setPics(result.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <PicCard
        title={pics.title}
        xdate={pics.date}
        expl={pics.explanation}
        url={pics.url}
      />
    </div>
  );
}
