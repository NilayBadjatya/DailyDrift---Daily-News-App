import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, source, sname } = this.props; // Destructuring JavaScript
    return (
      <div className="my-3">
        <div className="card">
          <div
            className="container"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            <span
              className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
              style={{ marginTop: "15px", left: "90%", marginRight: "5px" }}
            >
              {sname}
            </span>
          </div>
          <img
            src={
              !imageUrl
                ? "https://i.abcnewsfe.com/a/4e6ce889-1730-4036-b79f-5b42db472738/wirestory_be6033688c68e0f19cd83131592d1f82_16x9.jpg?w=1600"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6 className="card-title">
              <strong>{source ? source : "Unknown"}</strong>
            </h6>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
