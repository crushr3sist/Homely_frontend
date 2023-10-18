import ReactHlsPlayer from "react-hls-player";

const PlayerPage = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const videoName = searchParams.get("videoTitle");
  const showName = searchParams.get("showTitle");
  const url = `http://localhost:8000/streams/${showName}/${videoName}/output.m3u8`;

  return (
    <>
      <h1>{videoName}</h1>
      {/* @ts-expect-error lib is default in src, types are wrong */}
      <ReactHlsPlayer
        src={url}
        autoPlay={false}
        controls={true}
        width="60%"
        height="auto"
      />
    </>
  );
};

export default PlayerPage;
