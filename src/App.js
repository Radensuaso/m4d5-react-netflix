import "./App.css"
import NetflixNavbar from "./components/SaraNetflixNavbar"
import CarouselCustom from "./components/CarouselCustom"
import React, { Component } from 'react'

export default class App extends Component {
  state={
    query:""
  }
  render() {
    return (
     
         <>
      <NetflixNavbar  searchCallback={(childSearchquery)=>this.setState({query:childSearchquery})} />

     {this.state.query?<CarouselCustom searchQuery={this.state.query} />:<CarouselCustom searchQuery="harry potter" />} 
     <CarouselCustom searchQuery="Lord of the rings" />
     <CarouselCustom searchQuery="harry potter" />
    
    </>
     
    )
  }
}



