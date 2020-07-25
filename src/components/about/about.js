import React, { Component } from 'react'

export default class about extends Component {
    render() {
        return (
            <section className="about" id="about">
                <div className="container text-center">
                    <h2>About us</h2>
                    <hr/>
                    <p className="title">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                    <div className="row">
                        <div className="col-md-4">
                            <img src="./img/about/responsive.png" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Responsive</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img src="./img/about/minimalist.png" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Minimalist</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img src="./img/about/img1.png" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Freebies</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
