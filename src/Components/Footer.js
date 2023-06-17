import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="bg-dark text-white py-5">
          <div className="container">
            <div className="row ">
              <div className="col-12 text-center">
                Copyright © Your Website 2023
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
