import React, { Component } from "react"
import './mainbanner.css'

class Banner extends Component {
  render() {
    return (
      <div className="news-container">
        <div className="news_tag">Latest</div> 
        <img className="news_image" src={this.props.imageURL} />
        <h3 className="news_text">{this.props.headline}</h3>
      </div>

    )
  }
}

export default Banner