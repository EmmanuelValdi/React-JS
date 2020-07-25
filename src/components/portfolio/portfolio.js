import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class portfolio extends Component {
    render() {
        return (
            <section className="portfolio" id="portfolio">
                <div className="container text-center">
                    <h2>Portfolio</h2>
                    <hr/>
                    <div className="card-columns">
                        <div className="card">
                            <img src="./img/portfolio/1.png" className="card-img" alt=""/>
                        </div>
                        <div className="card">
                            <img src="./img/portfolio/2.png" className="card-img" alt=""/>
                        </div>
                        <div className="card">
                            <img src="./img/portfolio/3.png" className="card-img" alt=""/>
                        </div>
                        <div className="card">
                            <img src="./img/portfolio/4.png" className="card-img" alt=""/>
                        </div>
                        <div className="card">
                            <img src="./img/portfolio/5.png" className="card-img" alt=""/>
                        </div>
                        <div className="card">
                            <img src="./img/portfolio/6.png" className="card-img" alt=""/>
                        </div>
                        <div className="card">
                            <img src="./img/portfolio/7.png" className="card-img" alt=""/>
                        </div>
                        <div className="card">
                            <img src="./img/portfolio/8.png" className="card-img" alt=""/>
                        </div>
                        <div className="card">
                            <img src="./img/portfolio/9.png" className="card-img" alt=""/>
                        </div>
                        <div className="card">
                            <img src="./img/portfolio/10.png" className="card-img" alt=""/>
                        </div>
                        <div className="card">
                            <img src="./img/portfolio/11.png" className="card-img" alt=""/>
                        </div>
                    </div>
                    <Link href="/"><div className="read-more" >Read More</div></Link>
                </div>
            </section>
        )
    }
}
