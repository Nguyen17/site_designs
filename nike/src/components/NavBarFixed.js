import React, { Component } from 'react'

export default class NavBarFixed extends Component {
  render() {
    return (
      <div>
        <div className="fixed-navbar">
            <div className="clear"></div>
                <img src="/assets/nikeLogo.svg" alt=""/>
                <div className="menu-icon-container">
                    <img src="/assets/menu-icon.svg" alt="" id="menu-icon"/>
                </div>
            
        </div>
      </div>
    )
  }
}
