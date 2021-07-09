import React, { Component } from "react"
import { Container, Row, Col, Form } from "react-bootstrap"
import { FaStream, FaThLarge } from "react-icons/fa"

class SearchArea extends Component {
  render() {
    return (
      <Container fluid id="search-area">
        <Row className="pl-2 w-100 justify-content-between align-items-center">
          <Col xm={12} sm={8} md={4} lg={3} className="d-flex">
            <h3 className="mr-3">Search</h3>
            <Form.Control type="text" placeholder="search Movies" />
          </Col>
          <Col
            sm={3}
            md={2}
            id="div-Icons"
            className="col d-none d-sm-flex justify-content-end"
          >
            <div className="d-inline-block">
              <div>
                <FaStream />
              </div>
              <div>
                <FaThLarge />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default SearchArea

/*  <div class="container-fluid mt-5">
        <div id="row-icons" class="d-flex ml-4">
          <h3 class="mr-3">TV Shows</h3>

          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Genre
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">Fantasy</a>
              <a class="dropdown-item" href="#">Comedy</a>
              <a class="dropdown-item" href="#">Drama</a>
            </div>
          </div>
          <div id="div-Icons" class="col d-none d-sm-block">
            <div class="mr-n1"><i class="fas fa-stream"></i></div>
            <div><i class="bi bi-grid-fill"></i></div>
          </div>
        </div>
      </div> */
