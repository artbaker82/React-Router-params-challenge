import React, { Component } from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import { ALBUMSDATA } from "../ALBUMSDATA.js";
import Albums from "./Albums";
import Home from "./Home";
import MyNav from "./NavBar/MyNav";
import style from "./Main.module.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { albumsData: ALBUMSDATA };
  }
  render() {
    const navbarConfig = [
      { title: "Home", url: "/" },
      { title: "Albums", url: "/albums" },
    ];

    const AlbumsInfo = ({ match }) => {
      const selectedAlbum = this.state.albumsData.filter((album) => {
        return album.id === +match.params.albumId;
      })[0];
      return (
        <div className={style.mainWrapper}>
          <div className={style.selectedAlbumWrapper}>
            <ul>
              <li>{`Title: ${selectedAlbum.title}`}</li>
              <li>{`Artist: ${selectedAlbum.artist}`}</li>
              <li>{`Year: ${selectedAlbum.year}`}</li>
            </ul>
          </div>
        </div>
      );
    };
    return (
      <React.Fragment>
        <MyNav config={navbarConfig} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/albums"
            render={() => <Albums albumsData={this.state.albumsData} />}
          />
          <Route path="/albums/:albumId" component={AlbumsInfo} />
          <Redirect to="/" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Main;
