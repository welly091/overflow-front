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
                    <div className='mr-28'>
                        <h2> Alec Torres </h2>
                        <h3> Full-Stack Software Developer</h3>
                        <p> FILL IN INFO ABOUT YOU</p>
                        <div className='flex'>
                            <div className=''>
                                <a href="https://github.com/atorresla24" className="absolute scale-75 left-6 top-52">
                                    <Image src={Github} alt="github photo" class="social-link" />
                                </a>
                                <div>
                                    <a className="absolute top-24 left-1/3">
                                    <Image
                                    src={Alec}
                                    alt="Alec Torres"
                                    />
                                    </a>
                                </div>
                                <a href="https://www.linkedin.com/in/alecjtorres" className="absolute right-0 scale-50 top-18">
                                    <Image src={Linkedin} alt="linkedin photo" class="social-link" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div id="person-div">
                        <h2> Ryan McMillan </h2>
                        <h3> Full-Stack Software Developer </h3>
                        <p> Greetings my fellow human, Glad to see ya here! My name is Ryan and I am a new and excited software developer! I personally love to play and stream video games, as well as spending a lot of time playing my guitar. One of my favorite outdoor activities is Disc Golf, such a great sport and a great hike all in one! Thanks for coming to my Ted talk yall!</p>
                        <a className="absolute top-24 left-1/3">
                        <Image
                            src={Ryan}
                            alt="Ryan McMillan"
                        />
                        </a>
                        <div>
                            <a href="https://github.com/RyanLMcMillan" className="absolute scale-75 left-6 top-52">
                                <Image src={Github} alt="github photo" class="social-link" />
                            </a>
                            <a href="https://www.linkedin.com/in/ryan-m-369b50132/" className="absolute right-0 scale-50 top-18">
                                <Image src={Linkedin} alt="linkedin photo" class="social-link" />
                            </a>
                        </div>
                    </div>

                    <div id="person-div">
                        <h2> Benjamin Small </h2>
                        <h3> Full-Stack Software Developer </h3>
                        <p>FILL IN LATER</p>
                        <a className="absolute top-24 left-1/3">
                        <Image
                            src={Ben}
                            alt="Benjamin Small"
                        />
                        </a>
                        <div>
                            <a href="https://github.com/BenjaminSmall94" className="absolute scale-75 left-6 top-52">
                                <Image src={Github} alt="github photo" class="social-link" />
                            </a>
                            <a href="https://www.linkedin.com/in/bjgsmall/" className="absolute right-0 scale-50 top-18">
                                <Image src={Linkedin} alt="linkedin photo" class="social-link" />
                            </a>
                        </div>

                    </div>

                    <div id="person-div">
                        <h2> Rui Guo </h2>
                        <h3> Full-Stack Software Developer </h3>
                        <p>FILL IN LATER</p>
                        <a className="absolute top-24 left-1/3">
                        <Image
                            src={Rui}
                            alt="Rui Guo"
                        />
                        </a>
                        <div>
                            <a href="https://github.com/mvrk" className="absolute scale-75 left-6 top-52">
                                <Image src={Github} alt="github photo" class="social-link" />
                            </a>
                            <a href="https://www.linkedin.com/in/rui-guo/" className="absolute right-0 scale-50 top-18">
                                <Image src={Linkedin} alt="linkedin photo" class="social-link" />
                            </a>
                        </div>
                    </div>

                    <div id="person-div">
                        <h2> Falashade Greene </h2>
                        <h3> Full-Stack Software Developer </h3>

                        <p>FILL IN LATER</p>
                        <a className='absolute top-24 left-1/3'>
                        <Image
                            src={Shade}
                            alt="Falashade Greene"
                        />
                        </a>
                        <div>
                            <a href="https://github.com/falashadegreene" className="absolute scale-75 left-6 top-52">
                                <Image src={Github} alt="github photo" class="social-link" />
                            </a>
                            <a href="http://linkedin.com/in/falashadegreene" className="absolute right-0 scale-50 top-18">
                                <Image src={Linkedin} alt="linkedin photo" class="social-link" />
                            </a>
                        </div>
                    </div>

                    <div id="person-div">
                        <h2> Yu-Wei Hsieh </h2>
                        <h3> Full-Stack Software Developer</h3>

                        <p>FILL IN LATER</p>
                        <a className='absolute top-24 left-1/3'>
                        <Image
                            src={Yuwei}
                            alt="Yu-Wei Hsieh"
                        />
                        </a>
                        <div>
                            <a href="https://github.com/welly091" className="absolute scale-75 left-6 top-52">
                                <Image src={Github} alt="github photo" class="social-link" />
                            </a>
                            <a href="https://www.linkedin.com/in/welly-yu-wei-hsieh/" className=''>
                                <Image src={Linkedin} alt="linkedin photo" class="social-link" />
                            </a>
                        </div>
                    </div>
                    
                </Carousel>
            </>
        )
    }
}