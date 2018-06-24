import React, { Component } from 'react'
import GridItemDescr from './GridItemDescr';
export default class ShoesContent extends Component {
  render() {
    return (
      <div className="shoe-wrapper">

        <h1>BEST SUMMER EVER:AIR VAPORMAX</h1>
        <div className="shoes-container">
        
            <div className="grid-item">
                <img src="/assets/shoes5.tif" alt=""/>
                <GridItemDescr title="Nike Air VaporWave" subtitle="Unisex Running Shoes" />
            </div>
            <div className="grid-item">
                <img src="/assets/shoe3.tif" alt=""/>
                <GridItemDescr title="Nike Air Red" subtitle="Unisex Running Shoes" />
            </div>
            <div className="grid-item">
                <img src="/assets/shoe2.tif" alt=""/>
                <GridItemDescr title="Nike Air Turqoise" subtitle="Women Running Shoes" />
            </div>
            <div className="grid-item">
                <img src="/assets/shoe1.tif" alt=""/>
                <GridItemDescr title="Nike Air Grey" subtitle="Men Running Shoes" />
            </div>
        </div>
      </div>
    )
  }
}
