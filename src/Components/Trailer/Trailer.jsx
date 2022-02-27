import "./trailer.scss";
import { useState, useEffect } from "react";
import tmdbApi from "../../Api/tmbdApi";
const Trailer = (props) => {

  var cate = props.cate;
  var id = props.id;
  var status = props.status;
  const [video, setVideo] = useState([]);
  useEffect(() => {
    const getItem = async () => {
      const response = await tmdbApi.getVideo(cate, id);
      setVideo(response.results);
    };
    getItem();
  }, [id]);
  if (video.length > 0) {
    var trailer = "https://www.youtube.com/embed/" + video[0].key;
    var text = "";
  } else {
    var trailer = "";
    var text = "No Trailer";
  }
  const handleTrailer = () => {
    props.recevieStatus(status);
  };
  return (
    <div className={`video ${status ? "active-trailer" : "nonactive-trailer"}`}>
      <div className="video__container">
        <div className="video__container__box ">
          <iframe
            src={status ? trailer : ""}
            width="100%"
            height="500px"
            title="trailer"
          ></iframe>
          <div className="button__closebox">
            <p onClick={handleTrailer}>x</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Trailer;
