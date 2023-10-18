import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const IndexPage = () => {
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/all_videos")
      .then((response) => {
        setVideos(response.data.shows);
      })
      .catch((err) => console.error(err));
  }, []);

  console.log(videos);
  console.log();

  return (
    <>
      <h1> Index Page </h1>
      <h2>Your shows</h2>
      {videos.map((element, key) => (
        <>
          <p key={key}>{element.name}</p>
          <ul>
            {element.episodes.map((epi, key) => (
              <li
                key={key}
                onClick={() => {
                  navigate(
                    `/player?showTitle=${element.name}&videoTitle=${epi}`
                  );
                }}
              >
                {epi}
              </li>
            ))}
          </ul>
        </>
      ))}
      <h2> Your Movies </h2>
    </>
  );
};

export default IndexPage;
