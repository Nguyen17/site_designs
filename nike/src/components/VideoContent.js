import React, { Component } from 'react'

import VideoSubtitle from "./VideoSubtitle";

export default class VideoContent extends Component {

constructor(props) {
    super(props);

    this.state = {
      title:""
    };   
}

  render() {

    var title = this.props.title;
    var descOne = this.props.descOne;
    var descTwo = this.props.descTwo;

    this.state.title= title;
    this.state.descOne = descOne;
    this.state.descTwo = descTwo;
    return (
      <div>
        <div className="video-content">
            <div className="video-initialize">
                <video preload="true" loop="loop" autoPlay="autoplay" muted="muted">
                    <source src={this.props.source} type="video/mp4"/>
                </video>

          
            </div>

              <VideoSubtitle 
              title={this.state.title} 
              />
         
        </div>
      </div>
    )
  }
}
