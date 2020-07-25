import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class footer extends Component {
    render() {
        return (
            <section className="footer" id="footer">
                <div className="container footer-box text-center">
                    <div className="img"><img src="./img/footer/logo-footer.png" alt=""/></div>
                    <div className="list-footer">
                        <Link className="list-item" to="">Home</Link>
                        <Link className="list-item" to="">Privacy Policy</Link>
                        <Link className="list-item" to="">RCC</Link>
                        <Link className="list-item" to="">Facebook</Link>
                        <Link className="list-item" to="">Dribble</Link>
                        <Link className="list-item" to="">Twitter</Link>
                        <Link className="list-item" to="">Contact</Link>
                    </div>
                    <div className="copyright">&copy; 2020. All Rights Reserved</div>
                </div>
            </section>
        )
    }
}
