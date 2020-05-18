import React, { Component } from "react";
import $ from "jquery";
export default class Jquery extends Component {
  componentDidMount() {
    $("button").click(() => {
      var div = $("span");
      div.animate({ top: "100px" }, "slow");
      div.animate({ top: "-100px" }, "slow");
      div.animate({ top: "100px" }, "slow");
      div.animate({ top: "-100px" }, "slow");
    });
  }
  render() {
    return (
      <div className="container center">
        <p>
          loading <span>.</span>
          <span>.</span>
          <span>.</span>
        </p>
        <button>mm</button>
      </div>
    );
  }
}
