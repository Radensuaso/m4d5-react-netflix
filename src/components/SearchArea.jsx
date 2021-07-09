import React, { Component } from "react"
import { Button, Container, Row, Col, Form } from "react-bootstrap"
import { FaStream, FaThLarge } from "react-icons/fa"
import CustomCarousel from "./CustomCarousel"

class SearchArea extends Component {
  state = {
    stateMovies: [],
    searchValue: "",
  }

  fetchAndDisplayMovies = async (search, e) => {
    if (e) {
      e.preventDefault()
    }

    try {
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=3d9e8fbe&s=" + search
      )

      const parsedResponse = await response.json()
      const movies = parsedResponse.Search

      if (response.ok) {
        this.setState({ stateMovies: movies })
      } else {
        console.log("something went wrong")
      }
    } catch (error) {
      console.log(error)
    }
  }

  updateSearchState = (value) => {
    this.setState({ searchValue: value })
  }

  componentDidMount = () => {
    this.fetchAndDisplayMovies("harry potter")
  }

  render() {
    return (
      <Container fluid id="search-area">
        <Row className="pl-2 w-100 justify-content-between align-items-center">
          <Col xm={12} sm={8} md={6} lg={5} className="d-flex">
            <h3 className="mr-3 text-nowrap">Search Movies</h3>
            <form
              onSubmit={(e) =>
                this.fetchAndDisplayMovies(this.state.searchValue, e)
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
          <CustomCarousel
            movies={this.state.stateMovies}
            searchQuery="Lord of the rings"
          />
          <CustomCarousel
            movies={this.state.stateMovies}
            searchQuery="Avengers"
          />
        </Row>
      </Container>
    )
  }
}

export default SearchArea
