import React, { Component } from "react";
import style from "./style.module.css";

export default class Banner extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className={`${style.banner} my-5`}>
            <h1 className={`${style.bannerh1}`}>A warm welcome!</h1>
            <p className={`${style.bannerp}`}>
              Bootstrap utility classes are used to create this jumbotron since
              the old component has been removed from the framework. Why create
              custom CSS when you can use utilities?
            </p>
            <button className="btn btn-primary px-3 py-2 fs-5 ">
              Call to action
            </button>
          </div>
        </div>
      </div>
    );
  }
}
