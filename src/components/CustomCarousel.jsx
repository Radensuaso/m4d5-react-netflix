import React, { Component } from "react";
import MyCarouselMovie from "./MyCarouselMovie";
import { Container, Row, Col, Carousel } from "react-bootstrap";

export default class CustomCarousel extends Component {
  state = {
    movies: [],
  };
  fetchMovies = async () => {
    try {
      console.log(this.props.searchQuery);
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=3d9e8fbe&s=" + this.props.searchQuery
      );
      const fetchedMovies = await response.json();
      this.setState({ movies: fetchedMovies.Search });
      console.log(fetchedMovies.Search);
      console.log(this.state.movies);
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount = () => {
    this.fetchMovies();
  };

  render() {
    return (
      <div>
        {/*  <Container>
          <Row>
            {this.props.movies.map((movie) => (
              <Col xs={12} sm={6} md={4} lg={3} xl={2}>
                <img
                  className="d-block w-100"
                  src={movie.Poster}
                  alt={movie.Title}
                />
              </Col>
            ))}
          </Row>
        </Container> */}
        <Carousel>
          <Carousel.Item>
            <Container>
              <Row>
                {this.props.movies
                  .filter((movie, i) => i < 6)
                  .map((movie) => (
                    <MyCarouselMovie movie={movie} />
                  ))}
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
              <Row>
                {this.props.movies
                  .filter((movie, i) => i >= 5 && i <= 10)
                  .map((movie) => (
                    <MyCarouselMovie movie={movie} />
                  ))}
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
              <Row>
                {this.props.movies
                  .filter((movie, i) => i > 2 && i < 9)
                  .map((movie) => (
                    <MyCarouselMovie movie={movie} />
                  ))}
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
