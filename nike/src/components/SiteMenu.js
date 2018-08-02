import React, {Component} from 'react'

export default class SiteMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {

            placeholder: "Search ..."
        };
    }

    render() {
        return (
            <div>
                <div className="site-deals">
                    <p>Free Shipping on order over $25.</p>
                </div>
                <div className="site-menu">
                    {/* <div className="clear">

          </div> */}
                    <div className="site-logo">
                        <img src="/assets/nikeLogo.svg" alt=""/>
                        <h3>NIKE</h3>
                    </div>

                    <div className="site-options">
                        <ul>
                            <li>Login to Nike Account</li>
                            <li>Help</li>
                            <li>Shop</li>
                        </ul>
                    </div>

                    {/* Search Box */}
                    <input type="text" placeholder={this.state.placeholder}/>

                </div>

                <div className="site-secondary-menu">
                    <ul>
                        <li>MEN</li>
                        <li>WOMEN</li>
                        <li>BOYS</li>
                        <li>GIRLS</li>
                        <li>BAGS</li>
                    </ul>
                </div>
                <div className="shipping-info">
                    <h2>$5 TWO DAY SHIPPING NOW AVAILABLE</h2>
                </div>
            </div>
        )
    }
}
