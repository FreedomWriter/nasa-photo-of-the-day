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

        // console.log(result.data);
        // console.log(result.data.title);
        // console.log(
        //   `Date: ${result.data.date} Explanation: ${result.data.explanation}, hdurl: ${result.data.hdurl},  Media Type: ${result.data.media_type} Service Version: ${result.data.v1} Title: ${result.data.title} url: ${result.data.url}`
        // );
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  //   console.log();
  return (
    <div>
      <PicCard
        title={pics.title}
        xdate={pics.date}
        expl={pics.explanation}
        url={pics.url}
      />
      ;
    </div>
  );
}
