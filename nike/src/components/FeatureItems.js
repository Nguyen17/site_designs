import React, {Component} from 'react'

export default class FeatureItems extends Component {
    render() {
        return (
            <div>
                <div className="feature-items-wrapper">
                    <div className="feature-items-grid">
                        <div className="small-grid-item">

                            <h3>ICONS</h3>
                            <ul>
                                <li>Air Force 1</li>
                                <li>VaporMax</li>
                                <li>Air Max 60</li>
                                <li>Air Max 90</li>
                            </ul>
                        </div>

                        <div className="small-grid-item">

                            <h3>SHOES</h3>
                            <ul>
                                <li>Running Shoes</li>
                                <li>Basketball Shoes</li>
                                <li>Jordan Shoes</li>
                                <li>Training Shoes</li>
                            </ul>
                        </div>
                        <div className="small-grid-item">

                            <h3>KIDS</h3>
                            <ul>
                                <li>Kids' Running Shoes</li>
                                <li>Kids' Basketball Shoes</li>
                                <li>Kids' Jordan Shoes</li>
                                <li>Kids' Training Shoes</li>
                            </ul>
                        </div>
                        <div className="small-grid-item">

                            <h3>FEATURED</h3>
                            <ul>
                                <li>Jordan Retro</li>
                                <li>NBA jerseys</li>
                                <li>Joggers</li>
                                <li>Sports Bras</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
