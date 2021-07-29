import React from "react";
const AlbumsInfo = ({ match }) => {
  return <div>{+match.params.albumId}</div>;
};

export default AlbumsInfo;
