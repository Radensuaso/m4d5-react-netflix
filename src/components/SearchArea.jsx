import React, { Component } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { FaStream, FaThLarge } from "react-icons/fa";
import CustomCarousel from "./CustomCarousel";

class SearchArea extends Component {
  state = {
    stateMovies: [],
    searchValue: "",
  };

  fetchAndDisplayMovies = async (e, search) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=3d9e8fbe&s=" + search
      );

      const parsedResponse = await response.json();
      const movies = parsedResponse.Search;

      if (response.ok) {
        this.setState({ stateMovies: movies });
      } else {
        console.log("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  updateSearchState = (value) => {
    this.setState({ searchValue: value });
  };

  render() {
    return (
      <Container fluid id="search-area">
        <Row className="pl-2 w-100 justify-content-between align-items-center">
          <Col xm={12} sm={8} md={6} lg={5} className="d-flex">
            <h3 className="mr-3 text-nowrap">Search Movies</h3>
            <form
              onSubmit={(e) =>
                this.fetchAndDisplayMovies(e, this.state.searchValue)
              }
              className="d-flex"
            >
              <Form.Control
                className="mr-2"
                type="text"
                placeholder="Search"
                value={this.state.search}
                onChange={(e) => this.updateSearchState(e.currentTarget.value)}
              />
              <Button type="submit" variant="secondary">
                Search
              </Button>
            </form>
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
        <Row className="mt-4 pl-2" id="searchedMovies">
          {/*  {this.state.stateMovies.map((movie) => (
            <Col
              xm={12}
              sm={6}
              md={4}
              lg={3}
              className="mb-3"
              key={movie.imdbID}
            >
              <img className="img-fluid" src={movie.Poster} alt={movie.Title} />
            </Col>
          ))} */}
          <CustomCarousel
            searchQuery={this.state.searchQuery}
            movies={this.state.stateMovies}
          />
        </Row>
      </Container>
    );
  }
}

export default SearchArea;

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
