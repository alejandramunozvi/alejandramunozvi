import React, { useState, useEffect } from "react";
import axios from "axios";

// import ScrollAlbum from "./ScrollAlbum/index";

const API_URL =
  "http://demo.subsonic.org/rest/getAlbumList2?u=guest&p=guest&v=1.12.0&c=myapp&f=json&type=newest";

const App = () => {
  const [addAlbum, setAddAlbum] = useState([]);

  const getDataFromApi = async () => {
    const { data } = await axios.get(API_URL);
    const response = data["subsonic-response"]["albumList2"]["album"];
    setAddAlbum(response);
  };

  useEffect(() => getDataFromApi(), []);

  return (
    <div className="wrapper">
      {/* <ScrollAlbum /> */}
      {addAlbum.map((album) => (
        <div>{album.coverArt} </div>
      ))}
    </div>
  );
};

export default App;
