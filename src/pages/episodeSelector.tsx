import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
const EpisodeSelector = (episodeList: []) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/all_videos")
      .then((response) => {
        setVideos(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  console.log(videos);

  return (
    <>
      <h1> Index Page </h1>
      {videos.map((shows, key) => (
        <h1 key={key}>{shows.name}</h1>
      ))}
    </>
  );
};

export default IndexPage;
