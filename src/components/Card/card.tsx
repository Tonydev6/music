import React, { useEffect, useState } from "react";
import "../Card/card.css";
import { AiFillPlayCircle } from "react-icons/ai";
import { IconContext } from "react-icons/lib/cjs/iconContext";
export interface cardItem {
  id: string;
  image: string;
  name: string;
  tracksCount: number;
}
export const Card = (props: cardItem) => {
  const [cardItem, setCardItem] = useState(props);
  useEffect(() => {
    setCardItem(props);
  });
  return (
    <div
      className="playlist-card"
      key={cardItem.id}
      onClick={() => console.log("click") /*goToPlaylist(cardItem.id)*/}
    >
      <img src={cardItem.image} className="playlist-image" alt="Playlist-Art" />
      <p className="playlist-title">{cardItem.name}</p>
      <p className="playlist-subtitle">{cardItem.tracksCount} Songs</p>
      <div className="playlist-fade">
        <IconContext.Provider value={{ size: "50px", color: "white" }}>
          <AiFillPlayCircle />
        </IconContext.Provider>
      </div>
    </div>
  );
};
