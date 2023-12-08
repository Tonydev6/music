import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import apiClient, { getAllPlaylistTracks } from "../../spotify";

export const Player = () => {
  const location = useLocation();
  const [tracks, setTracks] = useState(Array<any>);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (location.state) {
      console.log(location.state);
      // const tracks = getAllPlaylistTracks(location.state.idPlaylist);
      getAllPlaylistTracks(location.state.idPlaylist).then((res: any) => {
        setTracks(res);
      });
      console.log(tracks);
      //   apiClient
      //     .get("playlists/" + location.state?.id + "/tracks")
      //     .then((res) => {
      //       setTracks(res.data.items);
      //       setCurrentTrack(res.data?.items[0]?.track);
      //     });
    }
  }, [location.state]);

  useEffect(() => {
    setCurrentTrack(tracks[currentIndex]?.track);
  }, [currentIndex, tracks]);

  return (
    <div className="screen-container flex">
      <div className="left-player-body">left player</div>
      <div className="right-player-body">right player body</div>
    </div>
  );
};
