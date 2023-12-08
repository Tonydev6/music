import React, { useEffect, useState } from "react";
import "../../../src/index.css";
import "../library/library.css";
import APIKIT, { getAllPlaylistts } from "../../spotify";
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Card, cardItem } from "../../components/Card/card";

export const Library = () => {
  const [playlists, setPlaylists] = useState(Array<cardItem>);
  const navigate = useNavigate();

  useEffect(() => {
    getAllPlaylistts().then((res) => {
      const tmp = res.data.items;
      convertPlaylistToCardItem(tmp);
      // setPlaylists(tmp);
      console.log(`playlists`, playlists);
    });
  }, []);

  const convertPlaylistToCardItem = (some: Array<any>): void => {
    some.forEach((el) => {
      const convert: cardItem = {
        id: el.id,
        image: el.images[0].url,
        name: el.name,
        tracksCount: el.tracks.total,
      };
      // if (playlists.length == 0) setPlaylists(convert);
      playlists.push(convert);
      setPlaylists(playlists);
    });
    console.log(some);
  };

  const goToPlaylist = (id: any): void => {
    console.log(`the playlist id is ${id}`);
    navigate("/player", { state: { idPlaylist: id } });
  };
  return (
    <div className="screen-container">
      <div className="library-body">
        {/* <h1>Yoyr Playlists</h1> */}
        {playlists?.map((playlist) => (
          <Card
            id={playlist.id}
            image={playlist.image}
            name={playlist.name}
            tracksCount={playlist.tracksCount}
          />
        ))}
      </div>
    </div>
  );
};
