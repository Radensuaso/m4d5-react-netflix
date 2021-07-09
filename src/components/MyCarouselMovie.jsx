import React, { Component } from "react";
import { Col } from "react-bootstrap";

export default class MyCarouselMovie extends Component {
  render() {
    return (
      <Col xs={12} sm={6} md={4} lg={3} xl={2}>
        <img
          className="d-block w-100"
          src={this.props.movie.Poster}
          alt={this.props.movie.Title}
        />
      </Col>
    );
  }
}
