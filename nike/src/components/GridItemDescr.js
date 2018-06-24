import React, { Component } from 'react'

export default class GridItemDescr extends Component {
  render() {
    return (
      <div>
        <div className="grid-item-descr">
              <span className="item-title">{this.props.title}</span>
                <p>{this.props.subtitle}</p>
                <span className="nike-shop-btn">Shop Now</span>
        </div>
      </div>
    )
  }
}
