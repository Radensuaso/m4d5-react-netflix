import React, { Component } from "react"
import MyCarouselMovie from "./MyCarouselMovie"
import { Container, Row, Carousel } from "react-bootstrap"

export default class CustomCarousel extends Component {
  state = {
    movies: [],
  }
  fetchMovies = async () => {
    try {
      console.log(this.props.searchQuery)
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=3d9e8fbe&s=" + this.props.searchQuery
      )
      const fetchedMovies = await response.json()
      this.setState({ movies: fetchedMovies.Search })
      console.log(fetchedMovies.Search)
      console.log(this.state.movies)
    } catch (error) {
      console.log(error)
    }
  }
  componentDidMount = () => {
    this.fetchMovies()
  }

  render() {
    return (
      <div className="my-5">
        <Carousel>
          <Carousel.Item>
            <Container fluid>
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
            <Container fluid>
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
            <Container fluid>
              <Row>
                {this.props.movies
                  .filter((movie, i) => i < 6)
                  .map((movie) => (
                    <MyCarouselMovie movie={movie} />
                  ))}
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}
