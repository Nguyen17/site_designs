import React, {Component} from 'react'

export default class GridSecondaryContent extends Component {
    render() {
        return (
            <div className="grid-secondary-wrapper">
                <div className="grid-secondary-content">
                    <div className="grid-item">
                        <img src="/assets/roma.jpg" alt=""/>
                        <div className="grid-subtitle">
                            <h1>NIKE STREETWEAR</h1>
                            <p>Explore our NEW collections.</p>
                            <span className="nike-secondary-btn">SHOP STREETWEAR</span>
                        </div>
                    </div>

                    <div className="grid-item">
                        <img src="/assets/Anthony-Blasko_01.jpg" alt=""/>
                        <div className="grid-subtitle">
                            <h1>NIKE <span className="red-font">SPORTS</span></h1>
                            <p>Featuring new sports arrival.</p>
                            <span className="nike-secondary-btn">SHOP STREETWEAR</span>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}
