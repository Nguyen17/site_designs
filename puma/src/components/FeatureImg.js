import React, { Component } from 'react';


export default class FeatureImg extends Component {
  render() {
    return (
      <div>
        <div className="feature-img">

          {/* Layer 1 : Image will be beneath the description */}
            <img src={this.props.img} alt=""/>

            {/* Layer 2: Description  */}
            <div className="feature-img__content">
              <div className="feature-img__content-wrapper">
                  <h1>{this.props.title}</h1>
                  <h3>{this.props.sub}</h3>
                  <div className="shop-button">
                      <button>Shop {this.props.shop}</button>
                      <button>Shop {this.props.shop} Collection</button>
                  </div>
              </div>
            </div>
        </div>
      </div>
    )
  }
}
