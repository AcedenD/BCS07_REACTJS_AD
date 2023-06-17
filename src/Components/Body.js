import React, { Component } from "react";
import Banner from "../BaiTapThucHanhLayout/Banner";
import Item from "../BaiTapThucHanhLayout/Item";

export default class Body extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Item />
      </div>
    );
  }
}
