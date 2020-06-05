import React, { Component } from "react";
import { Link } from "react-router-dom";
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
import { Route } from "react-router-dom";

class Main extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>
          <Link to="/">Photowall</Link>
        </h1>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <PhotoWall {...this.props} />
              {/* by doing that, it can pass in all of the props in this main to the PhotoWall.js */}
            </div>
          )}
        />

        <Route
          path="/AddPhoto"
          render={({ history }) => <AddPhoto {...this.props} />}
        />
      </div>
    );
  }
}

export default Main;
