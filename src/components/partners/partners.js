import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class partners extends Component {
    render() {
        return (
            <section className="partners">
                <img src="./img/partners/partners.jpg" className="partners w-100" alt=""/>
                <h2>Thanks for partners</h2>
                <div className="list-partners">
                    <Link to=""><img src="./img/partners/logo1.png" alt=""/></Link>
                    <Link to=""><img src="./img/partners/logo2.png" alt=""/></Link>
                    <Link to=""><img src="./img/partners/logo3.png" alt=""/></Link>
                    <Link to=""><img src="./img/partners/logo4.png" alt=""/></Link>
                </div>
            </section>
        )
    }
}
