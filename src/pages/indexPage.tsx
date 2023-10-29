import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/navbar";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
const IndexPage = () => {
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();

  async function getMovieThumbnailWithCache(title) {
    const cachedThumbnail = localStorage.getItem(title);

    if (cachedThumbnail) {
      return cachedThumbnail;
    } else {
      const apiUrl = "";
      try {
        const response = await axios.get(apiUrl);

        if (response.data.Poster) {
          localStorage.setItem(title, response.data.Poster); // Cache the thumbnail
          return response.data.Poster;
        } else {
          return "Thumbnail not found";
        }
      } catch (error) {
        console.error("Error:", error);
        return "Error fetching thumbnail";
      }
    }
  }

  useEffect(() => {
    axios
      .get("http://10.1.1.140:8000/dir/all_videos")
      .then((response) => {
        setVideos(response.data.shows);
      })
      .catch((err) => console.error(err));
  }, []);

  console.log(videos);
  console.log();
  return (
    <>
      <NavBar></NavBar>
      <h1> Index Page </h1>
      <h2>Your shows</h2>
      {videos.map((element, key) => (
        <>
          <div>
            <Card isFooterBlurred radius="lg" className="border-none">
              <Image
                alt="Woman listing to music"
                className="object-cover"
                height={200}
                src="/images/hero-card.jpeg"
                width={200}
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p key={key} className="text-tiny text-white/80">
                  {element.name}
                </p>
                <Button
                  className="text-tiny text-white bg-black/20"
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="sm"
                >
                  Notify me
                </Button>
              </CardFooter>
            </Card>
          </div>
          {/* <ul>
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
          </ul> */}
        </>
      ))}
      <h2> Your Movies </h2>
    </>
  );
};

export default IndexPage;
