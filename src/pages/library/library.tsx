import React, { useEffect, useState } from "react";
import "../../../src/index.css"
import "../library/library.css";
import APIKIT, { getAllPlaylistts } from "../../spotify";
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export const Library = () => {
  const [playlists, setPlaylists] = useState(Array<any>);
  const navigate = useNavigate();

  useEffect(() => {
    getAllPlaylistts().then(res => setPlaylists(res.data.items))
  }, []);

  return (
    <div className="screen-container">
      <div className="library-body">
        {playlists?.map((playlist) => (
          <div
            className="playlist-card"
            key={playlist.id}
            onClick={(e) => console.log(e) /*playPlaylist(playlist.id)*/}
          >
            <img
              src={playlist.images[0].url}
              className="playlist-image"
              alt="Playlist-Art"
            />
            <p className="playlist-title">{playlist.name}</p>
            <p className="playlist-subtitle">{playlist.tracks.total} Songs</p>
            <div className="playlist-fade">
              <IconContext.Provider value={{ size: "50px", color: "#E99D72" }}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
