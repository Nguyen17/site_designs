import React, { Component } from 'react'

export default class VideoSubtitle extends Component {
  render() {
    return (
      <div>
      <div className="video-subtitle">
                    <h2><strong>{this.props.title}</strong></h2>
                    <p>Don’t dream it—go DO it. This summer, athletes from three cities are going to show the world what it takes to chase your dreams</p>

                    <p>
                    Get involved and get inspired on the city pages below.
                    </p>

                    <ul id="video-subtitle-locations">
                      <li><a href="">Los Angeles</a></li>
                      <li><a href="">Chicago</a></li>
                      <li><a href="">New York</a></li>
                    </ul>
                </div>
      </div>
    )
  }
}
