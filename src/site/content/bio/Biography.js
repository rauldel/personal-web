import React, { Fragment } from 'react';
import { Timeline, Event } from 'react-timeline-scribble';

import './Biography.css';
import cuteguy from '../../../assets/img/cuteguy.jpg';

class Biography extends React.Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h1 className="bioTitle">
                            Never be cruel, never be cowardly
                            <br/>
                            less is beautiful
                        </h1>
                        <img className="bioTitleImage" src={cuteguy} alt="Cuteguy_nohomo"/>
                    </div>
                </div>
                <br/>
                <div className="row margin-top-45">
                    <div class="col-md-3">
                        <h2>My story</h2>
                    </div>
                    <div class="col-md-9">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec vehicula libero auctor dolor vulputate varius.
                            Nunc ac nisl non felis finibus ultricies.
                            Donec at porttitor lorem.
                            Vestibulum ante ipsum primis in faucibus orci luctus
                            et ultrices posuere cubilia Curae; Proin volutpat augue ex.
                            In hac habitasse platea dictumst. Suspendisse at ante ligula.
                            Nulla facilisis velit egestas massa imperdiet, id posuere turpis feugiat.
                        </p>
                        <br/>
                        <p>
                            Etiam at consectetur sapien, vel laoreet diam.
                            Aliquam erat volutpat. Quisque fermentum purus ac
                            justo fermentum vulputate eu id libero. Donec quam
                            ipsum, malesuada nec interdum in, commodo vel nisl.
                            Aliquam erat volutpat. Donec suscipit molestie urna,
                            at pharetra tortor interdum eget. Ut lobortis
                            viverra ex, quis faucibus sapien iaculis in.
                            Suspendisse laoreet ornare justo sit amet fermentum.
                            Pellentesque non nulla id libero pretium bibendum vel nec dolor.
                        </p>
                    </div>
                </div>
                <div className="row margin-top-45">
                    <div class="col-md-3">
                        <h2>Concerts attended</h2>
                    </div>
                    <div class="col-md-9">
                        <div class="row">
                            <div class="col-md-4">
                                <ul class="list-unstyled">
                                    <li>Queen + Adam Lambert</li>
                                    <li>Metallica</li>
                                    <li>Roger Waters</li>
                                </ul>
                            </div>
                            <div class="col-md-4">
                                <ul class="list-unstyled">
                                    <li>Guns n Roses</li>
                                    <li>Mägo de Oz</li>
                                    <li>The wailers</li>
                                </ul>
                            </div>
                            <div class="col-md-4">
                                <ul class="list-unstyled">
                                    <li>Malú</li>
                                    <li>Mark Knopfler</li>
                                    <li>Simó Hervàs</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Fragment>
                    <h1>React Timeline Scribble</h1>
                    <Timeline>
                      <Event interval={"1993"} title={"Lorem"} subtitle={"Ipsum"}>
                        dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                        id est laborum.
                      </Event>
                      <Event interval={"2015 – 2016"} title={"Lorem"} subtitle={"Ipsum"}>
                        dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                        id est laborum.
                      </Event>
                    </Timeline>
                  </Fragment>
            </div>
        );
    };
}

export default Biography;
