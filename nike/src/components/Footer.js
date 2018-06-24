import React, {Component} from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer-wrapper">
                    <div className="footer-grid">

                        <div className="footer-grid-item">
                            <ul className="list-bold">
                                <li>GIFT CARDS</li>
                                <li>STUDENT DISCOUNT</li>
                                <li>MILITARY DISCOUNT
                                </li>
                                <li>FIND A STORE</li>
                                <li>SIGN UP FOR EMAIL</li>
                                <li>BECOME A MEMBER</li>
                                <li>FEEDBACK</li>
                            </ul>
                        </div>

                        <div className="footer-grid-item">
                            <ul>
                                <li>Order Status</li>
                                <li>Shipping and Delivery</li>
                                <li>Returns</li>
                                <li>Payment Options</li>
                                <li>Contact Us</li>

                            </ul>
                        </div>

                        <div className="footer-grid-item">
                            <ul>
                                <li>News</li>
                                <li>Careern</li>
                                <li>Converse Culture</li>
                                <li>Investors</li>
                                <li>Sustainable Innovation</li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}