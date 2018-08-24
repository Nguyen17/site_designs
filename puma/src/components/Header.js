import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div className="header-component">
        <nav className="nav-primary">
            <div className="logo">
                <h1>PUMA</h1>
            </div>
            <div className="nav-primary__items">
                <ul>
                    <li>Women</li>
                    <li>Men</li>
                    <li>Kids</li>
                    <li>Explore</li>
                </ul>
            </div>
            <div className="nav-primary__search-input">
                <input type="text" placeholder="search..."/>
            </div>

            <div className="nav-primary__shop-acct">
                <ul>
                    <li>login</li>
                    <li>usa</li>
                    <li>cart</li>
                </ul>
            </div>
        </nav>

        <div className="shipping-order center">
            <h5>Free shipping order over $75. Free return, always.</h5>
        </div>
      </div>
    )
  }
}

export default Header;
