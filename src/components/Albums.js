import React from "react";
import { Link } from "react-router-dom";
import style from "./Main.module.css";
const Albums = ({ albumsData }) => {
  return (
    <div className={style.mainWrapper}>
      <h1>Albums</h1>
      <div className={style.albumsListWrapper}>
        {" "}
        <ul>
          {albumsData.map((album) => (
            <li key={album.id}>
              <Link to={`/albums/${album.id}`}>
                {album.title}-{album.artist}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Albums;
