import React, {Component} from 'react'

export default class VideoSecondaryContent extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      title:""
    };
  }
  
    render() {

      var title = this.props.title;
      this.state.title = title;
        return (
            <div>
                <div>
                    <div className="video-content">
                        <div className="video-initialize">
                            <video preload="true" loop="loop" autoPlay="autoplay" muted="muted">
                                <source src={this.props.source} type="video/mp4"/>
                            </video>

                        </div>
                        <div>
                            <div className="video-content">
                                <div className="video-initialize">
                                    <video preload="true" loop="loop" autoPlay="autoplay" muted="muted">
                                        <source src={this.props.source} type="video/mp4"/>
                                    </video>

                                </div>
                                <div className="video-subtitle">
                                    <h2>
                                        <strong>{this.props.title}</strong>
                                    </h2>
                                    <p>Inspiring Native American and Aboriginal communities with sport.</p>
                                    <span className="nike-secondary-btn">SHOP THE COLLECTION</span>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
