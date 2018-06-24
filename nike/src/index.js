/**
 * APP MAIN SCRIPT
 * -this file holds most of the logic to -
 *  display the site content
 * 
 */
import React, { Component } from 'react'
import ReactDom from 'react-dom';

/** 
 * Importing 3rd party, if any
 * 
*/





// ======================


/** 
 * Importing Site Components
*/
import SiteMenu from './components/SiteMenu';
import VideoContent from './components/VideoContent';
import ShoesContent from './components/ShoesContent';
import VideoSecondaryContent from "./components/VideoSecondaryContent";
import GridSecondaryContent from "./components/GridSecondaryContent";
import NavBarFixed from "./components/NavBarFixed";
import FeatureItems from "./components/FeatureItems";
import Footer from "./components/Footer";

/** 
 * Exporting App Component
*/
export default class App extends Component {
  render() {
    return (
      <div className="app-container">

        {/* Fixed NAVBAR */}
        <NavBarFixed />
        {/* Site Navigation */}
        <SiteMenu />

        {/* Video BG */}
        <VideoContent 
        source="/assets/nike_video.mp4"
        title="Just Do It."        
        />

        {/* Display Shoes */}
        <ShoesContent />

        {/* Video Secondary BG */}
        <VideoSecondaryContent 
        source="/assets/nike_video_2.mp4"
        title="DARE TO RISE."
        />

      {/* TWO COLUMN GRID */}
      <GridSecondaryContent />

      {/* Feature Items  FOUR COLUMN GRID*/}
      <FeatureItems />

      {/* Footer */}
      <Footer />
      </div>
    )
  }
}


/**
 * 
 * Rendering View to Root
 */
var container = document.querySelector(".app");
ReactDom.render(<App />, container);