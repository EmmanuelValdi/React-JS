import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class contact extends Component {
    render() {
        return (
            <div>
                <section className="contact" id="contact">
                    <div className="container">
                        <h2>Contact</h2>
                        <hr/>
                        <div className="row">
                            <div className="col-md-6">
                                <form>
                                    <div className="row">
                                        <div className="col">
                                            <p>YOUR NAME</p>
                                            <input type="text" className="form-control"/>
                                        </div>
                                        <div className="col">
                                            <p>YOUR E-MAIL</p>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <p>MESSAGE</p>
                                            <textarea className="form-control-area" id="Textarea" cols="63" rows="3" required></textarea>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-6">
                                <div className="content">
                                    <p>To contact us please use the contact form visible<br/><br/>
                                        When sending files, please use<br/>
                                        the following e-mail<br/><br/>
                                        <strong>Tomasz Mazurczak</strong><br/>
                                    </p>
                                    <strong><p>e-mail: contact@thomsoon.com</p></strong>
                                </div>
                            </div>
                        </div>
                        <Link className="btn btn-light" href="/">SEND</Link>
                    </div>
                </section>
            </div>
        )
    }
}
