import "./App.css"
import NetflixNavbar from "./components/SaraNetflixNavbar"
import Carousel from "./components/Carousel"
import React, { Component } from 'react'

export default class App extends Component {
  state={
    query:""
  }
  render() {
    return (
     
         <>
      <NetflixNavbar  searchCallback={(childSearchquery)=>this.setState({query:childSearchquery})} />

     {this.state.query&&<Carousel searchQuery={this.state.query} />} 
    </>
     
    )
  }
}



