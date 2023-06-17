import React, { Component } from "react";
import style from "../BaiTapThucHanhLayout/style.module.css";

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg bg-dark">
          <div class="container">
            <a class="navbar-brand text-white" href="#">
              Start BootStrap
            </a>
            <button
              class={`${style.navbartoggler} navbar-toggler text-align-center`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon">
                <i class="fa-solid fa-bars text-secondary fs-3"></i>
              </span>
            </button>
            <div
              class="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a
                    class="nav-link active text-white"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-secondary" href="#">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-secondary" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
