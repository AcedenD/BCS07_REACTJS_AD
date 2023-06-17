import React, { Component } from "react";
import style from "./style.module.css";

export default class Item extends Component {
  featuresContent = [
    {
      id: 1,
      icon: "bi bi-collection",
      title: "Fresh new layout",
      content:
        "With Bootstrap 5, we've created a fresh new layout for this template!",
    },
    {
      id: 2,
      icon: "bi bi-cloud-download",
      title: "Free to Download",
      content:
        "As always, Start Bootstrap has a powerful collectin of free templates.",
    },
    {
      id: 3,
      icon: "bi bi-card-heading",
      title: "Jumbotron hero header",
      content: "The heroic part of this template is the jumbotron hero header!",
    },
    {
      id: 4,
      icon: "bi bi-bootstrap",
      title: "Feature boxes",
      content: "We've created some custom feature boxes using Bootstrap icons!",
    },
    {
      id: 5,
      icon: "bi bi-code",
      title: "Simple clean code",
      content:
        "We keep our dependencies up to date and squash bugs as they come!",
    },
    {
      id: 6,
      icon: "bi bi-patch-check",
      title: "A name you trust",
      content:
        "Start Bootstrap has been the leader in free Bootstrap templates since 2013!",
    },
  ];

  renderCards = this.featuresContent.map((item) => {
    return (
      <div key={item.id} className="col-lg-6 col-xxl-4 mb-5">
        <div className="card bg-light border-0 h-100">
          <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
            <div
              className={`${style.features} bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4`}
            >
              <i class={`${item.icon}`}></i>
            </div>
            <h2 className="fs-4 fw-bold">{item.title}</h2>
            <p className="mb-0">{item.content}</p>
          </div>
        </div>
      </div>
    );
  });

  // renderCards(contentArr) {
  //   return (
  //     <div className="col-lg-6 col-xxl-4 mb-5">
  //       <div className="card bg-light border-0 h-100">
  //         <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
  //           <div
  //             className={`${style.features} bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4`}
  //           >
  //             <i class="fbi bi-collection"></i>
  //           </div>
  //           <h2 className="fs-4 fw-bold">Fresh new layout</h2>
  //           <p className="mb-0">
  //             With Bootstrap 5, we've created a fresh new layout for this
  //             template!
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row gx-lg-5">{this.renderCards}</div>
        </div>
      </div>
    );
  }
}
