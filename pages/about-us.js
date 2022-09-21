import Header from '../components/Header';
import Footer from '../components/Footer';
// import '../styles/about-us.css';
import Alec from '../public/images/alec.jpg';
import Ryan from '../public/images/ryan.jpg';
import Ben from '../public/images/ben.jpg';
import Rui from '../public/images/rui.jpeg';
import Shade from '../public/images/shade.png';
import Yuwei from '../public/images/yu-wei.jpg';
import Github from '../public/images/github.png';
import Linkedin from '../public/images/linkedin.png';
import Image from 'next/image';

import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


export default class AboutUs extends Component {
    render() {
        return (
            <>
                <Carousel className="carry" interval={null} >
                    {/* <div>
                        <h2>Welcome to The Stack Fellows Software Dev Team Page! </h2>
                        <h3> Scroll through the Carousel to Meet the Devs! </h3>
                    </div> */}
                    <div>
                        <h2> Alec Torres </h2>
                        <h3> Full-Stack Software Developer</h3>
                        <p> FILL IN INFO ABOUT YOU</p>
                        <div class="flex items-stretch; flex justify-evenly justify-content: center; ">
                            <div className="flex justify-center justify-content: center; ">
                                <a href="https://github.com/atorresla24" className="scale-75">
                                    <Image src={Github} alt="github photo" class="social-link" />
                                </a>
                                <div>
                                    <Image
                                        className="ourTeamImg"
                                        src={Alec}
                                        alt="Alec Torres"
                                    />
                                </div>
                                <a href="https://www.linkedin.com/in/alecjtorres" className="scale-50">
                                    <Image src={Linkedin} alt="linkedin photo" class="social-link" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div id="person-div">
                        <h2> Ryan McMillan </h2>
                        <h3> Full-Stack Software Developer </h3>
                        <p> Greetings my fellow human, Glad to see ya here! My name is Ryan and I am a new and excited software developer! I personally love to play and stream video games, as well as spending a lot of time playing my guitar. One of my favorite outdoor activities is Disc Golf, such a great sport and a great hike all in one! Thanks for coming to my Ted talk yall!</p>
                        <Image
                            className="ourTeamImg"
                            src={Ryan}
                            alt="Ryan McMillan"
                        />
                        <div className="flex justify-center justify-content: center; ">
                            <a href="https://github.com/RyanLMcMillan" className="scale-75">
                                <Image src={Github} alt="github photo" class="social-link" />
                            </a>
                            <a href="https://www.linkedin.com/in/ryan-m-369b50132/" className="scale-50">
                                <Image src={Linkedin} alt="linkedin photo" class="social-link" />
                            </a>
                        </div>
                    </div>

                    <div id="person-div">
                        <h2> Benjamin Small </h2>
                        <h3> Full-Stack Software Developer </h3>
                        <p>FILL IN LATER</p>
                        <Image
                            className="ourTeamImg"
                            src={Ben}
                            alt="Benjamin Small"
                        />
                        <div className="flex justify-center justify-content: center; ">
                            <a href="https://github.com/BenjaminSmall94" className="scale-75">
                                <Image src={Github} alt="github photo" class="social-link" />
                            </a>
                            <a href="https://www.linkedin.com/in/bjgsmall/" className="scale-50">
                                <Image src={Linkedin} alt="linkedin photo" class="social-link" />
                            </a>
                        </div>

                    </div>

                    <div id="person-div">
                        <h2> Rui Guo </h2>
                        <h3> Full-Stack Software Developer </h3>
                        <p>FILL IN LATER</p>
                        <Image
                            className="ourTeamImg"
                            src={Rui}

                            alt="Rui Guo"
                        />

                        <div className="flex justify-center justify-content: center; ">
                            <a href="https://github.com/mvrk" className="scale-75">
                                <Image src={Github} alt="github photo" class="social-link" />
                            </a>
                            <a href="https://www.linkedin.com/in/rui-guo/" className="scale-50">
                                <Image src={Linkedin} alt="linkedin photo" class="social-link" />
                            </a>
                        </div>
                    </div>

                    <div id="person-div">
                        <h2> Falashade Greene </h2>
                        <h3> Full-Stack Software Developer </h3>

                        <p>FILL IN LATER</p>
                        <Image
                            className="ourTeamImg"
                            src={Shade}
                            alt="Falashade Greene"
                        />

                        <div className="flex justify-center justify-content: center; ">
                            <a href="https://github.com/falashadegreene" className="scale-75">
                                <Image src={Github} alt="github photo" class="social-link" />
                            </a>
                            <a href="http://linkedin.com/in/falashadegreene" className="scale-50">
                                <Image src={Linkedin} alt="linkedin photo" class="social-link" />
                            </a>
                        </div>
                    </div>

                    <div id="person-div">
                        <h2> Yu-Wei Hsieh </h2>
                        <h3> Full-Stack Software Developer</h3>

                        <p>FILL IN LATER</p>
                        <Image
                            className="ourTeamImg"
                            src={Yuwei}
                            alt="Yu-Wei Hsieh"
                        />
                        <div className="flex justify-center justify-content: center; ">
                            <a href="https://github.com/welly091" className="scale-75">
                                <Image src={Github} alt="github photo" class="social-link" />
                            </a>
                            <a href="https://www.linkedin.com/in/welly-yu-wei-hsieh/" className="scale-50">
                                <Image src={Linkedin} alt="linkedin photo" class="social-link" />
                            </a>
                        </div>
                    </div>
                </Carousel>
            </>
        )
    }
}