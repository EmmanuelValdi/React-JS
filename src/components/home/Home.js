import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class home extends Component {
    render() {
        return (
            <section className="start-page parallax-background" id="home">
                <img className="fondo" src="./start-page.jpg" alt="img"/>
                <div className="opasity">
                    <div className="content">
                        <div className="text-content">
                            <div className="logo"><img src="./img/home/logo.png" alt=""/></div>
                            <br/>
                            <h1>Creative branding</h1>
                            <hr className="w-25"/>
                            <p>Please familiarize yourself with our offer</p>
                            <Link to="/"><div className="read-more">read more</div></Link>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
