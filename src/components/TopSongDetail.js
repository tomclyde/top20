import React from "react";
import './TopSongDetail.css';

const TopSongDetail = ({children}) => (
        <div className="song-item">
          <h4>{children}</h4>
        </div>
      );


export default TopSongDetail;
