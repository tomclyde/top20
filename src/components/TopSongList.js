import React from "react";
import TopSongDetail from "../components/TopSongDetail";
import './TopSongList.css';

const TopSongList = ({songs}) => {
    const songNodes = songs.map(song => {
      return(
        <TopSongDetail key={song.id.attributes["im:id"]}>
        {songs.indexOf(song) + 1} --  {song["im:name"].label}  |   {song["im:artist"].label}</TopSongDetail>
      );
    });

    return (
      <div className="song-list">
        {songNodes}
      </div>
    )
}


export default TopSongList;
